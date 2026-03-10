"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import Navbar from "@/components/organisms/Navbar";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen pt-40 px-6 flex items-center justify-center">
      <Navbar />
      <div className="max-w-xl text-center">
        <motion.div 
          initial={{ rotate: 10, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          className="inline-flex items-center gap-2 p-8 glass bg-orange-500/10 border-orange-500/20 rounded-[2rem] mb-12 shadow-2xl"
        >
           <AlertTriangle size={60} className="text-orange-500" />
        </motion.div>
        <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-8 text-gradient">Terminal Error</h1>
        <p className="text-[var(--text-muted)] font-medium mb-12 leading-relaxed px-8">A neural fault has occurred in the current session. The core protocol is attempting to stabilize.</p>
        
        <button 
          onClick={reset}
          className="btn-premium flex items-center gap-3 mx-auto px-12 py-5 uppercase tracking-widest text-xs font-black shadow-orange-500/20"
        >
          <RefreshCcw size={18} /> Re-Initialize Session
        </button>
      </div>
    </main>
  );
}
