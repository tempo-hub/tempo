"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!title || !slug || !description || !keywords || !hashtags || !content)
      return;

    const stored = JSON.parse(localStorage.getItem("blogs") || "[]");

    const newBlog = {
      title,
      slug,
      description,
      keywords: keywords.split(",").map((k) => k.trim()),
      hashtags: hashtags.split(" ").map((tag) => tag.trim()),
      content: content,
    };

    localStorage.setItem("blogs", JSON.stringify([newBlog, ...stored]));

    // reset
    setTitle("");
    setSlug("");
    setDescription("");
    setKeywords("");
    setHashtags("");
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

        {/* Blog Url */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            Blog URL (Slug)
          </label>
          <input
            type="text"
            placeholder="example: delhi-to-agra-taxi"
            className="w-full p-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>

        {/* Meta Description */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            Meta Description
          </label>
          <textarea
            rows={3}
            placeholder="Write short SEO description..."
            className="w-full p-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Keywords */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            Keywords (comma separated)
          </label>
          <input
            type="text"
            placeholder="taxi, delhi to agra, cab service"
            className="w-full p-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>

        {/* Hashtags */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            Hashtags
          </label>
          <input
            type="text"
            placeholder="#taxi #travel #agra"
            className="w-full p-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
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
              setSlug("");
              setDescription("");
              setKeywords("");
              setHashtags("");
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
