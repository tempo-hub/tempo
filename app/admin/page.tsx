"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  ArrowUp,
  CalendarDays,
  PenSquare,
  FolderKanban,
} from "lucide-react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminDashboard() {
  const [blogsCount, setBlogsCount] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const snap = await getDocs(collection(db, "blogs"));
      setBlogsCount(snap.size);
    };

    fetchDashboardData();
  }, []);

  const statsCards = [
    {
      title: "Total Blogs",
      value: blogsCount,
      icon: FileText,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      border: "from-blue-500 to-cyan-500",
      change: "+100%",
    },
    {
      title: "Published",
      value: blogsCount,
      icon: PenSquare,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      border: "from-green-500 to-emerald-500",
      change: "+100%",
    },
    {
      title: "Categories",
      value: 6,
      icon: FolderKanban,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      border: "from-purple-500 to-pink-500",
      change: "+0%",
    },
    {
      title: "This Month",
      value: blogsCount,
      icon: CalendarDays,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      border: "from-orange-500 to-red-500",
      change: "+100%",
    },
  ];

  return (
    <div className="space-y-8">
      {/* =====================================================
          Header
      ===================================================== */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Dashboard Overview
          </h2>

          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Welcome back! Manage your blog content easily.
          </p>
        </div>

        <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border">
          <p className="text-xs text-slate-500">Status</p>

          <p className="font-semibold text-green-600">System Active</p>
        </div>
      </div>

      {/* =====================================================
          Stats Cards
      ===================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Top Border */}
              <div className={`h-1 w-full bg-gradient-to-r ${stat.border}`} />

              <div className="p-6">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bgColor}`}
                  >
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>

                  <span className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    <ArrowUp className="w-3 h-3" />
                    {stat.change}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3 className="text-3xl font-bold text-slate-800">
                    {stat.value}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">{stat.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
