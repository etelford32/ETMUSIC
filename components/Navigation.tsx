'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Latest Tracks', href: '#latest-tracks' },
    { name: 'ETU 2175', href: '#etu-2175' },
    { name: 'Eros Series', href: '#eros' },
    { name: 'Contact', href: '#contact' },
  ]

  const externalProjects = [
    { name: 'Explore the Universe 2175', href: 'https://exploretheuniverse2175.com', icon: '🎮' },
    { name: 'Blog', href: 'https://elliottelford.com', icon: '📝' },
    { name: 'Telford Projects', href: 'https://elliottelford-dotcom.vercel.app/', icon: '🚀' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold font-display gradient-text cursor-pointer"
        >
          the E.T.
        </motion.a>

        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-sm font-medium hover:text-neon-blue transition-colors"
            >
              {link.name}
            </motion.a>
          ))}

          {/* Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="text-sm font-medium hover:text-neon-blue transition-colors flex items-center gap-1"
            >
              Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>

            <AnimatePresence>
              {projectsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-64 glass-morphism rounded-2xl overflow-hidden border border-neon-blue/20"
                >
                  {externalProjects.map((project, index) => (
                    <motion.a
                      key={project.name}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ backgroundColor: 'rgba(0, 240, 255, 0.1)' }}
                      className="block px-4 py-3 text-sm hover:text-neon-blue transition-colors border-b border-gray-700/30 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{project.icon}</span>
                        <div>
                          <div className="font-medium">{project.name}</div>
                        </div>
                        <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.a
          href="#latest-tracks"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="neon-border px-6 py-2 rounded-full font-medium text-sm hover:bg-neon-blue/10 transition-all"
        >
          Latest Tracks
        </motion.a>
      </div>
    </motion.nav>
  )
}
