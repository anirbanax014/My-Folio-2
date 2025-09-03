'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Brain, Rocket, Coffee, Gamepad2, BookOpen } from 'lucide-react'

const funFacts = [
  { icon: Code, text: "10,000+ lines of code written this year", color: "text-neon-blue" },
  { icon: Brain, text: "AI enthusiast since 2020", color: "text-neon-purple" },
  { icon: Rocket, text: "5+ successful product launches", color: "text-neon-pink" },
  { icon: Coffee, text: "Coffee-driven development", color: "text-amber-400" },
  { icon: Gamepad2, text: "Gaming in free time ⚽", color: "text-green-400" },
  { icon: BookOpen, text: "Always learning new technologies", color: "text-blue-400" },
]

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"], progress: 95 },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"], progress: 90 },
  { category: "AI/ML", items: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"], progress: 85 },
  { category: "Cloud", items: ["AWS", "Docker", "Kubernetes", "Terraform"], progress: 88 },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman"], progress: 92 },
]

export function AboutSection() {
  const [activeFactIndex, setActiveFactIndex] = useState(0)

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
            About <span className="text-shimmer">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Profile & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image */}
            <div className="relative mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden glass border-2 border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20" />
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  {/* Replace with actual image */}
                  <div className="text-6xl">👨‍💻</div>
                </div>
                
                {/* Floating badges */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-4 -right-4 w-16 h-16 glass rounded-full flex items-center justify-center border border-neon-blue/30"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Hello! I'm a passionate full-stack developer and AI enthusiast with over 5 years 
                of experience creating innovative digital solutions. My journey began with a simple 
                "Hello World" and has evolved into building complex, scalable applications that 
                impact thousands of users.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in modern web technologies, cloud architecture, and artificial 
                intelligence. When I'm not coding, you'll find me exploring the latest tech trends, 
                contributing to open-source projects, or enjoying a good game of football.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {[
                { number: "50+", label: "Projects" },
                { number: "5+", label: "Years Exp" },
                { number: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center glass rounded-lg p-4 border border-white/10">
                  <div className="text-2xl font-bold text-neon-blue">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Fun Facts Carousel */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Fun Facts About Me</h3>
              <div className="relative h-24 overflow-hidden">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: activeFactIndex === index ? 1 : 0,
                      y: activeFactIndex === index ? 0 : 50,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 flex items-center justify-center gap-3 ${
                      activeFactIndex === index ? 'block' : 'hidden'
                    }`}
                  >
                    <fact.icon className={`w-8 h-8 ${fact.color}`} />
                    <span className="text-lg text-center">{fact.text}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {funFacts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFactIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeFactIndex === index 
                        ? 'bg-neon-blue w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Skills Progress */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-lg p-4 border border-white/10"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-lg">{skill.category}</h4>
                    <span className="text-neon-blue font-medium">{skill.progress}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-neon-blue to-neon-purple h-2 rounded-full"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-2 py-1 text-xs bg-white/10 rounded-full text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Auto-rotate fun facts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hidden"
        onAnimationComplete={() => {
          const interval = setInterval(() => {
            setActiveFactIndex((prev) => (prev + 1) % funFacts.length)
          }, 3000)
          return () => clearInterval(interval)
        }}
      />
    </section>
  )
}