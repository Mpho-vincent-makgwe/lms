"use client";

import Navbar from "@/components/organisms/Navbar";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import { motion } from "framer-motion";
import { Download, PlayCircle, FileText, ChevronLeft, BookOpen, Clock, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "@/styles/Effects.module.css";

export default function CourseTemplate({ course }) {
  if (!course) return null;

  return (
    <div className="min-h-screen pb-20 px-6 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <Link href="/" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)] mb-12 hover:text-[var(--primary)] transition-colors w-fit">
          <div className="p-2 glass rounded-full group-hover:-translate-x-1 transition-transform">
            <ChevronLeft size={14} />
          </div>
          Return to Terminal
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Pane - 8 columns */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Massive Hero Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                course.color === 'pink' ? "bg-pink-500/10 text-pink-500 border border-pink-500/20" :
                course.color === 'blue' ? "bg-blue-500/10 text-blue-500 border border-blue-500/20" :
                course.color === 'orange' ? "bg-orange-500/10 text-orange-500 border border-orange-500/20" :
                "bg-green-500/10 text-green-500 border border-green-500/20"
              )}>
                <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                {course.category} Protocol
              </div>
              <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] text-gradient">
                {course.title}
              </h1>
              <p className="text-xl text-[var(--text-muted)] max-w-2xl font-medium leading-relaxed">
                {course.description}
              </p>
            </motion.div>

            {/* Premium Video Deck */}
            <section className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative aspect-video glass-card border-none bg-black overflow-hidden group/video">
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 group-hover/video:opacity-100 transition-opacity">
                   <div className="p-8 rounded-full glass border-white/20 scale-90 group-hover/video:scale-100 transition-transform">
                      <PlayCircle size={64} className="text-white" />
                   </div>
                </div>
                <img 
                  src={course.videoPlaceholder} 
                  alt="Visual Stream" 
                  className="w-full h-full object-cover opacity-80 group-hover/video:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
                   <div className="px-4 py-2 glass rounded-full text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-3xl">4K Stream Active</div>
                </div>
              </div>
            </section>

            {/* Immersive Reader */}
            <section className="glass-card p-10 md:p-20 relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-16">
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter flex items-center gap-4">
                      <BookOpen className="text-[var(--primary)]" /> The Archive Content
                    </h3>
                    <div className={styles.pulsingDot}></div>
                  </div>
                  
                  <div className="max-w-none">
                    {course.content.map((paragraph, index) => (
                      <p key={index} className="text-xl leading-[1.8] mb-10 text-[var(--text-main)] font-medium opacity-90 first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:text-[var(--primary)]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
               </div>
               {/* Aesthetic Floating Element */}
               <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                  <FileText size={200} />
               </div>
            </section>
          </div>

          {/* Sidebar Modules - 4 columns */}
          <div className="lg:col-span-4 space-y-8">
             {/* Stats Module */}
             <Card className="bento-item border-[var(--primary)]/10 p-10">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--primary)] mb-8">Metadata</h4>
                <div className="space-y-6">
                   <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[var(--text-muted)]">DURATION</span>
                      <span className="text-xs font-black italic flex items-center gap-2"><Clock size={14} /> 4.5 HRS</span>
                   </div>
                   <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[var(--text-muted)]">STUDENTS</span>
                      <span className="text-xs font-black italic flex items-center gap-2"><Users size={14} /> 2.4K</span>
                   </div>
                   <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[var(--text-muted)]">ACCESS</span>
                      <span className="text-xs font-black italic flex items-center gap-2"><ShieldCheck size={14} /> LEVEL 1</span>
                   </div>
                </div>
                <Button 
                  className="btn-premium w-full mt-10 uppercase tracking-widest text-xs py-5 rounded-3xl"
                  onClick={() => alert(`Access Granted: ${course.title} protocol initiated.`)}
                >
                  Initiate Module
                </Button>
             </Card>

             {/* Resources Matrix */}
             <Card className="glass-card p-10 bg-black/5 dark:bg-white/5 border-none">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)] mb-8">Resources</h4>
                <div className="grid gap-4">
                   {course.resources.map((resource, i) => (
                     <div key={i} className="group flex items-center justify-between p-5 glass rounded-2xl hover:border-[var(--primary)] cursor-pointer transition-all">
                        <div className="flex items-center gap-4">
                           <div className="p-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-xl group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                              <FileText size={18} />
                           </div>
                           <span className="text-xs font-black uppercase tracking-tighter">{resource.name}</span>
                        </div>
                        <Download size={14} className="opacity-30 group-hover:opacity-100 group-hover:text-[var(--primary)] transition-all" />
                     </div>
                   ))}
                </div>
             </Card>

             {/* Support Ghost Card */}
             <div className="p-10 glass-card bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white border-none shadow-2xl">
                <h5 className="font-black italic text-xl uppercase tracking-tighter mb-4">Neural Support</h5>
                <p className="text-xs font-bold text-white/70 mb-8 leading-relaxed">Need technical or conceptual clarity? Our instructors are active within the 24/7 terminal.</p>
                <button className="w-full py-4 glass bg-white/10 hover:bg-white/20 border-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                   Contact Teacher
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
