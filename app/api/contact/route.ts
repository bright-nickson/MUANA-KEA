import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { sendContactNotification, ContactPayload } from "@/lib/mailer";

interface IncomingPayload extends ContactPayload {
  honeypot?: string;
}

function countUrls(text: string): number {
  const matches = text.match(/https?:\/\//gi);
  return matches ? matches.length : 0;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as IncomingPayload;

    // Honeypot-based spam protection
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Behave like success without performing any work
      return NextResponse.json({ success: true });
    }

    const name = (body.name || "").trim();
    const company = (body.company || "").trim();
    const email = (body.email || "").trim();
    const role = (body.role || "").trim();
    const areaOfInterest = (body.areaOfInterest || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !areaOfInterest || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 },
      );
    }

    if (message.length < 20) {
      return NextResponse.json(
        { success: false, error: "Message is too short to process meaningfully." },
        { status: 400 },
      );
    }

    if (countUrls(message) > 5) {
      return NextResponse.json(
        { success: false, error: "Message appears to contain too many links." },
        { status: 400 },
      );
    }

    const supabase = getSupabaseClient();

    const { error: insertError } = await supabase.from("contact_submissions").insert({
      name,
      company,
      email,
      role,
      area_of_interest: areaOfInterest,
      message,
      created_at: new Date().toISOString(),
    });

    if (insertError) {
      console.error("Failed to insert contact submission", insertError);
      return NextResponse.json(
        { success: false, error: "We were unable to record your message. Please try again later." },
        { status: 500 },
      );
    }

    try {
      await sendContactNotification({
        name,
        company,
        email,
        role,
        areaOfInterest,
        message,
      });
    } catch (mailError) {
      console.error("Failed to send contact notification", mailError);
      // Do not fail the request if email sending fails; we already stored the record.
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected error handling contact submission", error);
    return NextResponse.json(
      { success: false, error: "Unexpected error while handling your message." },
      { status: 500 },
    );
  }
}
