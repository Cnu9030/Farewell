import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Users, Rocket, GraduationCap } from 'lucide-react'

const cards = [
  {
    Icon: Layers,
    title: 'System Design',
    desc: 'Crafted enterprise-grade architectures that balance scalability, resilience, and performance — delivering systems that last decades, not just sprints.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]',
    hoverBorder: 'hover:border-blue-500/50',
  },
  {
    Icon: Users,
    title: 'Engineering Teams',
    desc: 'Transformed individual contributors into cohesive, high-velocity engineering teams — instilling practices that outlast any single project.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]',
    hoverBorder: 'hover:border-purple-500/50',
  },
  {
    Icon: Rocket,
    title: 'Innovation Culture',
    desc: 'Created an environment where curiosity is celebrated and bold ideas are tested — pushing the boundaries of what technology can achieve.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    glow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]',
    hoverBorder: 'hover:border-cyan-500/50',
  },
  {
    Icon: GraduationCap,
    title: 'Mentorship',
    desc: 'Invested personally in the careers of engineers at every level — sharing hard-won knowledge, providing honest guidance, and opening doors.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    glow: 'hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]',
    hoverBorder: 'hover:border-yellow-500/50',
  },
]

const Impact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="impact" className="relative py-28 bg-[#020510]">
      <div className="absolute right-0 bottom-0 w-[50vw] h-[60%] bg-cyan-900/5 filter blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-orbitron text-cyan-400 text-xs tracking-[0.25em] uppercase block mb-3">
            Impact
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Architecting the{' '}
            <span className="gradient-text">Future</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Great architects do more than design systems. They shape culture, elevate teams,
            and leave an indelible mark on every engineer they touch.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className={`glass rounded-2xl p-6 border ${c.border} ${c.glow} ${c.hoverBorder} transition-all duration-300 cursor-default`}
            >
              {/* Icon circle */}
              <div className={`w-14 h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mb-5`}>
                <c.Icon className={`w-7 h-7 ${c.color}`} />
              </div>

              <h3 className={`font-bold text-white text-base mb-2 ${c.color.replace('text-', 'decoration-')}`}>
                {c.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>

              {/* Decorative bottom accent */}
              <div className={`mt-5 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${c.color}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
