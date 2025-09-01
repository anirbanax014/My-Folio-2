'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function FloatingElements() {
  const [elements, setElements] = useState<Array<{
    id: number
    size: number
    x: number
    y: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }))
    setElements(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-10"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
            background: `linear-gradient(45deg, 
              rgba(0, 212, 255, 0.3), 
              rgba(168, 85, 247, 0.3), 
              rgba(236, 72, 153, 0.3)
            )`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}