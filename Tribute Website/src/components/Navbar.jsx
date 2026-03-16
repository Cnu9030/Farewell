import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About',        href: '#about'        },
  { label: 'Journey',      href: '#timeline'     },
  { label: 'Impact',       href: '#impact'       },
  { label: 'Messages',     href: '#messages'     },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Legacy',       href: '#legacy'       },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#020510]/85 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="font-orbitron text-sm font-bold gradient-text tracking-widest"
          >
            K. RANJITH
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-gray-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-400 hover:text-white p-1"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/[0.06] py-4"
            >
              {links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-gray-400 hover:text-white text-sm font-medium transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
