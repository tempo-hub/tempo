import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const blog = await Blog.create(body);

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to create blog";
    console.error("POST BLOG ERROR:", message);

    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      blogs,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to fetch blogs";
    console.error("GET BLOG ERROR:", message);

    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 },
    );
  }
}
