'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const experiences = [
  {
    id: 1,
    company: "TechCorp Solutions",
    logo: "https://placehold.co/60x60/00d4ff/FFFFFF?text=TC",
    position: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    duration: "Jan 2023 - Present",
    period: "1+ years",
    description: "Leading development of scalable web applications and AI-powered solutions for enterprise clients.",
    achievements: [
      "Architected and developed 5+ enterprise-level applications serving 100K+ users",
      "Implemented AI-driven features that increased user engagement by 40%",
      "Led a team of 6 developers and mentored junior developers",
      "Reduced application load time by 60% through optimization techniques",
      "Established CI/CD pipelines reducing deployment time by 80%"
    ],
    technologies: ["React", "Next.js", "Python", "AWS", "Docker", "Kubernetes"],
    website: "https://techcorp.com",
    current: true
  },
  {
    id: 2,
    company: "InnovateLab",
    logo: "https://placehold.co/60x60/a855f7/FFFFFF?text=IL",
    position: "Full Stack Developer",
    location: "New York, NY",
    type: "Full-time",
    duration: "Mar 2021 - Dec 2022",
    period: "1 year 10 months",
    description: "Developed cutting-edge web applications and contributed to open-source projects.",
    achievements: [
      "Built and maintained 10+ client projects with 99.9% uptime",
      "Contributed to 3 major open-source projects with 1000+ GitHub stars",
      "Implemented real-time features using WebSocket technology",
      "Optimized database queries resulting in 50% performance improvement",
      "Collaborated with design team to create pixel-perfect UI implementations"
    ],
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "Docker"],
    website: "https://innovatelab.com",
    current: false
  },
  {
    id: 3,
    company: "StartupXYZ",
    logo: "https://placehold.co/60x60/ec4899/FFFFFF?text=SX",
    position: "Frontend Developer",
    location: "Austin, TX",
    type: "Full-time",
    duration: "Jun 2020 - Feb 2021",
    period: "9 months",
    description: "Focused on creating responsive and interactive user interfaces for mobile and web platforms.",
    achievements: [
      "Developed responsive web applications for 5+ clients",
      "Improved mobile user experience resulting in 35% increase in engagement",
      "Implemented modern CSS techniques and animations",
      "Collaborated with UX designers to create intuitive user interfaces",
      "Maintained 95%+ code coverage through comprehensive testing"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Jest"],
    website: "https://startupxyz.com",
    current: false
  },
  {
    id: 4,
    company: "FreelanceWork",
    logo: "https://placehold.co/60x60/10b981/FFFFFF?text=FW",
    position: "Freelance Developer",
    location: "Remote",
    type: "Contract",
    duration: "Jan 2019 - May 2020",
    period: "1 year 5 months",
    description: "Provided web development services to various clients across different industries.",
    achievements: [
      "Successfully delivered 15+ projects for clients worldwide",
      "Maintained 5-star rating across all freelance platforms",
      "Specialized in e-commerce and business websites",
      "Built long-term relationships with repeat clients",
      "Managed projects from conception to deployment"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    website: null,
    current: false
  }
]

export function ExperienceSection() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

  const toggleExpanded = (id: number) => {
    setExpandedExperience(expandedExperience === id ? null : id)
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
            Work <span className="text-shimmer">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and the impact I've made at each step
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full border-4 border-gray-900 z-10">
                  {experience.current && (
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Experience Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={experience.logo}
                          alt={experience.company}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-white">{experience.position}</h3>
                          <div className="flex items-center gap-2 text-neon-blue font-medium">
                            <span>{experience.company}</span>
                            {experience.website && (
                              <a
                                href={experience.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-neon-purple transition-colors"
                              >
                                <ExternalLink size={14} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {experience.current && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Job Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                        <span className="text-gray-500">•</span>
                        <span>{experience.period}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                        <span className="text-gray-500">•</span>
                        <span className="px-2 py-0.5 bg-white/10 rounded text-xs">{experience.type}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{experience.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleExpanded(experience.id)}
                      className="flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors text-sm font-medium"
                    >
                      {expandedExperience === experience.id ? (
                        <>
                          <ChevronUp size={16} />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} />
                          View Achievements
                        </>
                      )}
                    </motion.button>

                    {/* Expanded Content */}
                    {expandedExperience === experience.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: achievementIndex * 0.1 }}
                              className="flex items-start gap-2 text-gray-300 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "5+", label: "Years Experience", description: "Professional development" },
            { number: "50+", label: "Projects Completed", description: "Successful deliveries" },
            { number: "100%", label: "Client Satisfaction", description: "Happy clients" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-shimmer mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}