"use client";

import { useState, useEffect } from "react";
import JoditEditor from "jodit-react";

interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState("");
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
    if (!title || !content) return;

    if (editingId) {
      const updated = blogs.map((blog) =>
        blog.id === editingId ? { ...blog, title, content } : blog,
      );
      saveBlogs(updated);
    } else {
      const newBlog = {
        id: Date.now().toString(),
        title,
        content,
        createdAt: new Date().toISOString(),
      };
      saveBlogs([newBlog, ...blogs]);
    }

    setTitle("");
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
          <input
            className="mb-4 w-full p-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            placeholder="Enter blog title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

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
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {blog.title}
                </h3>

                <div
                  className="text-sm text-slate-600 line-clamp-3 mb-4"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

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
      </div>
    </div>
  );
}
