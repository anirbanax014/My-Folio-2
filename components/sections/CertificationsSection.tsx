'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Award, Calendar, Filter, X } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    credentialId: "AWS-SAP-2024-001",
    completionDate: "March 2024",
    expiryDate: "March 2027",
    verificationUrl: "https://aws.amazon.com/verification/AWS-SAP-2024-001",
    badge: "https://placehold.co/200x200/FF9900/FFFFFF?text=AWS",
    category: "Cloud",
    description: "Advanced certification demonstrating expertise in designing distributed applications and systems on AWS platform.",
    skills: ["AWS Architecture", "Cloud Security", "Cost Optimization", "High Availability"],
    featured: true
  },
  {
    id: 2,
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    credentialId: "GCP-PCA-2024-002",
    completionDate: "February 2024",
    expiryDate: "February 2026",
    verificationUrl: "https://cloud.google.com/certification/verify/GCP-PCA-2024-002",
    badge: "https://placehold.co/200x200/4285F4/FFFFFF?text=GCP",
    category: "Cloud",
    description: "Professional-level certification for designing and managing robust, secure, scalable, and dynamic solutions on GCP.",
    skills: ["GCP Services", "Infrastructure Design", "Security", "Migration"],
    featured: true
  },
  {
    id: 3,
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    credentialId: "TF-DEV-2023-003",
    completionDate: "December 2023",
    expiryDate: "December 2026",
    verificationUrl: "https://tensorflow.org/certificate/verify/TF-DEV-2023-003",
    badge: "https://placehold.co/200x200/FF6F00/FFFFFF?text=TF",
    category: "AI/ML",
    description: "Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems.",
    skills: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
    featured: true
  },
  {
    id: 4,
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    credentialId: "CKA-2023-004",
    completionDate: "November 2023",
    expiryDate: "November 2026",
    verificationUrl: "https://cncf.io/certification/verify/CKA-2023-004",
    badge: "https://placehold.co/200x200/326CE5/FFFFFF?text=K8s",
    category: "DevOps",
    description: "Validates skills and knowledge to perform the responsibilities of Kubernetes administrators.",
    skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Troubleshooting"],
    featured: false
  },
  {
    id: 5,
    title: "Oracle Cloud Infrastructure Architect Associate",
    issuer: "Oracle",
    credentialId: "OCI-AA-2023-005",
    completionDate: "October 2023",
    expiryDate: "October 2025",
    verificationUrl: "https://oracle.com/certification/verify/OCI-AA-2023-005",
    badge: "https://placehold.co/200x200/F80000/FFFFFF?text=OCI",
    category: "Cloud",
    description: "Demonstrates expertise in Oracle Cloud Infrastructure architecture and implementation.",
    skills: ["OCI Services", "Network Architecture", "Security", "Cost Management"],
    featured: false
  },
  {
    id: 6,
    title: "Microsoft Azure AI Engineer Associate",
    issuer: "Microsoft",
    credentialId: "AZ-AI-2023-006",
    completionDate: "September 2023",
    expiryDate: "September 2025",
    verificationUrl: "https://microsoft.com/certification/verify/AZ-AI-2023-006",
    badge: "https://placehold.co/200x200/0078D4/FFFFFF?text=Azure",
    category: "AI/ML",
    description: "Validates skills in implementing AI solutions using Azure Cognitive Services and Machine Learning.",
    skills: ["Azure AI", "Cognitive Services", "ML Pipelines", "AI Ethics"],
    featured: false
  },
  {
    id: 7,
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    credentialId: "CEH-2023-007",
    completionDate: "August 2023",
    expiryDate: "August 2026",
    verificationUrl: "https://eccouncil.org/verify/CEH-2023-007",
    badge: "https://placehold.co/200x200/000000/FFFFFF?text=CEH",
    category: "Cybersecurity",
    description: "Demonstrates knowledge of security vulnerabilities and ethical hacking methodologies.",
    skills: ["Penetration Testing", "Vulnerability Assessment", "Security Auditing", "Risk Management"],
    featured: false
  },
  {
    id: 8,
    title: "React Developer Certification",
    issuer: "Meta",
    credentialId: "META-REACT-2023-008",
    completionDate: "July 2023",
    expiryDate: "July 2025",
    verificationUrl: "https://meta.com/certification/verify/META-REACT-2023-008",
    badge: "https://placehold.co/200x200/61DAFB/000000?text=React",
    category: "Full Stack",
    description: "Advanced certification in React development including hooks, context, and performance optimization.",
    skills: ["React", "JavaScript", "State Management", "Performance Optimization"],
    featured: false
  }
]

