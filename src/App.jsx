import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* backdrop grid */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_40%)]" />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-400/70">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
