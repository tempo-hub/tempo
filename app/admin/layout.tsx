"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Menu,
  X,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  /* Protect Admin Routes */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin-login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  /* Logout */
  const logout = async () => {
    await signOut(auth);
    router.push("/admin-login");
  };

  /* Sidebar Links */
  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Blogs",
      href: "/admin/blogs",
      icon: FileText,
    },
    {
      name: "Create Blog",
      href: "/admin/blogs/create",
      icon: PlusCircle,
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 bg-slate-950 text-white
          transform transition-all duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static
          ${collapsed ? "lg:w-20" : "lg:w-72"} w-72
        `}
      >
        {/* Logo */}
        <div className="h-20 border-b border-slate-800 px-5 flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <h2 className="font-bold text-lg">
                  Admin Panel
                </h2>
                <p className="text-xs text-slate-400">
                  Secure Dashboard
                </p>
              </div>
            </div>
          )}

          {/* Desktop Collapse */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex p-2 rounded hover:bg-slate-800"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Close */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                  ${
                    active
                      ? "bg-primary text-white shadow-md"
                      : "text-slate-300 hover:bg-slate-800"
                  }
                `}
              >
                <Icon className="w-5 h-5 shrink-0" />

                {!collapsed && (
                  <span className="font-medium">
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* =====================================================
          MAIN SECTION
      ===================================================== */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white border-b shadow-sm">
          <div className="h-20 px-4 lg:px-8 flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded hover:bg-slate-100"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div>
                <h1 className="text-lg lg:text-xl font-bold text-slate-800">
                  Admin Dashboard
                </h1>

                <p className="text-xs sm:text-sm text-slate-500">
                  Manage blogs & website content
                </p>
              </div>
            </div>

            {/* Right */}
            <button
              onClick={logout}
              className="hidden sm:flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}