"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  createdAt: string;
  content: string;
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
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer">
              {/* Image */}
              <img
                src={blog.image || "/default.jpg"}
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-5 text-white">
                <h2 className="text-lg font-bold line-clamp-2">{blog.title}</h2>

                <p className="text-xs mt-2 text-gray-300">
                  {new Date(blog.createdAt).toDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
