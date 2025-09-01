'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechCorp Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Working with this developer has been an absolute game-changer for our company. Their expertise in full-stack development and AI integration helped us launch our flagship product 3 months ahead of schedule. The attention to detail and innovative solutions they provided exceeded all our expectations.",
    linkedinUrl: "https://linkedin.com/in/sarahjohnson",
    verified: true,
    project: "AI-Powered Analytics Platform",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Exceptional technical skills combined with outstanding communication. They transformed our complex requirements into elegant, scalable solutions. The React applications they built are not only performant but also maintainable. I highly recommend their services to anyone looking for top-tier development work.",
    linkedinUrl: "https://linkedin.com/in/michaelchen",
    verified: true,
    project: "E-commerce Platform Redesign",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Startup Founder",
    company: "GreenTech Innovations",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "As a non-technical founder, I was worried about finding someone who could understand both the technical and business aspects of our project. They not only delivered a robust MVP but also provided valuable insights that shaped our product strategy. Their work was instrumental in securing our Series A funding.",
    linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
    verified: true,
    project: "Sustainability Tracking App",
    date: "January 2024"
  },
  {
    id: 4,
    name: "David Park",
    position: "Engineering Director",
    company: "CloudScale Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Their expertise in cloud architecture and DevOps practices helped us achieve 99.99% uptime and reduce our infrastructure costs by 40%. The automated deployment pipelines and monitoring solutions they implemented have become the backbone of our operations. Truly a master of their craft.",
    linkedinUrl: "https://linkedin.com/in/davidpark",
    verified: true,
    project: "Cloud Infrastructure Overhaul",
    date: "December 2023"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Head of Digital",
    company: "RetailMax",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The machine learning recommendation system they built increased our conversion rates by 35% and customer engagement by 50%. Their ability to translate complex AI concepts into practical business solutions is remarkable. The project was delivered on time and within budget.",
    linkedinUrl: "https://linkedin.com/in/lisathompson",
    verified: true,
    project: "ML Recommendation Engine",
    date: "November 2023"
  },
  {
    id: 6,
    name: "James Wilson",
    position: "VP of Technology",
    company: "FinanceFlow",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Security and performance were our top priorities for our fintech platform. They delivered a solution that not only met but exceeded our stringent requirements. The code quality, documentation, and testing coverage were exemplary. A true professional in every sense.",
    linkedinUrl: "https://linkedin.com/in/jameswilson",
    verified: true,
    project: "Secure Payment Gateway",
    date: "October 2023"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ))
  }

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
            Client <span className="text-shimmer">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What clients say about working with me and the impact of our collaborations
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 md:p-12 border border-white/10 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                <Quote size={24} className="text-white" />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex gap-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                  />
                  <div className="text-center md:text-left">
                    <h4 className="font-bold text-white text-lg flex items-center gap-2">
                      {testimonials[currentIndex].name}
                      {testimonials[currentIndex].verified && (
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <Linkedin size={12} className="text-white" />
                        </div>
                      )}
                    </h4>
                    <p className="text-neon-blue font-medium">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block w-px h-16 bg-white/20"></div>

                <div className="text-center md:text-left">
                  <p className="text-sm text-gray-400 mb-1">Project:</p>
                  <p className="font-medium text-white">{testimonials[currentIndex].project}</p>
                  <p className="text-sm text-gray-400">{testimonials[currentIndex].date}</p>
                </div>
              </div>

              {/* LinkedIn Link */}
              {testimonials[currentIndex].linkedinUrl && (
                <div className="flex justify-center mt-6">
                  <motion.a
                    href={testimonials[currentIndex].linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/20 hover:border-blue-500/50 transition-all duration-300 text-sm"
                  >
                    <Linkedin size={16} className="text-blue-500" />
                    <span>View on LinkedIn</span>
                  </motion.a>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronLeft size={20} className="text-gray-400 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronRight size={20} className="text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Grid Preview */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-300 text-sm line-clamp-3">
                "{testimonial.text}"
              </p>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400">
                  Project: <span className="text-neon-blue">{testimonial.project}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { number: "50+", label: "Happy Clients", description: "Satisfied customers" },
            { number: "5.0", label: "Average Rating", description: "Client satisfaction" },
            { number: "100%", label: "Project Success", description: "Completion rate" },
            { number: "24/7", label: "Support", description: "Always available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-shimmer mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}