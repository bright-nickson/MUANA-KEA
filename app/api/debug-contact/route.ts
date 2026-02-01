import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    console.log("DEBUG: Contact API called");
    
    const body = await request.json();
    console.log("DEBUG: Request body:", body);
    
    return NextResponse.json({ 
      success: true,
      message: "Debug endpoint working",
      received: body
    });
  } catch (error) {
    console.error("DEBUG: Error in debug endpoint:", error);
    return NextResponse.json(
      { success: false, error: "Debug endpoint error" },
      { status: 500 }
    );
  }
}
