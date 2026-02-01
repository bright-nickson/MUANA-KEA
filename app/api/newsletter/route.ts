import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/mailer";

interface NewsletterPayload {
  email: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NewsletterPayload;
    const email = (body.email || "").trim();

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Try to send email notification, but don't fail if it doesn't work
    try {
      await sendContactNotification({
        name: "Newsletter Subscriber",
        company: "",
        email: email,
        role: "",
        areaOfInterest: "Newsletter Subscription",
        message: `New newsletter subscription from: ${email}\n\nThis user subscribed to receive updates and insights from Mauna Kea Consulting.`,
      });
    } catch (emailError) {
      console.error("Newsletter email sending failed, but continuing:", emailError);
      // In production, we could store this for later processing
      // For now, we'll still return success to the user
    }

    return NextResponse.json({ 
      success: true,
      message: "Successfully subscribed to newsletter!"
    });
  } catch (error) {
    console.error("Error handling newsletter subscription", error);
    
    if (error instanceof Error) {
      if (error.message.includes("SMTP")) {
        return NextResponse.json(
          { success: false, error: "Email service is temporarily unavailable. Please try again later." },
          { status: 500 }
        );
      }
      if (error.message.includes("configuration")) {
        return NextResponse.json(
          { success: false, error: "Email service is not properly configured." },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { success: false, error: "Unexpected error while processing your subscription." },
      { status: 500 }
    );
  }
}
