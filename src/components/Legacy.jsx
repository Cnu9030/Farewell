import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const quotes = [
  {
    text: 'Great architecture is not just about systems — it is about empowering the people who build them.',
    accent: 'text-blue-400',
    border: 'border-blue-500/20',
  },
  {
    text: 'Your impact will continue through every engineer you mentored, every system you designed, and every decision you guided.',
    accent: 'text-purple-400',
    border: 'border-purple-500/20',
  },
  {
    text: 'Leadership is not a title. It is the quiet strength that makes everyone around you better at what they do.',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
  },
]

const Legacy = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="legacy" className="relative py-28 bg-[#030812]">
      {/* Ambient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030812] via-[#05082a] to-[#030812] pointer-events-none" />
      <div className="absolute left-1/4 top-1/4 w-[50vw] h-[50%] bg-blue-900/8 filter blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-orbitron text-blue-400 text-xs tracking-[0.25em] uppercase block mb-3">
            Legacy
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            <span className="text-white">Legacy of </span>
            <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Some impacts are measured in systems built. Others in the engineers shaped.
            K. Ranjith leaves behind both.
          </p>
        </motion.div>

        {/* Quotes */}
        <div className="flex flex-col gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.2 + i * 0.15 }}
              className={`glass rounded-2xl px-8 py-7 border ${q.border} relative overflow-hidden`}
            >
              {/* Left bar */}
              <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-r-full ${q.accent.replace('text-','bg-')} opacity-70`} />

              {/* Large decorative quotation mark */}
              <span
                className={`absolute -top-4 left-6 font-orbitron text-8xl font-black leading-none select-none pointer-events-none opacity-[0.07] ${q.accent}`}
              >
                "
              </span>

              <p className={`text-white text-lg sm:text-xl font-light leading-relaxed italic pl-4 relative z-10`}>
                {q.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative orbit element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="relative inline-flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-blue-500/15 spin-slow absolute" />
            <div className="w-16 h-16 rounded-full border border-purple-500/20 spin-reverse absolute" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-pulse-glow" />
          </div>
          <p className="mt-8 font-orbitron text-xs text-gray-500 tracking-[0.3em] uppercase">
            A Legacy That Endures
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Legacy
