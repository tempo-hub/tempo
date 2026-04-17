"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";

interface Blog {
  id: string;
  title: string;
  createdAt: string;
  content: string;
  image?: string;
}

export default function BlogDetails({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const stored = (JSON.parse(localStorage.getItem("blogs") || "[]") ||
      []) as Blog[];
    const found = stored.find((b) => b.id === unwrappedParams.id);
    setBlog(found || null);
  }, [unwrappedParams.id]);

  if (!blog) {
    return <p className="p-6">Blog not found</p>;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image */}
      <div className="h-80 w-full relative">
        <Image
          src={blog.image || "/default.jpg"}
          alt={blog.title || "Blog cover"}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-3">
            {blog.title}
          </h1>

          <p className="text-gray-500 mb-6">
            {new Date(blog.createdAt).toDateString()}
          </p>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
}
