import { NextResponse } from "next/server";
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

    // Send email notification
    await sendContactNotification({
      name,
      company,
      email,
      role,
      areaOfInterest,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling contact submission", error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("SMTP")) {
        return NextResponse.json(
          { success: false, error: "Email service is temporarily unavailable. Please try again later." },
          { status: 500 },
        );
      }
      if (error.message.includes("configuration")) {
        return NextResponse.json(
          { success: false, error: "Email service is not properly configured." },
          { status: 500 },
        );
      }
    }
    
    return NextResponse.json(
      { success: false, error: "Unexpected error while handling your message." },
      { status: 500 },
    );
  }
}
