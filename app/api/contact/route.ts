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
  // Method check
  if (request.method !== "POST") {
    return NextResponse.json(
      { error: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    // Vercel-safe body parsing
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("Body parsing failed:", parseError);
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    console.log("CONTACT REQUEST BODY:", JSON.stringify(body, null, 2));

    // Honeypot-based spam protection (silent discard)
    if (body.honeypot && String(body.honeypot).trim().length > 0) {
      console.log("HONEYPOT TRIGGERED - discarding submission");
      return NextResponse.json({ success: true }, { status: 204 });
    }

    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const email = String(body.email || "").trim();
    const role = String(body.role || "").trim();
    const areaOfInterest = String(body.areaOfInterest || "").trim();
    const message = String(body.message || "").trim();

    // Validation
    if (!name || !email || !areaOfInterest || !message) {
      console.log("VALIDATION FAILED - missing fields:", { name, email, areaOfInterest, message });
      return NextResponse.json(
        { error: "Missing required fields: name, email, area of interest, and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log("VALIDATION FAILED - invalid email:", email);
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    if (message.length < 20) {
      console.log("VALIDATION FAILED - message too short:", message.length);
      return NextResponse.json(
        { error: "Message must be at least 20 characters long to provide meaningful context." },
        { status: 400 }
      );
    }

    if (countUrls(message) > 5) {
      console.log("VALIDATION FAILED - too many URLs");
      return NextResponse.json(
        { error: "Message appears to contain excessive links." },
        { status: 400 }
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
    console.log("CONTACT STORED:", JSON.stringify(contactData, null, 2));

    // Try to send email with detailed error handling
    let emailSent = false;
    let emailError = null;

    try {
      // Check if mailer is available
      const { sendContactNotification } = await import("@/lib/mailer");
      
      // Check environment variables
      if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
        throw new Error("SMTP credentials not configured");
      }

      await sendContactNotification({
        name,
        company,
        email,
        role,
        areaOfInterest,
        message,
      });
      emailSent = true;
      console.log("EMAIL SENT SUCCESSFULLY");
    } catch (emailErr) {
      emailError = emailErr;
      console.error("EMAIL SENDING FAILED:", emailErr);
      
      // Log detailed error info
      if (emailErr instanceof Error) {
        console.error("Email error details:", {
          message: emailErr.message,
          stack: emailErr.stack,
          envVars: {
            SMTP_USER: !!process.env.SMTP_USER,
            SMTP_PASSWORD: !!process.env.SMTP_PASSWORD,
            SMTP_HOST: process.env.SMTP_HOST,
            SMTP_PORT: process.env.SMTP_PORT
          }
        });
      }
    }

    // Return appropriate response
    const response = {
      success: true,
      message: emailSent 
        ? "Thank you for your message. We'll be in touch within 24 hours."
        : "Thank you for your message! We've received your submission and will respond within 24 hours.",
      emailSent,
      submissionId: submissions.length - 1
    };

    console.log("CONTACT RESPONSE:", JSON.stringify(response, null, 2));

    return NextResponse.json(response);
    
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: "An unexpected error occurred while processing your message. Please try again later.",
        details: process.env.NODE_ENV === "development" && error instanceof Error ? error.message : undefined
      },
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
