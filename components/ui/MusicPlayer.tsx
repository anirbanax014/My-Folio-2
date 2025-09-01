'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener('ended', handleEnded)

    return () => audio.removeEventListener('ended', handleEnded)
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="music-player"
        >
          <div className="glass rounded-full p-3 flex items-center gap-2 backdrop-blur-md">
            <audio
              ref={audioRef}
              src="/music/lofi-background.mp3"
              loop
              preload="metadata"
            />
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="p-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-lg transition-all duration-300"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMute}
              className="p-2 rounded-full text-white/70 hover:text-white transition-colors duration-300"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVisible(false)}
              className="p-1 rounded-full text-white/50 hover:text-white transition-colors duration-300 text-xs"
            >
              ×
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}