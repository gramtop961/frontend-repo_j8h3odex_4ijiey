import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/10 bg-slate-900/60 p-8"
        >
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-slate-300/80 leading-relaxed">
            I’m a product-focused developer who loves creating interactive experiences that feel smooth and polished. I combine modern frontend frameworks with robust backend services to build apps that are fast, accessible, and delightful to use.
          </p>
          <p className="mt-4 text-slate-300/80 leading-relaxed">
            My toolkit includes React, Tailwind, Framer Motion, FastAPI, and MongoDB. I’m always exploring new ways to push interfaces forward while keeping user needs at the center.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
