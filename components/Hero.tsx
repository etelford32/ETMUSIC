'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg" />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 240, 255, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-black font-display mb-6 gradient-text"
            animate={{
              textShadow: [
                '0 0 20px rgba(0, 240, 255, 0.5)',
                '0 0 40px rgba(176, 0, 255, 0.5)',
                '0 0 20px rgba(0, 240, 255, 0.5)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            the E.T.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
          >
            Elliot Telford
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Sound Designer • Music Producer • Audio Architect
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#eros"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="neon-border px-8 py-4 rounded-full font-medium text-lg hover:bg-neon-blue/20 transition-all"
            >
              Explore Eros Series
            </motion.a>

            <motion.a
              href="#etu-2175"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(176, 0, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-medium text-lg border border-neon-purple/50 hover:bg-neon-purple/20 transition-all"
            >
              ETU 2175 OST
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-neon-blue rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
