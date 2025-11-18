import { Menu, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-40"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md" />
            <span className="text-white/90 font-semibold tracking-tight">My Portfolio</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="#contact" className="p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white transition-colors">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
