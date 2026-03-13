import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Cpu, Bot, Globe, Zap, Plane, Store, Award } from 'lucide-react'

const achievements = [
  {
    Icon: Trophy,
    title: 'Best Manager Award',
    desc: 'Recognised for exemplary leadership, team development, and measurable business impact.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    glowClass: 'ach-glow-yellow',
    gradient: 'from-yellow-500/20 to-transparent',
  },
  {
    Icon: Cpu,
    title: 'Best Architect Award',
    desc: 'Celebrated for designing innovative, scalable solutions that set new technical benchmarks.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    glowClass: 'ach-glow-blue',
    gradient: 'from-blue-500/20 to-transparent',
  },
  {
    Icon: Bot,
    title: 'Botathon 2022',
    desc: 'Led the teams participation in Botathon 2022, driving innovation with a relatively junior team - which gave team the courage to participate in hackathons',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    glowClass: 'ach-glow-green',
    gradient: 'from-green-500/20 to-transparent',
  },
  {
    Icon: Globe,
    title: 'Adobe Summit',
    desc: 'Represented the company at Adobe Summit, engaging with global technology innovators.',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    glowClass: 'ach-glow-red',
    gradient: 'from-red-500/20 to-transparent',
  },
  {
    Icon: Zap,
    title: 'Copilot Sessions',
    desc: 'Pioneered AI Copilot sessions, leading the charge in next-gen developer productivity.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    glowClass: 'ach-glow-purple',
    gradient: 'from-purple-500/20 to-transparent',
  },
  {
    Icon: Plane,
    title: 'Onsite — New Zealand',
    desc: 'International onsite to New Zealand, fostering global collaboration and client excellence.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    glowClass: 'ach-glow-cyan',
    gradient: 'from-cyan-500/20 to-transparent',
  },
  {
    Icon: Store,
    title: 'CT - Elevate : CommerceTools Summit',
    desc: 'He did it again in the CT - Elevate CommerceTools Summit, where it was shown how chatbots can integrate with commerce tools in the backend',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    glowClass: 'ach-glow-orange',
    gradient: 'from-orange-500/20 to-transparent',
  },
  {
    Icon: Award,
    title: 'Great Manager Award — Top 300 in India',
    desc: 'Recognized among the Top 300 Managers in India and shortlisted for the Great Manager Award in April 2025.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    glowClass: 'ach-glow-rose',
    gradient: 'from-rose-500/20 to-transparent',
  },
]

const Achievements = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="relative py-28 bg-[#020510]">
      <div className="absolute right-0 top-1/4 w-[40vw] h-[50%] bg-purple-900/6 filter blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-orbitron text-yellow-400 text-xs tracking-[0.25em] uppercase block mb-3">
            Achievements
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Awards &{' '}
            <span className="gradient-text-gold">Recognitions</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            A career defined by award-winning excellence and globally recognised contributions.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative glass rounded-2xl overflow-hidden border ${a.border} ${a.glowClass} transition-all duration-300 cursor-default`}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${a.gradient.replace('to-transparent', `to-${a.color.replace('text-', '')}/0`)}`}
                style={{ background: `linear-gradient(90deg, ${a.bg.replace('bg-','').replace('/10','').replace('opacity','')}, transparent)` }}
              />
              {/* Simpler accent bar using inline style */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${a.color.replace('text-', 'bg-').replace('400', '500')} opacity-60`} />

              <div className="p-6 pt-7">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${a.bg} border ${a.border} flex items-center justify-center mb-5 animate-pulse-glow`}
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <a.Icon className={`w-7 h-7 ${a.color}`} />
                </div>

                <h3 className={`font-bold text-white text-base mb-2 font-orbitron`}>{a.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>

                {/* Glowing badge */}
                <div className={`mt-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${a.bg} border ${a.border}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${a.color.replace('text-','bg-')} animate-pulse`} />
                  <span className={`text-[10px] font-bold font-orbitron tracking-widest ${a.color}`}>
                    ACHIEVED
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
