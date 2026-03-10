import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12 md:p-16 relative overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                 <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain filter invert dark:invert-0" />
                 <span className="font-black text-2xl tracking-tighter uppercase italic text-gradient">EDU-PULSE</span>
              </div>
              <p className="text-[var(--text-muted)] max-w-sm mb-10 leading-relaxed text-lg">
                The next dimension of childhood and technical excellence. Not just an LMS, but a knowledge vessel.
              </p>
              <div className="flex items-center gap-4">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 rounded-2xl glass hover:border-[var(--primary)] text-[var(--text-main)] transition-all hover:-translate-y-1">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-black text-sm uppercase tracking-widest text-[var(--primary)]">Ecosystem</h4>
              <ul className="space-y-4">
                {['Early Childhood', 'Basic Computer', 'Poultry Farming', 'Plant Science'].map((item) => (
                  <li key={item}>
                    <Link href={`/courses/${item.toLowerCase().replace(/ /g, '-')}`} 
                          className="text-sm font-medium hover:text-[var(--primary)] transition-all flex items-center gap-2 group">
                      {item} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-black text-sm uppercase tracking-widest text-[var(--primary)]">Archives</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="#" className="hover:text-[var(--primary)] transition-all">Whitepapers</Link></li>
                <li><Link href="#" className="hover:text-[var(--primary)] transition-all">Support Core</Link></li>
                <li><Link href="#" className="hover:text-[var(--primary)] transition-all">Terminus</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest opacity-50">© 2026 TERMINAL VELOCITY CORP.</p>
            <div className="flex items-center gap-3 px-6 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest">
               <Mail size={14} className="text-[var(--primary)]" /> pulse@edu.tech
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
