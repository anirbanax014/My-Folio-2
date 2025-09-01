'use client'

import { useEffect, useRef, useState } from 'react'

interface TypedTextProps {
  strings: string[]
  typeSpeed?: number
  backSpeed?: number
  backDelay?: number
  startDelay?: number
  loop?: boolean
  showCursor?: boolean
  cursorChar?: string
}

export function TypedText({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 1000,
  startDelay = 0,
  loop = true,
  showCursor = true,
  cursorChar = '|',
}: TypedTextProps) {
  const [displayText, setDisplayText] = useState('')

  // Internal state stored in refs to avoid re-creating timers on each render
  const stringIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const deletingRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    if (!strings || strings.length === 0) return

    clearTimer()

    const tick = () => {
      const currentString = strings[stringIndexRef.current] || ''

      if (deletingRef.current) {
        // Deleting
        const next = currentString.substring(0, Math.max(0, charIndexRef.current - 1))
        setDisplayText(next)
        charIndexRef.current = Math.max(0, charIndexRef.current - 1)

        if (charIndexRef.current === 0) {
          deletingRef.current = false
          stringIndexRef.current = (stringIndexRef.current + 1) % strings.length
          timerRef.current = setTimeout(tick, typeSpeed)
          return
        }

        timerRef.current = setTimeout(tick, backSpeed)
        return
      }

      // Typing
      const next = currentString.substring(0, Math.min(currentString.length, charIndexRef.current + 1))
      setDisplayText(next)
      charIndexRef.current = Math.min(currentString.length, charIndexRef.current + 1)

      if (charIndexRef.current === currentString.length) {
        if (!loop && stringIndexRef.current === strings.length - 1) {
          // Stop on last string if not looping
          clearTimer()
          return
        }
        // Switch to deleting after a pause
        deletingRef.current = true
        timerRef.current = setTimeout(tick, backDelay)
        return
      }

      timerRef.current = setTimeout(tick, typeSpeed)
    }

    // Reset indices when dependencies change
    stringIndexRef.current = 0
    charIndexRef.current = 0
    deletingRef.current = false
    setDisplayText('')

    timerRef.current = setTimeout(tick, Math.max(0, startDelay))

    return () => clearTimer()
    // Restart the loop if any core setting changes
  }, [strings, typeSpeed, backSpeed, backDelay, startDelay, loop])

  return (
    <span className="relative">
      <span className="text-neon-blue">{displayText}</span>
      {showCursor && (
        <span className="animate-pulse text-neon-blue ml-1">{cursorChar}</span>
      )}
    </span>
  )
}
