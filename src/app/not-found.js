"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, WifiOff } from "lucide-react";
import Navbar from "@/components/organisms/Navbar";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-40 flex items-center justify-center px-6 overflow-hidden">
      <Navbar />
      
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
         <div className="text-[25vw] font-black opacity-[0.03] select-none tracking-tighter italic uppercase italic">404</div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 p-6 glass rounded-full mb-12 animate-float">
           <WifiOff size={40} className="text-[var(--primary)]" />
        </div>
        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-6 text-gradient">Lost in Transit</h1>
        <p className="text-[var(--text-muted)] max-w-sm mx-auto mb-12 font-medium"> The module you are searching for does not exist in the current terminal state. It may have been relocated or archived.</p>
        
        <Link href="/">
           <button className="btn-premium flex items-center gap-3 mx-auto px-10 py-5">
              <ArrowLeft size={18} /> Return to Home
           </button>
        </Link>
      </motion.div>
    </main>
  );
}
