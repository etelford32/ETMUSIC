'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ErosSeries() {
  const albums = [
    {
      title: 'Eros I',
      subtitle: 'The Beginning',
      year: 'Chapter One',
      description: 'The genesis of a sonic odyssey. Eros I introduces the core themes and establishes the emotional foundation of the trilogy.',
      color: 'from-neon-blue to-cyan-500',
      borderColor: 'border-neon-blue',
      tracks: 12,
    },
    {
      title: 'Eros II',
      subtitle: 'The Journey',
      year: 'Chapter Two',
      description: 'Evolution and expansion. Eros II takes the listener deeper into complex soundscapes and emotional territories.',
      color: 'from-neon-purple to-violet-500',
      borderColor: 'border-neon-purple',
      tracks: 14,
    },
    {
      title: 'Eros III',
      subtitle: 'The Ascension',
      year: 'Chapter Three',
      description: 'The culmination of the trilogy. Eros III reaches new heights, blending all elements into a transcendent experience.',
      color: 'from-neon-pink to-pink-500',
      borderColor: 'border-neon-pink',
      tracks: 15,
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="eros" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black font-display mb-6 gradient-text">
            The Eros Trilogy
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A three-part musical journey exploring the depths of emotion, sound, and human connection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {albums.map((album, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -15, scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className={`glass-morphism p-8 rounded-3xl border-2 ${album.borderColor} hover:shadow-2xl transition-all duration-300`}>
                {/* Album Art Placeholder */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className={`aspect-square bg-gradient-to-br ${album.color} opacity-50`}>
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        rotate: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center text-9xl font-black text-white/20"
                    >
                      {index + 1}
                    </motion.div>
                  </div>
                </div>

                {/* Album Info */}
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{album.year}</p>
                  <h3 className="text-3xl font-black font-display gradient-text">{album.title}</h3>
                  <p className="text-lg text-gray-400">{album.subtitle}</p>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">{album.description}</p>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">{album.tracks} Tracks</span>
                  <span className="text-sm text-gray-500">• Full Album</span>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 py-3 rounded-full font-medium border-2 ${album.borderColor} hover:bg-white/10 transition-all`}
                  >
                    Play Album
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full font-medium border border-gray-600 hover:bg-white/5 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 0.2 : 0 }}
                className={`absolute inset-0 bg-gradient-to-br ${album.color} blur-3xl -z-10 rounded-3xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Trilogy Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-morphism p-8 rounded-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black gradient-text mb-2">41</div>
              <div className="text-gray-400 text-sm">Total Tracks</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text mb-2">3</div>
              <div className="text-gray-400 text-sm">Albums</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text mb-2">∞</div>
              <div className="text-gray-400 text-sm">Emotions</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text mb-2">1</div>
              <div className="text-gray-400 text-sm">Trilogy</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
