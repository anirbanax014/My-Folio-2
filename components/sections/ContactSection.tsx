'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Calendar, MessageCircle } from 'lucide-react'
import toast from 'react-hot-toast'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the form data to your backend or email service
      console.log('Form submitted:', formData)
      
      toast.success('Message sent successfully! I\'ll get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@yourname.com',
      href: 'mailto:hello@yourname.com',
      color: 'text-neon-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'text-neon-green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,CA',
      color: 'text-neon-purple'
    },
    {
      icon: Calendar,
      label: 'Schedule Call',
      value: 'Book a meeting',
      href: 'https://calendly.com/yourname',
      color: 'text-neon-pink'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter', color: 'hover:text-blue-300' },
    { icon: MessageCircle, href: 'https://discord.gg/yourdiscord', label: 'Discord', color: 'hover:text-indigo-400' },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-shimmer">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Send className="text-neon-blue" size={24} />
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-neon-blue focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-neon-blue focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-neon-blue focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                    placeholder="Project Discussion"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-neon-blue focus:outline-none transition-colors duration-300 text-white"
                    >
                      <option value="">Select budget</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k+">$50K+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-neon-blue focus:outline-none transition-colors duration-300 text-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-neon-blue focus:outline-none transition-colors duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project, goals, and how I can help you achieve them..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-4 glass rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 glass rounded-lg flex items-center justify-center ${info.color}`}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{info.label}</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 glass rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 group`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="text-xl font-bold">Available for Projects</h4>
              </div>
              <p className="text-gray-300 mb-4">
                I'm currently accepting new projects and would love to hear about yours. 
                Let's schedule a call to discuss how we can work together.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Response time: Within 24 hours</p>
                <p>• Timezone: PST (UTC-8)</p>
                <p>• Preferred communication: Email, Slack, or video calls</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "24h", label: "Response Time" },
                { number: "50+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Project Success" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center glass rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-shimmer mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most projects range from 2-12 weeks. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide and am experienced in remote collaboration across different time zones."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in React, Next.js, Node.js, Python, AWS, and AI/ML technologies. I'm always learning new tools to deliver the best solutions."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, I offer maintenance and support packages to ensure your project continues to perform optimally after launch."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-lg p-6 border border-white/10"
              >
                <h4 className="font-semibold text-white mb-2">{faq.question}</h4>
                <p className="text-gray-300 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}