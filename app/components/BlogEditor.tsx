"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: 400,
    placeholder: "Write your blog content...",
  };

  const handleSave = async () => {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      alert("Blog saved!");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <input
        type="text"
        placeholder="Blog Title"
        className="w-full border p-2 mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <JoditEditor
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
      />

      <button
        onClick={handleSave}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Blog
      </button>
    </div>
  );
}