'use client'

import { motion } from 'framer-motion'

const skills = [
  { icon: '⚛️', name: 'React', color: '#61DAFB' },
  { icon: '▲', name: 'Next.js', color: '#000000' },
  { icon: '📘', name: 'TypeScript', color: '#3178C6' },
  { icon: '🐍', name: 'Python', color: '#3776AB' },
  { icon: '🧠', name: 'TensorFlow', color: '#FF6F00' },
  { icon: '☁️', name: 'AWS', color: '#FF9900' },
  { icon: '🐳', name: 'Docker', color: '#2496ED' },
  { icon: '⚙️', name: 'Kubernetes', color: '#326CE5' },
]

export function SkillOrbit({ radius = 180, iconSize = 48, zIndex = 0 }: { radius?: number; iconSize?: number; zIndex?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex }}>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 360
                
        return (
          <motion.div
            key={skill.name}
            className="absolute top-1/2 left-1/2"
            style={{
              transformOrigin: '0 0',
            }}
            animate={{
              rotate: [angle, angle + 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <motion.div
              className="flex items-center justify-center w-12 h-12 glass rounded-full border border-white/20"
              style={{
                transform: `translate(-50%, -50%) translateX(${radius}px)`,
              }}
              whileHover={{ scale: 1.3 }}
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              }}
            >
              <span 
                style={{ color: skill.color }}
                className="text-2xl drop-shadow-lg"
              >
                {skill.icon}
              </span>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}