'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, Filter, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "AI-Powered E-commerce Platform",
    description: "Full-stack e-commerce solution with AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard.",
    longDescription: "A comprehensive e-commerce platform built with Next.js and Python, featuring machine learning algorithms for personalized product recommendations, real-time inventory tracking, payment processing, and an admin dashboard with advanced analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    category: "Web",
    tags: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "AWS"],
    techStack: ['▲','🐍','🧠','🐘','☁️'],
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ai-ecommerce",
    videoUrl: "https://youtube.com/watch?v=demo",
    featured: true,
    status: "Completed",
    year: "2024"
  },
  {
    id: 2,
    title: "Real-time Collaboration Tool",
    description: "Slack-inspired team collaboration platform with real-time messaging, file sharing, video calls, and project management features.",
    longDescription: "A modern team collaboration platform featuring real-time messaging with WebSocket connections, file sharing with cloud storage integration, video conferencing capabilities, and integrated project management tools.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    category: "Web",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Docker"],
    techStack: ['⚛️','🍃','🐳'],
    liveUrl: "https://demo-collab.com",
    githubUrl: "https://github.com/yourusername/collab-tool",
    featured: true,
    status: "In Progress",
    year: "2024"
  },
  {
    id: 3,
    title: "Computer Vision Analytics",
    description: "Advanced computer vision system for real-time object detection, facial recognition, and behavior analysis using deep learning.",
    longDescription: "A sophisticated computer vision application utilizing state-of-the-art deep learning models for real-time object detection, facial recognition, and behavioral pattern analysis with high accuracy and performance optimization.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
    category: "AI/ML",
    tags: ["Python", "OpenCV", "TensorFlow", "Docker", "AWS"],
    techStack: ['🐍','🧠','🐳','☁️'],
    githubUrl: "https://github.com/yourusername/cv-analytics",
    featured: false,
    status: "Completed",
    year: "2023"
  },
  {
    id: 4,
    title: "Cloud Infrastructure Automation",
    description: "Infrastructure as Code solution for automated cloud deployment, monitoring, and scaling using modern DevOps practices.",
    longDescription: "A comprehensive Infrastructure as Code solution that automates cloud resource provisioning, deployment pipelines, monitoring setup, and auto-scaling configurations across multiple cloud providers.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    category: "DevOps",
    tags: ["Terraform", "Kubernetes", "AWS", "Docker", "Monitoring"],
    techStack: ['☁️','🐳'],
    githubUrl: "https://github.com/yourusername/cloud-automation",
    featured: false,
    status: "Completed",
    year: "2023"
  },
  {
    id: 5,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for fitness tracking with AI-powered workout recommendations and social features.",
    longDescription: "A comprehensive fitness tracking mobile application with AI-powered workout recommendations, social challenges, progress analytics, and integration with wearable devices.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    category: "Mobile",
    tags: ["React Native", "Python", "TensorFlow", "MongoDB"],
    techStack: ['⚛️','🐍','🧠','🍃'],
    liveUrl: "https://app-store-link.com",
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    featured: false,
    status: "Completed",
    year: "2023"
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting system built on blockchain technology with smart contracts and real-time results.",
    longDescription: "A decentralized voting platform leveraging blockchain technology to ensure transparency, security, and immutability of votes with smart contract automation and real-time result tracking.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    category: "Blockchain",
    tags: ["Solidity", "React", "Web3", "Ethereum", "IPFS"],
    techStack: ['⚛️'],
    githubUrl: "https://github.com/yourusername/blockchain-voting",
    featured: false,
    status: "Completed",
    year: "2022"
  }
]

const categories = ["All", "Web", "AI/ML", "Mobile", "DevOps", "Blockchain"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
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
            Featured <span className="text-shimmer">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions and cutting-edge technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                  : 'glass border border-white/20 text-gray-300 hover:text-white hover:border-white/40'
              }`}
            >
              <Filter size={16} />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs rounded-full font-medium bg-neon-blue/20 text-neon-blue border border-neon-blue/30">
                      Featured
                    </span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-neon-blue rounded-full text-white hover:bg-neon-blue/80 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                  
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  
                  {project.videoUrl && (
                    <motion.a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-red-600 rounded-full text-white hover:bg-red-500 transition-colors"
                    >
                      <Play size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-neon-blue font-medium">{project.category}</span>
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex items-center gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((icon, techIndex) => (
                    <div key={techIndex} className="w-6 h-6 flex items-center justify-center text-lg">
                      {icon}
                    </div>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs text-gray-400">+{project.techStack.length - 4}</span>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-white/10 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openProjectModal(project)}
                  className="w-full py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-lg text-neon-blue hover:bg-gradient-to-r hover:from-neon-blue/30 hover:to-neon-purple/30 transition-all duration-300"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full max-h-[90vh] overflow-y-auto glass rounded-2xl border border-white/20"
              >
                {/* Modal Header */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm">
                        {selectedProject.category}
                      </span>
                      <span className="text-gray-300">{selectedProject.year}</span>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-white/10 rounded-lg text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.liveUrl && (
                      <motion.a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </motion.a>
                    )}
                    
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 glass border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                      >
                        <Github size={20} />
                        View Code
                      </motion.a>
                    )}
                    
                    {selectedProject.videoUrl && (
                      <motion.a
                        href={selectedProject.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-500 transition-all duration-300"
                      >
                        <Play size={20} />
                        Watch Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}