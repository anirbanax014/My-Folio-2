'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'portfolio-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    const mql = window.matchMedia('(prefers-color-scheme: dark)')

    const effective: 'light' | 'dark' = theme === 'system'
      ? (mql.matches ? 'dark' : 'light')
      : theme

    // Apply both: Tailwind dark class and data-theme for CSS variables
    if (effective === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    root.setAttribute('data-theme', effective)
  }, [theme])

  // React to system theme changes when in 'system' mode
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (theme !== 'system') return

    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      const root = window.document.documentElement
      const effective = mql.matches ? 'dark' : 'light'
      if (effective === 'dark') root.classList.add('dark')
      else root.classList.remove('dark')
      root.setAttribute('data-theme', effective)
    }
    mql.addEventListener?.('change', handler)
    // Apply once on mount
    handler()
    return () => mql.removeEventListener?.('change', handler)
  }, [theme])

  // Hydrate theme from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    const saved = (localStorage.getItem(storageKey) as Theme) || null
    if (saved) {
      setTheme(saved)
    }
  }, [storageKey])

  const value = {
    theme,
    setTheme: (t: Theme) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, t)
      }
      setTheme(t)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}