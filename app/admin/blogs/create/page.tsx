"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "react-hot-toast";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function CreateBlog() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  // auto generate slug
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setDescription("");
    setKeywords("");
    setHashtags("");
    setContent("");
    setCategory("");
  };

  const handleSubmit = async () => {
    if (
      !title ||
      !slug ||
      !description ||
      !keywords ||
      !hashtags ||
      !content ||
      !category
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      console.log("1. Submit started");

      const docRef = await addDoc(collection(db, "blogs"), {
        title: title.trim(),
        slug: slug.trim(),
        category,
        description: description.trim(),
        keywords: keywords
          .split(",")
          .map((i) => i.trim())
          .filter(Boolean),
        hashtags: hashtags
          .split(",")
          .map((i) => i.trim())
          .filter(Boolean),
        content,
        createdAt: serverTimestamp(),
      });

      console.log("2. Saved:", docRef.id);

      toast.success("Blog Published Successfully 🎉");

      resetForm();

      router.push("/admin/blogs");
    } catch (error) {
      console.error("Publish error:", error);
      toast.error("Something went wrong");
    } finally {
      console.log("3. Finished");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            📝 Create New Blog
          </h1>
          <p className="text-slate-500 mt-2">
            Create SEO optimized blog for your website
          </p>
        </div>

        {/* Title */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">Blog Title</label>

          <input
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setSlug(generateSlug(e.target.value));
            }}
            className="w-full p-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        {/* Slug */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">
            Blog URL Slug
          </label>

          <input
            type="text"
            placeholder="blog-url-slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full p-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        {/* Category */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-primary rounded-lg bg-white"
          >
            <option value="">Select Category</option>
            <option value="Travel Guide">Travel Guide</option>
            <option value="Taxi Fare">Taxi Fare</option>
            <option value="Tempo Traveller">Tempo Traveller</option>
            <option value="Pilgrimage Tour">Pilgrimage Tour</option>
            <option value="Outstation Trip">Outstation Trip</option>
            <option value="Local Sightseeing">Local Sightseeing</option>
          </select>
        </div>

        {/* Meta Description */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">
            Meta Description
          </label>

          <textarea
            rows={4}
            placeholder="Write SEO description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        {/* Keywords */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">
            Keywords (comma separated)
          </label>

          <input
            type="text"
            placeholder="varanasi taxi, ayodhya cab, traveller rent"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full p-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        {/* Hashtags */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">
            Hashtags (comma separated)
          </label>

          <input
            type="text"
            placeholder="#travel, #taxi, #varanasi"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            className="w-full p-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        {/* Content */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">
            Blog Content
          </label>

          <div className="border border-primary rounded-lg overflow-hidden">
            <JoditEditor
              value={content}
              onChange={(newContent) => setContent(newContent)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={resetForm}
            className="px-5 py-2 border rounded-lg text-slate-600 hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </button>
        </div>
      </div>
    </div>
  );
}
