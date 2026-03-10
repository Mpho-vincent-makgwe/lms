"use client";

import Navbar from "@/components/organisms/Navbar";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import SearchBar from "@/components/molecules/SearchBar";
import { motion } from "framer-motion";
import { Baby, Cpu, Bird, Sprout, ArrowRight, Download, PlayCircle } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Early Childhood",
    description: "Foundational learning through play, colors, and basic sounds for the little ones.",
    icon: <Baby className="w-8 h-8 text-pink-500" />,
    color: "pink",
    path: "/courses/early-childhood",
  },
  {
    title: "Basic Computer",
    description: "Master the digital world: from mouse skills to basic software and safe browsing.",
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    color: "blue",
    path: "/courses/basic-computer",
  },
  {
    title: "Poultry Farming",
    description: "Expert guides on raising healthy poultry, coop management, and sustainable farming.",
    icon: <Bird className="w-8 h-8 text-orange-500" />,
    color: "orange",
    path: "/courses/poultry",
  },
  {
    title: "Plant Science",
    description: "Discover life in the soil: plant growth, irrigation, and seasonal harvesting.",
    icon: <Sprout className="w-8 h-8 text-green-500" />,
    color: "green",
    path: "/courses/plant",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-sm font-semibold text-primary-600 dark:text-primary-400">
            Smart Learning for a Smarter Future
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            Nurture Knowledge <br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-400 to-blue-500">
              Grow Your Skills
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Experience the most interactive and visually stunning LMS designed for early childhood
            development and essential life skills in poultry and agriculture.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="flex items-center gap-2">
              Explore Courses <ArrowRight size={20} />
            </Button>
            <Button variant="secondary" size="lg">
              Our Vision
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Explore Categories</h2>
            <p className="text-slate-500">Tailored learning paths for every stage of growth.</p>
          </div>
          <SearchBar className="w-full max-w-sm hidden lg:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={category.path}>
                <Card className="h-full group cursor-pointer border hover:border-primary-500/50 transition-colors">
                  <div className={`mb-6 p-4 rounded-2xl bg-${category.color}-50 dark:bg-${category.color}-900/20 w-fit group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center text-primary-500 font-bold text-sm gap-2">
                    Start Learning <ArrowRight size={16} />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature Highlight */}
      <div className="max-w-7xl mx-auto mt-32">
        <Card className="flex flex-col md:flex-row items-center gap-12 p-12 bg-primary-500/5 border-none shadow-none">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">
              Rich Multimedia content <br /> 
              at Your Fingertips
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <PlayCircle className="text-primary-500 shrink-0" />
                <span>Interactive theoretical video lessons</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Download className="text-primary-500 shrink-0" />
                <span>Downloadable PDF guides and workbooks</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <BookOpen className="text-primary-500 shrink-0" />
                <span>Modern reader with focus-mode features</span>
              </li>
            </ul>
            <Button>Get Started Today</Button>
          </div>
          <div className="md:w-1/2 relative">
             <div className="aspect-video glass rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent flex items-center justify-center">
                  <PlayCircle size={64} className="text-white drop-shadow-xl cursor-pointer hover:scale-110 transition-transform" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                  alt="LMS Preview" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500/20 blur-3xl rounded-full"></div>
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
          </div>
        </Card>
      </div>
    </main>
  );
}
