'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SoundDesign() {
  const projects = [
    {
      title: 'Cinematic Sound Design',
      description: 'Immersive audio landscapes for film and media',
      tags: ['Ambient', 'Cinematic', 'Atmospheric'],
    },
    {
      title: 'Game Audio',
      description: 'Interactive soundscapes and audio systems',
      tags: ['Interactive', 'Dynamic', 'Spatial'],
    },
    {
      title: 'Experimental Sound',
      description: 'Pushing the boundaries of sonic exploration',
      tags: ['Experimental', 'Abstract', 'Innovative'],
    },
  ]

  return (
    <section id="sound-design" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black font-display mb-4 gradient-text">
            Sound Design
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl">
            Crafting immersive audio experiences that transcend reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="glass-morphism p-8 rounded-2xl hover:shadow-2xl hover:shadow-neon-blue/20 transition-all"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 neon-text">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full border border-neon-blue/30 text-neon-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
