import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Cpu, Bot, Globe, Zap, Plane, Store, Award } from 'lucide-react'

const milestones = [
  {
    Icon: Trophy,
    title: 'Best Manager Award',
    desc: 'Recognised for extraordinary leadership, team empowerment, and consistent delivery of high-impact results across complex engagements.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    glow: 'rgba(245,158,11,0.4)',
    tag: 'Leadership',
  },
  {
    Icon: Cpu,
    title: 'Best Architect Award',
    desc: 'Honoured for pioneering scalable, future-proof architectures that became the blueprint for technical excellence across the organisation.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    glow: 'rgba(59,130,246,0.4)',
    tag: 'Architecture',
  },
  {
    Icon: Bot,
    title: 'Botathon Event 2022',
    desc: 'Led the teams participation in Botathon 2022, driving innovation with a relatively junior team - which gave team the courage to participate in hackathons',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    glow: 'rgba(34,197,94,0.4)',
    tag: 'Innovation',
  },
  {
    Icon: Globe,
    title: 'Adobe Summit',
    desc: 'Helped the team to build chatbots integrated with Adobe commerce to showcase how it can make customer journeys smoother which was presented on the global stage at Adobe Summit, engaging with industry leaders and showcasing digital excellence.',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    glow: 'rgba(239,68,68,0.4)',
    tag: 'Global Stage',
  },
  {
    Icon: Zap,
    title: 'Copilot Sessions',
    desc: 'Pioneered enterprise-wide AI Copilot adoption workshops, equipping engineers with next-generation development capabilities.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    glow: 'rgba(139,92,246,0.4)',
    tag: 'AI & Automation',
  },
  {
    Icon: Plane,
    title: 'Onsite — New Zealand',
    desc: 'Travelled internationally to New Zealand for a critical onsite engagement, bridging global teams and strengthening client partnerships.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    glow: 'rgba(6,182,212,0.4)',
    tag: 'Global Exposure',
  },
  {
    Icon: Store,
    title: 'CT - Elevate : CommerceTools Summit',
    desc: 'He did it again in the CT - Elevate CommerceTools Summit, where it was shown how chatbots can integrate with commerce tools in the backend',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    glow: 'rgba(249,115,22,0.4)',
    tag: 'Commerce Tech',
  },
  {
    Icon: Award,
    title: 'Great Manager Award — Top 300 in India',
    desc: 'Recognized among the Top 300 Managers in India and shortlisted for the Great Manager Award in April 2025.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    glow: 'rgba(244,63,94,0.4)',
    tag: 'Leadership',
  },
]

/* ── Single timeline item ──────────────────────────────── */
const Item = ({ m, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-70px' })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative mb-12 last:mb-0">

      {/* ── Mobile layout (stacked) ───────────────────── */}
      <div className="flex md:hidden gap-4 items-start">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`flex-shrink-0 w-12 h-12 rounded-full ${m.bg} border-2 ${m.border} flex items-center justify-center`}
          style={{ boxShadow: `0 0 18px ${m.glow}` }}
        >
          <m.Icon className={`w-5 h-5 ${m.color}`} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className={`glass rounded-2xl p-5 border ${m.border} card-lift flex-1`}
        >
          <span className={`inline-block text-[10px] font-bold font-orbitron tracking-widest ${m.color} ${m.bg} px-2.5 py-1 rounded-full mb-3`}>
            {m.tag}
          </span>
          <h3 className="text-white font-bold text-base mb-1.5">{m.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
        </motion.div>
      </div>

      {/* ── Desktop layout (alternating) ─────────────── */}
      <div className="hidden md:flex items-center w-full">

        {/* Left slot */}
        <div className="flex-1 flex justify-end pr-10">
          {isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: `0 0 35px ${m.glow}` }}
              className={`w-full max-w-sm glass rounded-2xl p-6 border ${m.border} card-lift cursor-default`}
            >
              <span className={`inline-block text-[10px] font-bold font-orbitron tracking-widest ${m.color} ${m.bg} px-2.5 py-1 rounded-full mb-3`}>
                {m.tag}
              </span>
              <h3 className="text-white font-bold text-lg mb-2">{m.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ) : <div />}
        </div>

        {/* Centre dot */}
        <div className="flex-shrink-0 z-10 relative">
          <motion.div
 
