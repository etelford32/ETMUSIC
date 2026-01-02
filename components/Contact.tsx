'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const socialLinks = [
    { name: 'Spotify', icon: '🎵', href: '#' },
    { name: 'Apple Music', icon: '🎧', href: '#' },
    { name: 'SoundCloud', icon: '☁️', href: '#' },
    { name: 'Bandcamp', icon: '🎼', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' },
    { name: 'Instagram', icon: '📸', href: '#' },
  ]

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black font-display mb-6 gradient-text">
            Connect with the E.T.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stream the music, follow the journey, and stay connected
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Streaming Platforms */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-morphism p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6 neon-text">Stream Now</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.slice(0, 4).map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="neon-border p-4 rounded-xl text-center hover:bg-neon-blue/10 transition-all"
                >
                  <div className="text-3xl mb-2">{link.icon}</div>
                  <div className="text-sm font-medium">{link.name}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-morphism p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6 neon-text">Follow the Journey</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.slice(4).map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="neon-border p-4 rounded-xl text-center hover:bg-neon-purple/10 transition-all"
                >
                  <div className="text-3xl mb-2">{link.icon}</div>
                  <div className="text-sm font-medium">{link.name}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-morphism p-8 rounded-3xl mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center neon-text">Explore More Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href="https://exploretheuniverse2175.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="neon-border p-6 rounded-xl text-center hover:bg-neon-blue/10 transition-all group"
            >
              <div className="text-5xl mb-4">🎮</div>
              <div className="font-bold mb-2 group-hover:text-neon-blue transition-colors">
                Explore the Universe 2175
              </div>
              <div className="text-sm text-gray-400">The Game</div>
            </motion.a>

            <motion.a
              href="https://elliottelford.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="neon-border p-6 rounded-xl text-center hover:bg-neon-purple/10 transition-all group"
            >
              <div className="text-5xl mb-4">📝</div>
              <div className="font-bold mb-2 group-hover:text-neon-purple transition-colors">
                Elliot Telford Blog
              </div>
              <div className="text-sm text-gray-400">Insights & Updates</div>
            </motion.a>

            <motion.a
              href="https://elliottelford-dotcom.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="neon-border p-6 rounded-xl text-center hover:bg-neon-pink/10 transition-all group"
            >
              <div className="text-5xl mb-4">🚀</div>
              <div className="font-bold mb-2 group-hover:text-neon-pink transition-colors">
                Telford Projects
              </div>
              <div className="text-sm text-gray-400">Company Website</div>
            </motion.a>
          </div>
        </motion.div>

        {/* Newsletter/Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-morphism p-12 rounded-3xl text-center"
        >
          <h3 className="text-3xl font-bold mb-4 gradient-text">Stay Updated</h3>
          <p className="text-gray-400 mb-8">Get notified about new releases, shows, and exclusive content</p>

          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-dark-surface border border-neon-blue/30 focus:border-neon-blue focus:outline-none transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 rounded-full font-medium neon-border hover:bg-neon-blue/20 transition-all"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-16 text-gray-500"
        >
          <p className="mb-2">© 2026 the E.T. | Elliot Telford</p>
          <p className="text-sm">All rights reserved. Powered by futuristic vibes.</p>
        </motion.div>
      </div>
    </section>
  )
}
