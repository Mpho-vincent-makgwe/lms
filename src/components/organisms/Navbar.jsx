"use client";

import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Menu, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 group-hover:rotate-12 transition-transform">
            <img 
              src="/logo.png" 
              alt="EDU-PULSE Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            EDU-PULSE
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/courses" className="text-sm font-medium hover:text-primary-500 transition-colors">Courses</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary-500 transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary-500 transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button className="md:hidden p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
