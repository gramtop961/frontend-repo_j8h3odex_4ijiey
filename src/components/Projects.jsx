import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'A data-rich analytics dashboard with live updates, custom charts, and dark mode.',
    tags: ['React', 'WebSockets', 'Tailwind'],
    link: '#'
  },
  {
    title: '3D Product Showcase',
    description: 'Interactive 3D experience for a tech brand using Spline and smooth page transitions.',
    tags: ['Spline', 'Framer Motion', 'Vite'],
    link: '#'
  },
  {
    title: 'AI Content Studio',
    description: 'Content planning and generation tool powered by modern AI tooling and clean UI.',
    tags: ['FastAPI', 'MongoDB', 'React'],
    link: '#'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
          <p className="mt-3 text-slate-300/80 max-w-2xl">A snapshot of things I’ve designed and built recently. Each project emphasizes performance, usability, and craft.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-white/10 p-6 hover:border-white/20 transition"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-500/10 blur-2xl group-hover:blur-3xl transition" />
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs rounded-lg bg-white/5 px-2.5 py-1 text-slate-200 border border-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-6 text-sm text-blue-300 group-hover:text-blue-200 transition">Explore →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
