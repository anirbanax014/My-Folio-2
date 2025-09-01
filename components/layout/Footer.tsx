'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail, MapPin, Clock } from 'lucide-react'

export function Footer() {
  const [currentTime, setCurrentTime] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    // Show scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Web Development',
    'Mobile Apps',
    'AI/ML Solutions',
    'Cloud Architecture',
    'DevOps & Automation',
    'Technical Consulting'
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@yourname.com', label: 'Email' },
  ]

  return (
    <footer className="relative mt-20 glass border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="ml-2 text-xl font-bold text-shimmer">Your Name</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full-stack developer and AI enthusiast passionate about creating innovative 
              solutions that make a difference. Let's build something amazing together.
            </p>
            
            {/* Live Clock */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Clock size={16} />
              <span>San Francisco, CA</span>
              <span className="text-neon-blue font-mono">{currentTime}</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-neon-blue transition-all duration-300 group"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail size={16} className="text-neon-blue" />
                <a href="mailto:hello@yourname.com" className="hover:text-neon-blue transition-colors">
                  hello@yourname.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin size={16} className="text-neon-purple" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 glass rounded-lg border border-white/20 focus:border-neon-blue focus:outline-none transition-colors duration-300 text-white placeholder-gray-400 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 Your Name. Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>and lots of coffee ☕</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Built with Next.js, TypeScript & Tailwind CSS</span>
            </div>

            {/* Additional Links */}
            <div className="flex gap-4 text-gray-400 text-sm">
              <a href="/privacy" className="hover:text-neon-blue transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-neon-blue transition-colors">Terms</a>
              <a href="/sitemap" className="hover:text-neon-blue transition-colors">Sitemap</a>
            </div>
          </div>
        </div>

        {/* Fun Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-gray-500">
            🚀 This portfolio was crafted with passion and attention to detail. 
            <br />
            Thanks for scrolling all the way down! You're awesome! ✨
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}