import { BookOpen, Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary-500 p-2 rounded-xl">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">EDU-PULSE</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
              Empowering learners of all ages with high-quality, interactive, and unique educational content. From the farm to the computer, we grow together.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg glass hover:text-primary-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 rounded-lg glass hover:text-primary-500 transition-colors"><Github size={20} /></a>
              <a href="#" className="p-2 rounded-lg glass hover:text-primary-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Learning paths</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/courses/early-childhood" className="hover:text-primary-500 transition-colors">Early Childhood</Link></li>
              <li><Link href="/courses/basic-computer" className="hover:text-primary-500 transition-colors">Basic Computer</Link></li>
              <li><Link href="/courses/poultry" className="hover:text-primary-500 transition-colors">Poultry Farming</Link></li>
              <li><Link href="/courses/plant" className="hover:text-primary-500 transition-colors">Plant Science</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/faq" className="hover:text-primary-500 transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-primary-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 EDU-PULSE LMS. All rights reserved.</p>
          <div className="flex items-center gap-2">
             <Mail size={16} /> info@edu-pulse.com
          </div>
        </div>
      </div>
    </footer>
  );
}
