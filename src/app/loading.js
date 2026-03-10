"use client";

import Navbar from "@/components/organisms/Navbar";

export default function Loading() {
  return (
    <main className="min-h-screen pt-40 px-6 bg-[var(--bg-main)]">
      <Navbar />
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Skeleton */}
        <div className="text-center space-y-12">
           <div className="h-10 w-48 glass-pill mx-auto animate-pulse" />
           <div className="h-32 w-full max-w-3xl mx-auto glass rounded-3xl animate-pulse" />
           <div className="h-20 w-full max-w-xl mx-auto glass rounded-2xl animate-pulse opacity-50" />
        </div>

        {/* Bento Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-[600px]">
           <div className="md:col-span-2 md:row-span-2 glass rounded-[2.5rem] animate-pulse" />
           <div className="md:col-span-2 md:row-span-1 glass rounded-[2.5rem] animate-pulse bg-white/5 shadow-none" />
           <div className="md:col-span-1 md:row-span-1 glass rounded-[2.5rem] animate-pulse" />
           <div className="md:col-span-1 md:row-span-1 glass rounded-[2.5rem] animate-pulse" />
        </div>
      </div>
    </main>
  );
}
