import { NextResponse } from "next/server";
import { sendNewsletterNotification } from "@/lib/resend-mailer";

interface NewsletterPayload {
  email: string;
}

// Store newsletter subscriptions in memory for production fallback (limited in serverless)
const subscriptions: any[] = [];

// Log subscription to Vercel logs (persistent)
function logSubscription(data: any) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    type: 'NEWSLETTER_SUBSCRIPTION',
    data: data
  };
  
  console.log('=== NEWSLETTER SUBSCRIPTION ===');
  console.log(JSON.stringify(logEntry, null, 2));
  console.log('=== END SUBSCRIPTION ===');
  
  // Also log as single line for easy searching
  console.log(`NEWSLETTER_SUBSCRIPTION: ${data.email}`);
}

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

    // Store in memory (limited in serverless) AND log to Vercel logs
    subscriptions.push(subscriptionData);
    logSubscription(subscriptionData);

    // Try to send email with Resend (serverless-compatible)
    let emailSent = false;
    let emailError = null;

    try {
      // Check if Resend is available
      const { sendNewsletterNotification } = await import("@/lib/resend-mailer");
      
      // Check environment variables
      if (!process.env.RESEND_API_KEY) {
        throw new Error("Resend API key not configured");
      }

      await sendNewsletterNotification({
        email: email,
      });
      emailSent = true;
      console.log("NEWSLETTER EMAIL SENT SUCCESSFULLY VIA RESEND");
    } catch (emailErr) {
      emailError = emailErr;
      console.error("NEWSLETTER EMAIL SENDING FAILED:", emailErr);
      
      // Log detailed error info
      if (emailErr instanceof Error) {
        console.error("Newsletter email error details:", {
          message: emailErr.message,
          stack: emailErr.stack,
          envVars: {
            RESEND_API_KEY: !!process.env.RESEND_API_KEY
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
