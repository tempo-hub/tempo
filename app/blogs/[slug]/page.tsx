"use client";

import { useEffect, useState, use } from "react";

type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  createdAt: string;
};

export default function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blogs") || "[]");
    console.log("Stored Blogs", stored);

    const found = stored.find((b: Blog) => b.slug === slug);

    setBlog(found || null);
  }, [slug]);

  if (!blog) {
    return <p className="p-10 text-center">Blog not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      <p className="text-sm text-gray-500 mb-6">
        {new Date(blog.createdAt).toLocaleString("en-IN")}
      </p>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
