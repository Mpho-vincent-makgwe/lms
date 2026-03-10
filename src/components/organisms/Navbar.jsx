"use client";

import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Menu } from "lucide-react";
import Link from "next/link";
import styles from "../../styles/Effects.module.css";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-8 left-0 right-0 z-[100] px-6">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-fit mx-auto glass-pill flex items-center gap-12 py-3 pr-4 shadow-2xl"
      >
        <Link href="/" className="flex items-center gap-3 group pl-4">
          <div className="relative w-8 h-8 group-hover:scale-110 transition-transform">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain filter invert dark:invert-0"
            />
          </div>
          <span className={`font-black text-lg tracking-tighter ${styles.glassyText} hidden sm:block uppercase`}>
            EDU-PULSE
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link href="/#categories" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--primary)] transition-colors">Pathways</Link>
          <Link href="/about" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--primary)] transition-colors">Legacy</Link>
          <Link href="/contact" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--primary)] transition-colors">Connect</Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-90"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <Link href="/#categories">
            <button className="btn-premium py-2 px-6 rounded-full text-xs uppercase tracking-widest">
              Join Labs
            </button>
          </Link>

          <button className="lg:hidden p-2.5 rounded-full hover:bg-black/5">
            <Menu size={18} />
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
