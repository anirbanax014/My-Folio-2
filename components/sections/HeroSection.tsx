'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Download, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { TypedText } from '@/components/ui/TypedText'
import { FloatingElements } from '@/components/ui/FloatingElements'

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#00d4ff"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
        transparent
        opacity={0.8}
      />
    </Sphere>
  )
}

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const avatarWrapperRef = useRef<HTMLDivElement>(null)
  const [orbitRadius, setOrbitRadius] = useState<number>(200)
  const iconSize = 48

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const updateRadius = () => {
      if (!avatarWrapperRef.current) return
      const width = avatarWrapperRef.current.offsetWidth
      const r = width / 2 + iconSize / 2 + 40 // Increased spacing from 12 to 40
      setOrbitRadius(r)
    }
    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/anirbanax014', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anirban-das-79841a2b6?trk=contact-info', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/Roni93862011530', label: 'Twitter' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <FloatingElements />
      
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-neon-blue border border-neon-blue/20">
                👋 Hello, I'm
              </span>
            </motion.div>

            {/* Name with Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-shimmer">Anirban Das</span>
            </motion.h1>

            {/* Typed Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-semibold mb-8 h-12"
            >
              <TypedText
                strings={[
                  'Full Stack Developer',
                  'AI/ML Engineer',
                  'Cloud Architect',
                  'Problem Solver',
                  'Innovation Driver'
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl"
            >
              Passionate about building next-gen solutions that merge full-stack development with real-world impact. Skilled as an AI 
              developer, in cloud-native architectures, and crafting seamless, interactive user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="mailto:rd0497034@gmail.com?subject=Hiring%20Inquiry%20-%20Full%20Stack%20Developer&body=Hi%20Anirban%2C%0A%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20came%20across%20your%20portfolio%20and%20I%27m%20impressed%20with%20your%20work%20and%20technical%20expertise.%0A%0AWe%20are%20currently%20looking%20for%20a%20talented%20developer%20to%20join%20our%20team%20and%20would%20love%20to%20discuss%20potential%20opportunities%20with%20you.%0A%0AProject%2FRole%20Details%3A%0A-%20Position%3A%20%5BPlease%20specify%5D%0A-%20Company%3A%20%5BYour%20Company%20Name%5D%0A-%20Project%20Type%3A%20%5BWeb%20Development%2FAI%2FCloud%2FMobile%2FOther%5D%0A-%20Duration%3A%20%5BFull-time%2FContract%2FProject-based%5D%0A-%20Budget%2FSalary%20Range%3A%20%5BPlease%20specify%5D%0A-%20Timeline%3A%20%5BWhen%20do%20you%20need%20to%20start%3F%5D%0A%0AProject%20Requirements%3A%0A-%20%5BPlease%20describe%20the%20project%20or%20role%20requirements%5D%0A-%20%5BTechnologies%20needed%5D%0A-%20%5BAny%20specific%20skills%20or%20experience%20required%5D%0A%0AI%20would%20love%20to%20schedule%20a%20call%20to%20discuss%20this%20opportunity%20in%20more%20detail.%20Please%20let%20me%20know%20your%20availability.%0A%0AThank%20you%20for%20your%20time%20and%20consideration.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D%0A%5BYour%20Contact%20Information%5D"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 212, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="magnetic px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Hire Me
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="magnetic px-8 py-4 glass border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="magnetic p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon 
                    size={20} 
                    className="text-gray-400 group-hover:text-neon-blue transition-colors duration-300" 
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Avatar & Skill Orbit */}
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            {/* Avatar Container */}
            <div ref={avatarWrapperRef} className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" />
              
              {/* Multiple Glow Layers */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.2), 0 0 60px rgba(0, 212, 255, 0.1)',
                    '0 0 30px rgba(147, 51, 234, 0.4), 0 0 60px rgba(147, 51, 234, 0.3), 0 0 90px rgba(147, 51, 234, 0.2)',
                    '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.2), 0 0 60px rgba(0, 212, 255, 0.1)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute inset-2 rounded-full"
              />
              
              {/* Avatar Image */}
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="relative z-10 w-full h-full rounded-full overflow-hidden glass border-4 border-white/20"
                style={{
                  boxShadow: '0 0 25px rgba(0, 212, 255, 0.4), 0 0 50px rgba(147, 51, 234, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 flex items-center justify-center relative overflow-hidden">
                  {/* Stable Profile Image */}
                  <img
                    src="/hero-image.jpg"
                    alt="Anirban Das"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating overlay effects */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 5, 
                      repeat: Infinity, 
                      ease: 'easeInOut'
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-neon-blue to-transparent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}