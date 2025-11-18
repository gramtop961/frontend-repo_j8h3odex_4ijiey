import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_30px_rgba(59,130,246,0.35)]">
            Building delightful products
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200/90">
            A curated selection of my recent work — interactive, performant, and crafted with attention to detail.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-900/60 text-white border border-white/10 font-semibold px-5 py-3 hover:bg-slate-900/80 transition">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
