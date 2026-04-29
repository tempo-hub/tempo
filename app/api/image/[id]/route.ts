import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import { GridFSBucket, ObjectId } from "mongodb";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db = mongoose.connection.db as any;
    const fileId = new ObjectId(id);

    const files = await db
      .collection("images.files")
      .find({ _id: fileId })
      .toArray();

    if (!files.length) {
      return new Response(
        "Image not found",
        { status: 404 }
      );
    }

    const file = files[0] as {
      metadata?: {
        contentType?: string;
      };
    };

    const bucket = new GridFSBucket(db, {
      bucketName: "images",
    });

    const stream =
      bucket.openDownloadStream(fileId);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new Response(stream as any, {
      headers: {
        "Content-Type":
          file.metadata?.contentType ||
          "application/octet-stream",
        "Cache-Control":
          "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response(
      "Invalid image",
      { status: 400 }
    );
  }
}