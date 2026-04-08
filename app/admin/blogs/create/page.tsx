"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!title || !content) return;

    const stored = JSON.parse(localStorage.getItem("blogs") || "[]");

    const newBlog = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("blogs", JSON.stringify([newBlog, ...stored]));

    // reset
    setTitle("");
    setContent("");

    // redirect to blogs list
    router.push("/admin/blogs");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-800">
            📝 Create New Blog
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Write and publish a new blog for your travel portal
          </p>
        </div>

        {/* Title Input */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            Blog Title
          </label>
          <input
            type="text"
            placeholder="Enter blog title..."
            className="w-full p-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Editor */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            Blog Content
          </label>
          <div className="border border-primary rounded-lg overflow-hidden">
            <JoditEditor
              value={content}
              onChange={(newContent) => setContent(newContent)}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            className="px-5 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 transition"
            onClick={() => {
              setTitle("");
              setContent("");
            }}
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg bg-primary text-white font-medium shadow hover:opacity-90 transition cursor-pointer"
          >
            Publish Blog
          </button>
        </div>
      </div>
    </div>
  );
}
