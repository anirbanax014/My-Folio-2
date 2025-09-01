'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'

export function CustomCursor() {
  // Use motion values with springs for tighter, low-latency tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)

  // Fast (snappy) spring for the main cursor
  const xMain = useSpring(mouseX, { stiffness: 1200, damping: 40, mass: 0.2 })
  const yMain = useSpring(mouseY, { stiffness: 1200, damping: 40, mass: 0.2 })

  // Softer spring for the follower ring
  const xFollow = useSpring(mouseX, { stiffness: 300, damping: 25, mass: 0.2 })
  const yFollow = useSpring(mouseY, { stiffness: 300, damping: 25, mass: 0.2 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .magnetic')
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  // Derived motion values to offset center points
  const xMainOffset = useTransform(xMain, (v: number) => v - 8)
  const yMainOffset = useTransform(yMain, (v: number) => v - 8)
  const xFollowOffset = useTransform(xFollow, (v: number) => v - 16)
  const yFollowOffset = useTransform(yFollow, (v: number) => v - 16)

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: xMainOffset,
          y: yMainOffset,
          scale: isHovering ? 1.5 : 1,
        }}
      />
      
      {/* Cursor follower */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-neon-blue/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: xFollowOffset,
          y: yFollowOffset,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.5,
        }}
      />
    </>
  )
}