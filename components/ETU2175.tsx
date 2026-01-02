'use client'

import { motion } from 'framer-motion'

export default function ETU2175() {
  return (
    <section id="etu-2175" className="min-h-screen py-20 px-6 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              textShadow: [
                '0 0 20px rgba(176, 0, 255, 0.5)',
                '0 0 40px rgba(255, 0, 229, 0.5)',
                '0 0 20px rgba(176, 0, 255, 0.5)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h2 className="text-6xl md:text-8xl font-black font-display mb-6 gradient-text">
              Explore the Universe 2175
            </h2>
          </motion.div>
          <p className="text-2xl text-gray-300 mb-4">Original Soundtrack</p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A sonic journey through the cosmos. The original soundtrack for Explore the Universe 2175
            blends ethereal soundscapes with pulsing electronic beats, creating an immersive audio
            experience that transcends space and time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-morphism p-12 rounded-3xl"
          >
            <h3 className="text-3xl font-bold mb-6 neon-text">About the OST</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neon-purple mt-2" />
                <p>Futuristic soundscapes and cosmic atmospheres</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neon-purple mt-2" />
                <p>Dynamic orchestral arrangements with electronic fusion</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neon-purple mt-2" />
                <p>Immersive spatial audio design</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neon-purple mt-2" />
                <p>Original compositions for every mission</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 rounded-full font-medium neon-border hover:bg-neon-purple/20 transition-all"
            >
              Listen to OST
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 p-1">
              <div className="w-full h-full rounded-3xl bg-dark-surface flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-3/4 h-3/4 rounded-full border-4 border-neon-purple/30 border-t-neon-purple"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-neon-purple/20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-neon-pink/20 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
