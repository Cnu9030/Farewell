import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Star } from 'lucide-react'

const FinalTribute = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="tribute"
      className="relative py-32 overflow-hidden"
    >
      {/* ── Deep gradient background ──────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030812] via-[#060b24] to-[#020510]" />

      {/* ── Radial glow behind text ───────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vw] h-[60vw] max-w-3xl max-h-3xl rounded-full bg-blue-600/8 filter blur-[140px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[40vw] h-[40vw] max-w-xl max-h-xl rounded-full bg-purple-600/8 filter blur-[120px]" />
      </div>

      {/* ── Decorative stars / dots ───────────────────── */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width:  `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top:    `${Math.random() * 100}%`,
            left:   `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.05,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Stars row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </motion.div>

          {/* Label */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-orbitron text-blue-400 text-xs tracking-[0.3em] uppercase block mb-6"
          >
            Final Tribute
          </motion.span>

          {/* Main message */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-10"
          >
            Thank you{' '}
            <span className="shimmer-text">K. Ranjith</span>
            <br />
            <span className="text-gray-300 font-light text-xl sm:text-2xl md:text-3xl mt-4 block">
              for 19.5 incredible years of
            </span>
            <span className="block mt-2 gradient-text">
              Innovation · Mentorship · Leadership
            </span>
          </motion.h2>

          {/* Sub message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Your legacy will continue to inspire generations of engineers who will build
            the next wave of technology — carrying forward the values, standards, and
            vision you so generously shared.
          </motion.p>

          {/* Heart icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200, delay: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/10 border border-pink-500/30"
            style={{ boxShadow: '0 0 35px rgba(236,72,153,0.3)' }}
          >
            <Heart className="w-7 h-7 text-pink-400 fill-pink-400" />
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
            className="section-divider mt-12 origin-center"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default FinalTribute
