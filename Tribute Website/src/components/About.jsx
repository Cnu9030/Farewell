import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Lightbulb, Shield, TrendingUp } from 'lucide-react'

const stats = [
  { value: '19.5', suffix: '+', label: 'Years of Experience' },
  { value: '8',    suffix: '',  label: 'Major Awards & Milestones' },
  { value: '100',  suffix: '+', label: 'Engineers Mentored' },
  { value: '50',   suffix: '+', label: 'Projects Architected' },
]

const highlights = [
  {
    Icon: Users,
    title: 'Team Leadership',
    desc: 'Built and nurtured high-performance engineering teams, fostering a culture of collaboration, accountability, and continuous growth.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    Icon: Lightbulb,
    title: 'Innovation Champion',
    desc: 'Consistently championed the adoption of cutting-edge technologies and modern practices across the organisation.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    Icon: Shield,
    title: 'Architecture Excellence',
    desc: 'Designed resilient, cloud-native systems built to scale — delivering measurable business outcomes at every layer.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    Icon: TrendingUp,
    title: 'Career Mentor',
    desc: 'Shaped the careers of engineers through hands-on guidance, honest feedback, and genuine investment in their growth.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
]

const fadeUp  = { hidden: { opacity: 0, y: 40 }, show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } }) }
const fadeIn  = { hidden: { opacity: 0 },          show: { opacity: 1, transition: { duration: 0.8 } } }

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-28 bg-[#020510]">
      {/* Subtle section divider at top */}
      <div className="section-divider mb-0" />

      {/* Ambient blob */}
      <div className="absolute right-0 top-0 w-[40vw] h-[60%] bg-blue-900/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* ── Heading ────────────────────────────────────── */}
        <motion.div
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="font-orbitron text-blue-400 text-xs tracking-[0.25em] uppercase block mb-3">
            About
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6">
            The Architect Behind the Vision
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            With <span className="text-white font-semibold">19.5 years</span> of unparalleled expertise,
            K. Ranjith has been a cornerstone of technological innovation —
            shaping systems, teams, and futures across every stage of his remarkable career.
          </p>
        </motion.div>

        {/* ── Stats ──────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="glass rounded-2xl p-6 text-center border border-white/[0.06] card-lift hover:border-blue-500/30"
            >
              <div className="font-orbitron text-3xl md:text-4xl font-bold gradient-text mb-1">
                {s.value}<span className="text-xl">{s.suffix}</span>
              </div>
              <div className="text-gray-400 text-xs leading-snug mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* ── Highlights grid ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className={`glass rounded-2xl p-6 border ${h.border} card-lift hover:border-opacity-60 flex items-start gap-4`}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${h.bg} border ${h.border} flex items-center justify-center`}>
                <h.Icon className={`w-6 h-6 ${h.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base mb-1.5">{h.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}

export default About
