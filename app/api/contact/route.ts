import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Contact from "../../../models/Contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, from, to, message } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "First name, last name, email, and phone are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const newContact = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      from,
      to,
      message,
    });

    return NextResponse.json(
      { success: true, message: "Contact form submitted successfully", data: newContact },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
