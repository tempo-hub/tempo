"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  hashtags: string[];
  content: string;
  createdAt: string;
  image?: string;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blogs") || "[]") as Blog[];
    setBlogs(stored);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-800">Travel Blogs</h1>
        <p className="text-slate-500 mt-2">
          Explore routes, tips & travel guides
        </p>
      </div>

      {/* Empty State */}
      {blogs.length === 0 && (
        <p className="text-center text-gray-400">No blogs available</p>
      )}

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.slug}`}>
            <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer bg-white">
              
              {/* Content */}
              <div className="p-4">
                {/* Title */}
                <h2 className="text-lg font-bold text-slate-800 line-clamp-2">
                  {blog.title}
                </h2>

                {/* Slug (URL) */}
                <p>{blog.slug}</p>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {blog.description}
                </p>

                {/* Date */}
                <p className="text-xs mt-3 text-gray-400">
                  {new Date(blog.createdAt).toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
