"use client";

import { useEffect, useState } from "react";
import { FileText, ArrowUp, ArrowDown } from "lucide-react";

export default function AdminDashboard() {
  const [blogsCount, setBlogsCount] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blogs") || "[]");
    setBlogsCount(stored.length);
  }, []);

  const statsCards = [
    {
      title: "Total Blogs",
      value: blogsCount,
      icon: FileText,
      color: "bg-primary",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      trend: "up",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Dashboard Overview
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Welcome back! Here's what's happening with your content today.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <span
                    className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                      stat.trend === "up"
                        ? "text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-950/50"
                        : "text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-950/50"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUp className="w-3 h-3" />
                    ) : (
                      <ArrowDown className="w-3 h-3" />
                    )}
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  {stat.value}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {stat.title}
                </p>
              </div>
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
