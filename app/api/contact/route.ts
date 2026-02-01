import { NextResponse } from "next/server";
import { sendContactNotification, ContactPayload } from "@/lib/mailer";

interface IncomingPayload extends ContactPayload {
  honeypot?: string;
}

function countUrls(text: string): number {
  const matches = text.match(/https?:\/\//gi);
  return matches ? matches.length : 0;
}

// Store submissions in memory for production fallback
const submissions: any[] = [];

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

    // Store submission for manual processing
    const contactData = {
      name,
      company,
      email,
      role,
      areaOfInterest,
      message,
      timestamp: new Date().toISOString(),
      source: 'website-contact-form'
    };

    submissions.push(contactData);

    // Try to send email, but don't fail if it doesn't work
    let emailSent = false;
    try {
      await sendContactNotification({
        name,
        company,
        email,
        role,
        areaOfInterest,
        message,
      });
      emailSent = true;
    } catch (emailError) {
      console.error("Email sending failed, but continuing:", emailError);
    }

    // Log the submission for manual processing
    console.log("CONTACT FORM SUBMISSION:", JSON.stringify(contactData, null, 2));

    return NextResponse.json({ 
      success: true,
      message: emailSent 
        ? "Thank you for your message. We'll be in touch within 24 hours."
        : "Thank you for your message! We've received your submission and will respond within 24 hours.",
      emailSent
    });
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
      { status: 500 }
    );
  }
}

// Admin endpoint to view submissions (for manual processing)
export async function GET() {
  return NextResponse.json({ 
    submissions: submissions.slice(-50), // Last 50 submissions
    total: submissions.length 
  });
}
