"use client";

import Navbar from "@/components/organisms/Navbar";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import { motion } from "framer-motion";
import { Download, PlayCircle, FileText, ChevronLeft, BookOpen } from "lucide-react";
import Link from "next/link";

export default function CourseTemplate({ course }) {
  if (!course) return null;

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <Navbar />

      <div className="max-w-5xl mx-auto">
        {/* Breadcrumbs */}
        <Link href="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary-500 mb-8 w-fit transition-colors">
          <ChevronLeft size={16} /> Back to Dashboard
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className={`inline-block px-3 py-1 rounded-lg bg-${course.color}-50 dark:bg-${course.color}-900/20 text-${course.color}-600 dark:text-${course.color}-400 text-sm font-bold mb-4`}>
              {course.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter italic">
              {course.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {course.description}
            </p>
          </motion.div>
        </div>

        {/* Content Tabs / Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Video Section */}
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <PlayCircle className="text-primary-500" /> Video Lesson
              </h3>
              <div className="aspect-video glass rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <PlayCircle size={64} className="text-white drop-shadow-2xl cursor-pointer scale-100 group-hover:scale-110 transition-transform" />
                </div>
                <img 
                  src={course.videoPlaceholder} 
                  alt="Video Lesson" 
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* Theory Section */}
            <section className="glass p-8 md:p-12 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <BookOpen className="text-primary-500" /> Theoretical Knowledge
              </h3>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {course.content.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed mb-6 last:mb-0 text-slate-700 dark:text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Resources */}
          <div className="space-y-8">
            <Card className="sticky top-32 border-primary-500/20">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Download className="text-primary-500" /> Resources
              </h3>
              <div className="space-y-4">
                {course.resources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-4 glass rounded-2xl hover:bg-primary-500/5 group transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary-500/10 text-primary-500">
                        <FileText size={18} />
                      </div>
                      <span className="text-sm font-medium">{resource.name}</span>
                    </div>
                    <Download size={16} className="text-slate-400 group-hover:text-primary-500" />
                  </div>
                ))}
              </div>
              <Button className="w-full mt-8" variant="primary">
                Enroll in Course
              </Button>
            </Card>

            <Card className="bg-gradient-to-br from-primary-600 to-blue-600 text-white border-none">
              <h4 className="font-bold mb-2">Need Help?</h4>
              <p className="text-sm text-white/80 mb-6">
                Our instructors are available 24/7 to help you master {course.category}.
              </p>
              <Button variant="secondary" className="w-full bg-white text-primary-600 hover:bg-white/90">
                Contact Teacher
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
