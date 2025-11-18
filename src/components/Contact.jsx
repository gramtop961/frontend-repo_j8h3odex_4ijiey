import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-900/60 p-8"
        >
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">Let’s build something great</h2>
              <p className="mt-2 text-slate-300/80">Open to collaborations, freelance work, and interesting problems.</p>
            </div>
            <a href="mailto:hello@example.com" className="inline-flex items-center rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition">
              Say hello
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
