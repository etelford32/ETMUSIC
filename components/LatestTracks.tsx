'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Track {
  id: number
  title: string
  album: string
  duration: string
  bpm: number
  genre: string
  releaseDate: string
  coverColor: string
  description: string
  downloadUrl?: string
}

export default function LatestTracks() {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null)

  // Sample tracks - replace with real data
  const tracks: Track[] = [
    {
      id: 1,
      title: 'Cosmic Drift',
      album: 'ETU 2175 OST',
      duration: '4:32',
      bpm: 128,
      genre: 'Ambient / Electronic',
      releaseDate: '2026',
      coverColor: 'from-neon-purple to-neon-pink',
      description: 'A journey through the cosmos with ethereal pads and driving beats',
      downloadUrl: '#',
    },
    {
      id: 2,
      title: 'Neon Dreams',
      album: 'Eros III',
      duration: '3:45',
      bpm: 120,
      genre: 'Synthwave',
      releaseDate: '2025',
      coverColor: 'from-neon-blue to-cyan-500',
      description: 'Retro-futuristic vibes meet modern production',
      downloadUrl: '#',
    },
    {
      id: 3,
      title: 'Digital Awakening',
      album: 'Sound Design Portfolio',
      duration: '5:12',
      bpm: 140,
      genre: 'Experimental',
      releaseDate: '2026',
      coverColor: 'from-neon-pink to-purple-500',
      description: 'Experimental sound design exploring AI consciousness',
      downloadUrl: '#',
    },
    {
      id: 4,
      title: 'Gravity Well',
      album: 'ETU 2175 OST',
      duration: '6:08',
      bpm: 85,
      genre: 'Cinematic',
      releaseDate: '2026',
      coverColor: 'from-purple-500 to-indigo-600',
      description: 'Epic orchestral meets electronic for intense space battles',
      downloadUrl: '#',
    },
  ]

  const handleDownload = (track: Track) => {
    // In production, this would trigger actual download
    console.log(`Downloading: ${track.title}`)
    // You can implement actual download logic here
    if (track.downloadUrl && track.downloadUrl !== '#') {
      window.open(track.downloadUrl, '_blank')
    }
  }

  return (
    <section id="latest-tracks" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black font-display mb-6 gradient-text">
            Latest Tracks
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fresh sounds from the studio. Stream, download, and experience the latest productions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onHoverStart={() => setHoveredTrack(track.id)}
              onHoverEnd={() => setHoveredTrack(null)}
              className="relative group"
            >
              <div className="glass-morphism rounded-3xl overflow-hidden">
                {/* Track Cover */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${track.coverColor} opacity-70`}>
                    <motion.div
                      animate={{
                        scale: hoveredTrack === track.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <div className="text-white/20 text-8xl font-black">
                        {track.id}
                      </div>
                    </motion.div>
                  </div>

                  {/* Play button overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredTrack === track.id ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                  >
                    <button className="w-20 h-20 rounded-full bg-neon-blue/20 neon-border flex items-center justify-center hover:bg-neon-blue/30 transition-all">
                      <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </button>
                  </motion.div>

                  {/* Genre badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-black/50 backdrop-blur-sm border border-neon-blue/30 text-neon-blue">
                      {track.genre}
                    </span>
                  </div>
                </div>

                {/* Track Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 neon-text">{track.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{track.album}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{track.description}</p>
                  </div>

                  {/* Track Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-700">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Duration</div>
                      <div className="text-sm font-medium">{track.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">BPM</div>
                      <div className="text-sm font-medium">{track.bpm}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Released</div>
                      <div className="text-sm font-medium">{track.releaseDate}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleDownload(track)}
                      className="flex-1 py-3 rounded-full font-medium neon-border hover:bg-neon-blue/20 transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 rounded-full font-medium border border-gray-600 hover:bg-white/5 transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredTrack === track.id ? 0.2 : 0 }}
                className={`absolute inset-0 bg-gradient-to-br ${track.coverColor} blur-3xl -z-10 rounded-3xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Want more? Check out the full discography</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#eros"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-medium neon-border hover:bg-neon-blue/20 transition-all"
            >
              Explore Eros Series
            </motion.a>
            <motion.a
              href="#etu-2175"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-medium border border-neon-purple/50 hover:bg-neon-purple/20 transition-all"
            >
              ETU 2175 OST
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
