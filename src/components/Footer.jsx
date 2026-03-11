import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-white/[0.06] bg-[#020510]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 text-sm font-medium"
        >
          With gratitude from your team.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
