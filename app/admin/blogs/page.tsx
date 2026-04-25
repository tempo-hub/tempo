"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "react-hot-toast";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  keywords: string[];
  hashtags: string[];
  content: string;
  createdAt?: any;
}

export default function AdminBlogs() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [content, setContent] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  // Generate Slug
  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  // Reset Form
  const resetForm = () => {
    setTitle("");
    setSlug("");
    setCategory("");
    setDescription("");
    setKeywords("");
    setHashtags("");
    setContent("");
    setEditingId(null);
  };

  // Fetch Blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);

      const data = snap.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      })) as Blog[];

      setBlogs(data);
    } catch (error) {
      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Create / Update Blog
  const handleSubmit = async () => {
    if (
      !title ||
      !slug ||
      !category ||
      !description ||
      !keywords ||
      !hashtags ||
      !content
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setSubmitting(true);

      const payload = {
        title: title.trim(),
        slug: slug.trim(),
        category,
        description: description.trim(),
        keywords: keywords
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        hashtags: hashtags
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        content,
      };

      if (editingId) {
        await updateDoc(doc(db, "blogs", editingId), payload);
        toast.success("Blog Updated Successfully");
      } else {
        await addDoc(collection(db, "blogs"), {
          ...payload,
          createdAt: serverTimestamp(),
        });

        toast.success("Blog Published Successfully");
      }

      resetForm();
      fetchBlogs();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  // Delete Blog
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Delete this blog?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "blogs", id));
      toast.success("Blog Deleted");
      fetchBlogs();
    } catch {
      toast.error("Delete failed");
    }
  };

  // Edit Blog
  const handleEdit = (blog: Blog) => {
    setTitle(blog.title);
    setSlug(blog.slug);
    setCategory(blog.category);
    setDescription(blog.description);
    setKeywords(blog.keywords.join(", "));
    setHashtags(blog.hashtags.join(", "));
    setContent(blog.content);
    setEditingId(blog.id);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          📝 Admin Blog Dashboard
        </h1>

        {/* Form */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-slate-700 mb-5">
            {editingId ? "Edit Blog" : "Create New Blog"}
          </h2>

          {/* Title */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">
              Blog Title
            </label>

            <input
              type="text"
              value={title}
              placeholder="Enter blog title"
              onChange={(e) => {
                setTitle(e.target.value);
                setSlug(createSlug(e.target.value));
              }}
              className="w-full p-3 border border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Slug */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">
              Blog URL Slug
            </label>

            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full p-3 border border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Category */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-primary rounded-lg"
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

          {/* Description */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">
              Meta Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Keywords */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">Keywords</label>

            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="seo, travel, taxi"
              className="w-full p-3 border border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Hashtags */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold">Hashtags</label>

            <input
              type="text"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              placeholder="#travel, #cab"
              className="w-full p-3 border border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Editor */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold">
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
          <div className="flex gap-3 justify-end">
            {editingId && (
              <button
                onClick={resetForm}
                className="px-5 py-2 border rounded-lg"
              >
                Cancel
              </button>
            )}

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90"
            >
              {submitting
                ? "Saving..."
                : editingId
                  ? "Update Blog"
                  : "Publish Blog"}
            </button>
          </div>
        </div>

        {/* Blog List */}
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          📚 All Blogs
        </h2>

        {loading ? (
          <p>Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500">No blogs found</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-slate-50 rounded-2xl p-5 shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-slate-800">
                  {blog.title}
                </h3>

                <p className="text-xs text-primary mt-1">{blog.category}</p>

                <Link
                  href={`/${blog.slug}`}
                  target="_blank"
                  className="text-sm text-primary block mt-1"
                >
                  /{blog.slug}
                </Link>

                <p className="text-sm text-slate-600 mt-3 line-clamp-2">
                  {blog.description}
                </p>

                <div
                  className="text-sm text-slate-500 mt-3 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="px-4 py-1 text-sm bg-red-100 text-red-600 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
