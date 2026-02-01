import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/mailer";

interface NewsletterPayload {
  email: string;
}

// Store newsletter subscriptions in memory for production fallback
const subscriptions: any[] = [];

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
      console.error("Newsletter body parsing failed:", parseError);
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    console.log("NEWSLETTER REQUEST BODY:", JSON.stringify(body, null, 2));

    const email = String(body.email || "").trim();

    // Validation
    if (!email) {
      console.log("NEWSLETTER VALIDATION FAILED - missing email");
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log("NEWSLETTER VALIDATION FAILED - invalid email:", email);
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // Store subscription for manual processing
    const subscriptionData = {
      email: email,
      timestamp: new Date().toISOString(),
      source: 'website-newsletter'
    };

    subscriptions.push(subscriptionData);
    console.log("NEWSLETTER STORED:", JSON.stringify(subscriptionData, null, 2));

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
        name: "Newsletter Subscriber",
        company: "",
        email: email,
        role: "",
        areaOfInterest: "Newsletter Subscription",
        message: `New newsletter subscription from: ${email}\n\nThis user subscribed to receive updates and insights from Mauna Kea Consulting.`,
      });
      emailSent = true;
      console.log("NEWSLETTER EMAIL SENT SUCCESSFULLY");
    } catch (emailErr) {
      emailError = emailErr;
      console.error("NEWSLETTER EMAIL SENDING FAILED:", emailErr);
      
      // Log detailed error info
      if (emailErr instanceof Error) {
        console.error("Newsletter email error details:", {
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
        ? "Successfully subscribed to newsletter!"
        : "Thank you for subscribing! We've received your email and will add you to our newsletter list.",
      emailSent,
      subscriptionId: subscriptions.length - 1
    };

    console.log("NEWSLETTER RESPONSE:", JSON.stringify(response, null, 2));

    return NextResponse.json(response);
    
  } catch (error) {
    console.error("NEWSLETTER SUBSCRIPTION ERROR:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: "An unexpected error occurred while processing your subscription. Please try again later.",
        details: process.env.NODE_ENV === "development" && error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Admin endpoint to view subscriptions (for manual processing)
export async function GET() {
  return NextResponse.json({ 
    subscriptions: subscriptions.slice(-50), // Last 50 subscriptions
    total: subscriptions.length 
  });
}
