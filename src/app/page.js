"use client";

import Navbar from "@/components/organisms/Navbar";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import SearchBar from "@/components/molecules/SearchBar";
import { motion } from "framer-motion";
import { Baby, Cpu, Bird, Sprout, ArrowRight, PlayCircle, BookOpen, Sparkles, TrendingUp, Layers } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Early Childhood",
    description: "Foundational learning through play.",
    icon: <Baby className="w-8 h-8" />,
    color: "pink",
    path: "/courses/early-childhood",
    size: "large", // Bento size
  },
  {
    title: "Basic Computer",
    description: "Master the digital world.",
    icon: <Cpu className="w-8 h-8" />,
    color: "blue",
    path: "/courses/basic-computer",
    size: "medium",
  },
  {
    title: "Poultry Farming",
    description: "Raising healthy poultry guide.",
    icon: <Bird className="w-8 h-8" />,
    color: "orange",
    path: "/courses/poultry",
    size: "small",
  },
  {
    title: "Plant Science",
    description: "Discover life in the soil.",
    icon: <Sprout className="w-8 h-8" />,
    color: "green",
    path: "/courses/plant",
    size: "small",
  },
];

export default function Home() {
  return (
    <div className="relative pb-20 px-6 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] -z-10 rounded-full animate-float" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] -z-10 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-yellow-400/5 blur-[120px] -z-10 rounded-full animate-float" style={{animationDelay: '3s'}} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-400/5 blur-[120px] -z-10 rounded-full animate-float" style={{animationDelay: '4.5s'}} />
      <div className="absolute top-1/4 right-1/2 w-[250px] h-[250px] bg-green-400/5 blur-[100px] -z-10 rounded-full animate-float" style={{animationDelay: '2s'}} />

      {/* Hero Section - High Octane */}
      <div className="max-w-7xl mx-auto mb-24 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 glass-pill mb-12 text-xs font-black uppercase tracking-[0.2em] text-[var(--primary)]">
            <Sparkles size={14} className="animate-pulse" /> The Knowledge Terminal v2.0
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85] uppercase italic">
            Nurture <br /> 
            <span className="text-gradient drop-shadow-2xl">Evolution</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-lg text-[var(--text-muted)] mb-14 leading-relaxed font-medium">
            Step into the next dimension of interactive learning. High-fidelity childhood development and technical agriculture mastered through visual excellence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button size="lg" className="btn-premium flex items-center gap-3">
              Initiate Learning <ArrowRight size={20} />
            </Button>
            <Link href="/about">
              <button className="glass py-4 px-8 rounded-2xl font-bold hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all">
                The Archive
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bento Grid Layout */}
      <div id="categories" className="max-w-7xl mx-auto scroll-mt-32">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-md">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Pathways</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--primary)] to-transparent rounded-full mb-6" />
            <p className="text-[var(--text-muted)] font-medium">Distilled knowledge matrices for the ambitious mind.</p>
          </div>
          <SearchBar className="w-full max-w-sm" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Main Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-2 bento-item group bg-gradient-to-br from-blue-500/5 to-transparent border-[var(--primary)]/20"
          >
            <div className="flex flex-col h-full bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center rounded-3xl mb-8 relative group-hover:scale-[1.05] transition-transform duration-700">
               <div className="absolute inset-0 bg-black/50 rounded-3xl" />
               <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                  <div className="p-4 glass-pill w-fit mb-4">
                    <Baby className="text-[var(--primary)]" />
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">Early Childhood</h3>
                  <p className="text-white/80 max-w-sm mt-4 font-medium">Foundational sensory learning through play, color theory, and pattern recognition.</p>
               </div>
            </div>
            <Link href="/courses/early-childhood" className="flex items-center justify-between text-[var(--primary)] font-black uppercase tracking-widest text-xs group">
               Access Module <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* Medium Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-1 bento-item bg-gradient-to-r from-blue-500/5 to-transparent border-blue-500/20"
          >
            <div className="flex items-center gap-8 h-full">
               <div className="flex-1">
                  <div className="p-3 glass-pill w-fit mb-4">
                    <Cpu size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-black uppercase italic tracking-tighter mb-2">Basic Computer</h3>
                  <p className="text-[var(--text-muted)] text-sm font-medium line-clamp-2">Master the digital infrastructure of the 21st century.</p>
                  <Link href="/courses/basic-computer" className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-[10px] mt-4">
                     Enter Gateway <ArrowRight size={12} />
                  </Link>
               </div>
               <div className="w-1/3 aspect-square glass rounded-2xl flex items-center justify-center opacity-50">
                  <Layers className="text-blue-500/20 w-12 h-12" />
               </div>
            </div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 md:row-span-1 bento-item bg-orange-500/5 border-orange-500/10"
          >
            <div className="p-3 glass-pill w-fit mb-4">
              <Bird size={20} className="text-orange-400" />
            </div>
            <h3 className="text-lg font-black uppercase italic tracking-tighter">Poultry</h3>
            <Link href="/courses/poultry" className="mt-4 p-2 glass w-fit rounded-full hover:bg-[var(--primary)] text-[var(--text-main)] transition-colors">
               <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 md:row-span-1 bento-item bg-green-500/5 border-green-500/10"
          >
             <div className="p-3 glass-pill w-fit mb-4">
              <Sprout size={20} className="text-green-400" />
            </div>
            <h3 className="text-lg font-black uppercase italic tracking-tighter">Plants</h3>
            <Link href="/courses/plant" className="mt-4 p-2 glass w-fit rounded-full hover:bg-[var(--primary)] text-[var(--text-main)] transition-colors">
               <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Highlight */}
      <div className="max-w-7xl mx-auto mt-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-12 py-16 glass-card border-none bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
           {[
             { label: 'Active Learners', value: '12K+', icon: <TrendingUp size={20} /> },
             { label: 'Global Modules', value: '450', icon: <Layers size={20} /> },
             { label: 'Technical PDF', value: '1.2K', icon: <BookOpen size={20} /> },
             { label: 'Video Assets', value: '890', icon: <PlayCircle size={20} /> }
           ].map((stat, i) => (
             <div key={i} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-4 text-[var(--primary)] opacity-50 group-hover:opacity-100 transition-opacity">
                   {stat.icon}
                </div>
                <div className="text-4xl font-black uppercase italic tracking-tighter mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