const categories = ["All", "Cloud", "AI/ML", "DevOps", "Cybersecurity", "Full Stack"]

export function CertificationsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCert, setSelectedCert] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredCertifications = selectedCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory)

  const featuredCertifications = certifications.filter(cert => cert.featured)

  const openCertModal = (cert: any) => {
    setSelectedCert(cert)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCert(null)
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
            <span className="text-shimmer">Certifications</span> & Credentials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise across various technologies
          </p>
        </motion.div>

        {/* Featured Certifications Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Featured Certifications</h3>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="featured-certs-swiper"
          >
            {featuredCertifications.map((cert) => (
              <SwiperSlide key={cert.id}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer h-full"
                  onClick={() => openCertModal(cert)}
                >
                  <div className="text-center">
                    <div className="relative mb-4">
                      <img
                        src={cert.badge}
                        alt={cert.title}
                        className="w-24 h-24 mx-auto rounded-lg object-cover"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                        <Award size={16} className="text-white" />
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-lg mb-2 line-clamp-2">{cert.title}</h4>
                    <p className="text-neon-blue font-medium mb-2">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mb-4">{cert.completionDate}</p>
                    
                    <div className="flex flex-wrap gap-1 justify-center">
                      {cert.skills.slice(0, 2).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
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

        {/* All Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group glass rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              onClick={() => openCertModal(cert)}
            >
              <div className="text-center">
                <div className="relative mb-3">
                  <img
                    src={cert.badge}
                    alt={cert.title}
                    className="w-16 h-16 mx-auto rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {cert.featured && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                      <Award size={12} className="text-white" />
                    </div>
                  )}
                </div>
                
                <h4 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-neon-blue transition-colors">
                  {cert.title}
                </h4>
                <p className="text-gray-400 text-xs mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.completionDate}</p>
                
                <div className="mt-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    cert.category === 'Cloud' ? 'bg-blue-500/20 text-blue-400' :
                    cert.category === 'AI/ML' ? 'bg-purple-500/20 text-purple-400' :
                    cert.category === 'DevOps' ? 'bg-green-500/20 text-green-400' :
                    cert.category === 'Cybersecurity' ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {cert.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { number: certifications.length.toString(), label: "Total Certifications", icon: Award },
            { number: "5", label: "Cloud Platforms", icon: Award },
            { number: "3", label: "AI/ML Certifications", icon: Award },
            { number: "100%", label: "Pass Rate", icon: Award },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-neon-blue mx-auto mb-3" />
              <div className="text-3xl font-bold text-shimmer mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Modal */}
        <AnimatePresence>
          {isModalOpen && selectedCert && (
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
                className="max-w-2xl w-full glass rounded-2xl border border-white/20 overflow-hidden"
              >
                {/* Modal Header */}
                <div className="relative p-6 border-b border-white/10">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedCert.badge}
                      alt={selectedCert.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{selectedCert.title}</h2>
                      <p className="text-neon-blue font-medium">{selectedCert.issuer}</p>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold mb-2">Certification Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Credential ID:</span>
                          <span>{selectedCert.credentialId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Completed:</span>
                          <span>{selectedCert.completionDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Expires:</span>
                          <span>{selectedCert.expiryDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Category:</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            selectedCert.category === 'Cloud' ? 'bg-blue-500/20 text-blue-400' :
                            selectedCert.category === 'AI/ML' ? 'bg-purple-500/20 text-purple-400' :
                            selectedCert.category === 'DevOps' ? 'bg-green-500/20 text-green-400' :
                            selectedCert.category === 'Cybersecurity' ? 'bg-red-500/20 text-red-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {selectedCert.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Skills Covered</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill: string, index: number) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedCert.description}
                    </p>
                  </div>

                  {/* Verification Button */}
                  <motion.a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    Verify Certification
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}