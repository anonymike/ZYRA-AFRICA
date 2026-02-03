'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function CookieConsent() {
  const [showCookie, setShowCookie] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('zyra-cookie-consent')
    if (!cookieConsent) {
      // Show cookie banner after 1 second delay
      setTimeout(() => setShowCookie(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('zyra-cookie-consent', 'accepted')
    setShowCookie(false)
  }

  const handleReject = () => {
    localStorage.setItem('zyra-cookie-consent', 'rejected')
    setShowCookie(false)
  }

  if (!mounted || !showCookie) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 p-4 md:p-6">
      {/* Backdrop blur */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={handleReject}
      />

      {/* Cookie Banner */}
      <div className="relative max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-2xl p-6 md:p-8 border border-blue-400/30 dark:border-slate-600/50">
        <button
          onClick={handleReject}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Close cookie banner"
        >
          <X size={20} />
        </button>

        <div className="pr-8">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3">
            We Value Your Privacy
          </h3>
          <p className="text-blue-50 dark:text-slate-200 mb-4 text-sm md:text-base leading-relaxed">
            We use cookies to enhance your experience, analyze site traffic, and personalize content. By accepting, you consent to our use of cookies in accordance with our policies.
          </p>

          <div className="flex flex-wrap gap-3 items-center text-xs md:text-sm text-blue-50 dark:text-slate-200 mb-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white underline transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/cookie-policy"
              className="hover:text-white underline transition-colors"
            >
              Cookie Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-white underline transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
            >
              Accept All
            </button>
            <button
              onClick={handleReject}
              className="flex-1 bg-white/20 text-white font-semibold py-3 px-6 rounded-lg border border-white/40 hover:bg-white/30 transition-colors duration-200"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
