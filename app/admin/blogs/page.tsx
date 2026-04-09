"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import JoditEditor from "jodit-react";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  hashtags: string[];
  content: string;
  createdAt: string;
}

export default function AdminBlogs() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  // Load blogs from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blogs") || "[]") || [];
    setBlogs(stored);
  }, []);

  // Save blogs to localStorage
  const saveBlogs = (data: Blog[]) => {
    localStorage.setItem("blogs", JSON.stringify(data));
    setBlogs(data);
  };

  // Create / Update Blog
  const handleSubmit = () => {
    if (!title || !slug || !description || !keywords || !hashtags || !content)
      return;

    if (editingId) {
      const updated = blogs.map((blog) =>
        blog.id === editingId
          ? { ...blog, title, slug, description, keywords, hashtags, content }
          : blog,
      );
      saveBlogs(updated);
    } else {
      const newBlog = {
        id: Date.now().toString(),
        title,
        slug,
        description,
        keywords,
        hashtags,
        content,
        createdAt: new Date().toISOString(),
      };
      saveBlogs([newBlog, ...blogs]);
    }

    setTitle("");
    setSlug("");
    setDescription("");
    setKeywords([]);
    setHashtags([]);
    setContent("");
    setEditingId(null);
  };

  // Delete Blog
  const handleDelete = (id: string) => {
    const filtered = blogs.filter((blog) => blog.id !== id);
    saveBlogs(filtered);
  };

  // Edit Blog
  const handleEdit = (blog: Blog) => {
    setTitle(blog.title);
    setSlug(blog.slug);
    setDescription(blog.description);
    setKeywords(blog.keywords);
    setHashtags(blog.hashtags);
    setContent(blog.content);
    setEditingId(blog.id);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          📝 Admin Blog Dashboard
        </h1>

        {/* Form Card */}
        <div className="p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-700">
            {editingId ? "Edit Blog" : "Create New Blog"}
          </h2>

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
              value={keywords.join(", ")}
              onChange={(e) =>
                setKeywords(e.target.value.split(",").map((k) => k.trim()))
              }
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
              value={hashtags.join(", ")}
              onChange={(e) =>
                setHashtags(e.target.value.split(",").map((h) => h.trim()))
              }
            />
          </div>

          {/* Editor */}
          <div className="border border-primary rounded-lg overflow-hidden">
            <JoditEditor
              value={content}
              onBlur={(newContent) => setContent(newContent)}
            />
          </div>

          {/* Button */}
          <div className="flex justify-end mt-5">
            <button
              onClick={handleSubmit}
              className="bg-primary cursor-pointer text-white px-6 py-2 rounded-lg shadow hover:opacity-90 transition"
            >
              {editingId ? "Update Blog" : "Publish Blog"}
            </button>
          </div>
        </div>

        {/* Blog List */}
        {blogs.length > 0 ? (
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              📚 All Blogs
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
                >
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-800 mb-1">
                    {blog.title}
                  </h3>

                  {/* Slug (URL) */}
                  <Link
                    href={`${blog.slug}`}
                    target="_blank"
                    className="text-xs text-primary mb-2"
                  >
                    {blog.slug}
                  </Link>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                    {blog.description}
                  </p>

                  {/* Content Preview */}
                  <div
                    className="text-sm text-slate-500 line-clamp-2 mb-3"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.keywords?.map((key, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {key}
                      </span>
                    ))}
                  </div>

                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.hashtags?.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="text-sm px-4 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition cursor-pointer"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="text-sm px-4 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer"
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg font-semibold text-gray-500">
              No blogs available
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Start by creating your first blog ✍️
            </p>
            <button
              onClick={() => router.push("/admin/blogs/create")}
              className="mt-4 px-5 py-2 bg-primary text-white rounded-lg cursor-pointer"
            >
              + Create Blog
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
