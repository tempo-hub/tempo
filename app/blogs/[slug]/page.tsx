"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  createdAt?: any;
};

export default function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const q = query(collection(db, "blogs"), where("slug", "==", slug));

        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const doc = snapshot.docs[0];

          setBlog({
            id: doc.id,
            ...doc.data(),
          } as Blog);
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Loading blog...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          Blog Not Found
        </h2>

        <p className="text-slate-500 mb-6 text-center">
          The blog you are looking for does not exist.
        </p>

        <Link
          href="/blogs"
          className="px-6 py-2 bg-primary text-white rounded-lg"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-slate-800 leading-tight">
          {blog.title}
        </h1>

        {/* Description */}
        <p className="text-slate-500 mt-3 text-lg">{blog.description}</p>

        {/* Date */}
        <p className="text-sm text-slate-400 mt-4 border-b pb-6">
          {blog.createdAt?.seconds
            ? new Date(blog.createdAt.seconds * 1000).toLocaleDateString(
                "en-IN",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                },
              )
            : "Recently Published"}
        </p>

        {/* Content */}
        <div
          className="prose prose-slate max-w-none mt-8"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </div>
    </div>
  );
}
