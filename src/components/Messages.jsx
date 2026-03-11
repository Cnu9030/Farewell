import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

const messages = [
  {
    initials: 'AK',
    name: 'Arun Kumar',
    role: 'Senior Engineer',
    color: 'bg-blue-500',
    border: 'border-blue-500/25',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]',
    hoverBorder: 'hover:border-blue-500/50',
    text: 'Your mentorship helped us think beyond code and understand the bigger architecture. Thank you for always guiding us with clarity and patience.',
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'Lead Developer',
    color: 'bg-purple-500',
    border: 'border-purple-500/25',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]',
    hoverBorder: 'hover:border-purple-500/50',
    text: 'Working with you has been an incredible learning journey. Your leadership inspires us to build better systems every single day.',
  },
  {
    initials: 'RV',
    name: 'Rajesh Varma',
    role: 'Cloud Architect',
    color: 'bg-cyan-500',
    border: 'border-cyan-500/25',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
    hoverBorder: 'hover:border-cyan-500/50',
    text: 'You didn\'t just design architectures — you shaped engineers. Every system I build today carries the principles you taught us.',
  },
  {
    initials: 'SM',
    name: 'Sneha Menon',
    role: 'Product Manager',
    color: 'bg-pink-500',
    border: 'border-pink-500/25',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]',
    hoverBorder: 'hover:border-pink-500/50',
    text: 'Your ability to simplify the most complex problems is something we will always remember and strive to emulate.',
  },
  {
    initials: 'VK',
    name: 'Vijay Krishna',
    role: 'DevOps Lead',
    color: 'bg-yellow-500',
    border: 'border-yellow-500/25',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]',
    hoverBorder: 'hover:border-yellow-500/50',
    text: 'A true architect doesn\'t just build systems — they build people. You\'ve proven that again and again throughout your career.',
  },
  {
    initials: 'NK',
    name: 'Nithya Krishnan',
    role: 'Tech Lead',
    color: 'bg-green-500',
    border: 'border-green-500/25',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]',
    hoverBorder: 'hover:border-green-500/50',
    text: 'Your calm under pressure and strategic thinking has been our north star. We are better engineers because of you.',
  },
]

const MessageCard = ({ msg, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`glass rounded-2xl p-6 border ${msg.border} ${msg.hoverBorder} ${msg.hoverGlow} transition-all duration-300 cursor-default flex flex-col gap-5`}
    >
      {/* Quote icon */}
      <Quote className="w-7 h-7 text-white/15" />

      {/* Message */}
      <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">
        "{msg.text}"
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
        <div className={`w-10 h-10 rounded-full ${msg.color} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white text-xs font-bold font-orbitron">{msg.initials}</span>
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{msg.name}</p>
          <p className="text-gray-500 text-xs">{msg.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

const Messages = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="messages" className="relative py-28 bg-[#030812]">
      <div className="absolute left-1/4 top-0 w-[50vw] h-full bg-blue-900/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-orbitron text-pink-400 text-xs tracking-[0.25em] uppercase block mb-3">
            Colleagues Say
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Messages From the{' '}
            <span className="gradient-text">Team</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Words from those who had the privilege of working alongside a true leader.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((m, i) => (
            <MessageCard key={m.name} msg={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Messages
