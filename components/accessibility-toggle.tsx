'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export function AccessibilityToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if dark mode is already enabled
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    if (mounted) {
      const html = document.documentElement
      if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        setIsDark(false)
        localStorage.setItem('theme', 'light')
      } else {
        html.classList.add('dark')
        setIsDark(true)
        localStorage.setItem('theme', 'dark')
      }
    }
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-white/40"
    >
      {isDark ? (
        <Sun size={24} className="text-yellow-300" />
      ) : (
        <Moon size={24} className="text-slate-200" />
      )}
    </button>
  )
}
