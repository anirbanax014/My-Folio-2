'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Billboard } from '@react-three/drei'
import * as THREE from 'three'

const skillCategories = [
  {
    name: "Frontend",
    color: "#61DAFB",
    skills: [
      { name: "React", icon: '⚛️', level: 90, projects: ["E-commerce Platform", "Dashboard App"] },
      { name: "Next.js", icon: '▲', level: 90, projects: ["Portfolio Site", "Blog Platform"] },
      { name: "TypeScript", icon: 'TS', level: 70, projects: ["Type-safe APIs", "Component Library"] },
      { name: "JavaScript", icon: 'JS', level: 90, projects: ["Interactive UIs", "Web Apps"] },
      { name: "HTML5", icon: '🌐', level: 95, projects: ["Semantic Web", "Accessibility"] },
      { name: "CSS3", icon: '🎨', level: 96, projects: ["Responsive Design", "Animations"] },
    ]
  },
  {
    name: "Backend",
    color: "#68D391",
    skills: [
      { name: "Node.js", icon: '🟢', level: 80, projects: ["REST APIs", "Real-time Apps"] },
      { name: "Python", icon: '🐍', level: 92, projects: ["ML Pipeline", "API Services"] },
      { name: "PostgreSQL", icon: '🐘', level: 70, projects: ["Data Analytics", "User Management"] },
      { name: "MongoDB", icon: '🍃', level: 75, projects: ["Content Management", "Real-time Chat"] },
      { name: "Express", icon: '🚀', level: 70, projects: ["Web APIs", "Middleware"] },
    ]
  },
  {
    name: "AI/ML",
    color: "#F687B3",
    skills: [
      { name: "TensorFlow", icon: '🧠', level: 85, projects: ["Image Recognition", "NLP Models"] },
      { name: "PyTorch", icon: '🔥', level: 76, projects: ["Deep Learning", "Computer Vision"] },
      { name: "OpenAI", icon: '🤖', level: 78, projects: ["GPT Integration", "AI Chatbots"] },
      { name: "Hugging Face", icon: '🤗', level: 60, projects: ["Model Fine-tuning", "NLP Tasks"] },
    ]
  },
  {
    name: "Cloud & DevOps",
    color: "#9F7AEA",
    skills: [
      { name: "AWS", icon: '☁️', level: 50, projects: ["Cloud Infrastructure", "Serverless Apps"] },
      { name: "Google Cloud", icon: '🌩️', level: 70, projects: ["ML Platform", "Data Pipeline"] },
      { name: "Docker", icon: '🐳', level: 60, projects: ["Containerization", "Microservices"] },
      { name: "Git", icon: '📝', level: 90, projects: ["Version Control", "Collaboration"] },
      { name: "Vercel", icon: '▲', level: 85, projects: ["Deployment", "CI/CD"] },
    ]
  }
]

function SkillGlobe() {
  const groupRef = useRef<THREE.Group>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const allSkills = skillCategories.flatMap(category => 
    category.skills.map(skill => ({ ...skill, categoryColor: category.color }))
  )

  return (
    <group ref={groupRef}>
      {allSkills.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / allSkills.length)
        const theta = Math.sqrt(allSkills.length * Math.PI) * phi
        const radius = 3

        const x = radius * Math.cos(theta) * Math.sin(phi)
        const y = radius * Math.cos(phi)
        const z = radius * Math.sin(theta) * Math.sin(phi)

        return (
          <group key={skill.name} position={[x, y, z]}>
            <mesh
              onPointerEnter={() => setHoveredSkill(skill.name)}
              onPointerLeave={() => setHoveredSkill(null)}
              scale={hoveredSkill === skill.name ? 1.3 : 1}
            >
              <sphereGeometry args={[0.25, 16, 16]} />
              <meshStandardMaterial 
                color={skill.categoryColor} 
                emissive={hoveredSkill === skill.name ? skill.categoryColor : '#000000'}
                emissiveIntensity={hoveredSkill === skill.name ? 0.4 : 0}
                transparent
                opacity={0.9}
              />
            </mesh>
            
            <Billboard>
              <Text
                position={[0, 0, 0.26]}
                fontSize={0.2}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {skill.icon}
              </Text>
            </Billboard>
            
            <Billboard>
              <Text
                position={[0, -0.5, 0]}
                fontSize={0.1}
                color={hoveredSkill === skill.name ? "#ffffff" : "#aaaaaa"}
                anchorX="center"
                anchorY="middle"
              >
                {skill.name}
              </Text>
            </Billboard>
          </group>
        )
      })}
    </group>
  )
}

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [selectedSkill, setSelectedSkill] = useState<any>(null)

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
            My <span className="text-shimmer">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive 3D visualization of my technical expertise and project experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - 3D Skill Globe */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 glass rounded-2xl border border-white/10 overflow-hidden"
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <SkillGlobe />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
            
            {/* Globe Instructions */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-sm text-gray-400">
                 Drag to rotate • Hover to highlight
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skill Categories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === index
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                      : 'glass border border-white/20 text-gray-300 hover:text-white'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              {skillCategories[selectedCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
                        <span className="text-xl" style={{ color: skillCategories[selectedCategory].color }}>{skill.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                        <p className="text-sm text-gray-400">Proficiency: {skill.level}%</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="w-16 bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-2 rounded-full"
                          style={{ 
                            background: `linear-gradient(90deg, ${skillCategories[selectedCategory].color}, #a855f7)` 
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Project Examples */}
                  {selectedSkill?.name === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-white/10 pt-3 mt-3"
                    >
                      <p className="text-sm text-gray-400 mb-2">Recent Projects:</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.projects.map((project, projectIndex) => (
                          <span
                            key={projectIndex}
                            className="px-2 py-1 text-xs bg-white/10 rounded-full text-gray-300"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Skill Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="glass rounded-lg p-6 border border-white/10 mt-8"
            >
              <h3 className="text-xl font-bold mb-4">Skill Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue">10+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}