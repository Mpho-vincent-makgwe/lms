"use client";

import { Search } from "lucide-react";

export default function SearchBar({ className }) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
      </div>
      <input
        type="text"
        className="block w-full pl-11 pr-4 py-3 glass rounded-2xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
        placeholder="Search for topics, courses, or guides..."
      />
    </div>
  );
}
