import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* ── Deep background ─────────────────────────────── */}
      <div className="absolute inset-0 bg-[#020510]" />

      {/* ── Grid overlay ────────────────────────────────── */}
      <div className="absolute inset-0 hero-grid opacity-100 pointer-events-none" />

      {/* ── Ambient glow blobs ──────────────────────────── */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-700/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-700/10 filter blur-[100px] pointer-events-none animate-float-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-700/5 filter blur-[140px] pointer-events-none" />

      {/* ── Floating decorative orbs ────────────────────── */}
      <div className="absolute top-24 left-16 w-3 h-3 rounded-full bg-blue-400/50 animate-float-1" />
      <div className="absolute top-1/3 right-20 w-2 h-2 rounded-full bg-purple-400/50 animate-float-2" />
      <div className="absolute bottom-1/3 left-24 w-2 h-2 rounded-full bg-cyan-400/50 animate-float-3" />
      <div className="absolute bottom-20 right-32 w-3 h-3 rounded-full bg-blue-300/30 animate-float-1" />

      {/* ── Decorative rotating rings ────────────────────── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-blue-500/5 spin-slow pointer-events-none hidden lg:block"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-purple-500/4 spin-reverse pointer-events-none hidden lg:block"
      />

      {/* ── Main content ───────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border border-blue-500/25 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-300 text-xs font-semibold tracking-[0.25em] uppercase font-orbitron">
            Farewell Tribute
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="block text-white/90 mb-1">Celebrating the</span>
          <span className="block text-white/90 mb-1">Journey of</span>
          <span className="shimmer-text block mt-2">K. Ranjith</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-gray-400 text-base sm:text-lg md:text-xl font-rajdhani tracking-widest mb-6"
        >
          Senior Technology Architect &nbsp;·&nbsp; Mentor &nbsp;·&nbsp; Innovator
        </motion.p>

        {/* Experience bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="flex-shrink-0 h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-blue-500" />
          <span className="text-blue-400 font-orbitron text-xs tracking-[0.2em] whitespace-nowrap">
            19.5 YEARS OF EXCELLENCE
          </span>
          <span className="flex-shrink-0 h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-blue-500" />
        </motion.div>

        {/* Appreciation quote card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="max-w-2xl mx-auto glass rounded-2xl px-8 py-7 border border-blue-500/20 glow-blue mb-14"
        >
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed italic font-light">
            "Your leadership, architectural vision, and mentorship have shaped teams,
            systems, and careers. Thank you for an inspiring journey."
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="inline-flex flex-col items-center gap-1 text-gray-500 hover:text-blue-400 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
