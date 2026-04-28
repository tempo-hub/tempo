"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { toast } from "react-hot-toast";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

interface Blog {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  keywords: string[];
  hashtags: string[];
  content: string;
  image?: string;
  createdAt?: string;
}

export default function AdminBlogs() {
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

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  /* Generate Slug */
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  /* Reset Form */
  const resetForm = () => {
    setTitle("");
    setSlug("");
    setCategory("");
    setDescription("");
    setKeywords("");
    setHashtags("");
    setContent("");
    setEditingId(null);
    setImage(null);
    setPreview("");
  };

  /* Handle Image */
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Only image files allowed");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image must be under 2MB");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* Upload Image */
  const uploadImageToCloudinary = async () => {
    if (!image) return "";

    const formData = new FormData();
    formData.append("file", image);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error("Image upload failed");
    }

    return data.secure_url;
  };

  /* Fetch Blogs */
  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/blogs");
      const data = await res.json();

      setBlogs(data.blogs || []);
    } catch {
      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* Create / Update Blog */
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

      let imageURL = preview;

      if (image) {
        imageURL = await uploadImageToCloudinary();
      }

      const payload = {
        title: title.trim(),
        slug: slug.trim(),
        category,
        description: description.trim(),
        content,
        image: imageURL,

        keywords: keywords
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        hashtags: hashtags
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      let res;

      if (editingId) {
        res = await fetch(`/api/blogs/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        toast.success("Blog Updated Successfully");
      } else {
        res = await fetch("/api/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        toast.success("Blog Published Successfully");
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed");
      }

      resetForm();
      fetchBlogs();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  /* Delete Blog */
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Delete this blog?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Blog Deleted");
      fetchBlogs();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Delete failed";
      toast.error(message);
    }
  };

  /* Edit Blog */
  const handleEdit = (blog: Blog) => {
    setTitle(blog.title);
    setSlug(blog.slug);
    setCategory(blog.category);
    setDescription(blog.description);
    setKeywords(blog.keywords.join(", "));
    setHashtags(blog.hashtags.join(", "));
    setContent(blog.content);

    setEditingId(blog._id);
    setPreview(blog.image || "");
    setImage(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          Admin Blog Dashboard
        </h1>

        {/* Form */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-5">
            {editingId ? "Edit Blog" : "Create New Blog"}
          </h2>

          {/* Title */}
          <input
            type="text"
            placeholder="Blog title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setSlug(generateSlug(e.target.value));
            }}
            className="w-full p-3 border rounded-xl mb-4"
          />

          {/* Slug */}
          <input
            type="text"
            placeholder="slug"
            value={slug}
            onChange={(e) => setSlug(generateSlug(e.target.value))}
            className="w-full p-3 border rounded-xl mb-4"
          />

          {/* Image */}
          <div className="mb-5">
            <label className="block font-semibold mb-2">Blog Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full p-3 border rounded-xl"
            />

            {preview && (
              <div className="relative w-full h-56 mt-4 rounded-xl overflow-hidden">
                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded-xl mb-4 outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select Category</option>
            <option value="Travel Guide">Travel Guide</option>
            <option value="Taxi Fare">Taxi Fare</option>
            <option value="Tempo Traveller">Tempo Traveller</option>
            <option value="Tour Package">Tour Package</option>
            <option value="Outstation Taxi">Outstation Taxi</option>
          </select>

          {/* Description */}
          <textarea
            rows={4}
            placeholder="Meta description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded-xl mb-4"
          />

          {/* Keywords */}
          <input
            type="text"
            placeholder="keyword1, keyword2"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full p-3 border rounded-xl mb-4"
          />

          {/* Hashtags */}
          <input
            type="text"
            placeholder="#travel, #taxi"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            className="w-full p-3 border rounded-xl mb-4"
          />

          {/* Editor */}
          <div className="mb-6 border rounded-xl overflow-hidden">
            <JoditEditor
              value={content}
              config={{
                readonly: false,
                height: 600,
                toolbarAdaptive: false,
                askBeforePasteHTML: false,
                askBeforePasteFromWord: false,
                defaultActionOnPaste: "insert_as_html",
                beautifyHTML: false,
                cleanHTML: {
                  removeEmptyElements: false,
                  fillEmptyParagraph: false,
                },
                buttons: [
                  "source",
                  "|",
                  "paragraph",
                  "bold",
                  "italic",
                  "underline",
                  "|",
                  "ul",
                  "ol",
                  "|",
                  "table",
                  "link",
                  "image",
                  "|",
                  "undo",
                  "redo",
                ],
              }}
              onBlur={(newContent) => setContent(newContent)}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-end">
            {editingId && (
              <button
                onClick={resetForm}
                className="px-5 py-2 border rounded-xl"
              >
                Cancel
              </button>
            )}

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="px-6 py-2 bg-primary text-white rounded-xl"
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
        <h2 className="text-2xl font-semibold mb-6">All Blogs</h2>

        {loading ? (
          <p>Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p>No blogs found</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-slate-50 rounded-2xl p-5 shadow"
              >
                {blog.image && (
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <h3 className="text-lg font-bold">{blog.title}</h3>

                <p className="text-xs text-primary mt-1">{blog.category}</p>

                <p className="text-sm mt-3 line-clamp-2">{blog.description}</p>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(blog._id)}
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
