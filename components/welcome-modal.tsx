'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem('welcomeModalSeen')
    if (!hasSeenModal) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('welcomeModalSeen', 'true')
  }

  if (!mounted) return null

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="p-8 md:p-12">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors duration-200"
                aria-label="Close modal"
              >
                <X size={24} className="text-foreground" />
              </button>

              {/* Content */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">
                  Welcome to Zyra Africa
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
              </div>

              <p className="text-lg text-card-foreground leading-relaxed mb-8 text-center">
                Your trusted partner for ethically sourced, uncut and faceted gemstones from the rich mineral belts of
                Taita Taveta County. We work hand-in-hand with artisanal miners to deliver authentic gems from the
                source, ensuring quality, traceability, and fairness.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { title: 'Ethical', icon: '✓' },
                  { title: 'Transparent', icon: '◆' },
                  { title: 'Premium', icon: '★' },
                ].map((feature, i) => (
                  <div key={i} className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-2xl text-primary mb-2">{feature.icon}</div>
                    <p className="font-semibold text-foreground">{feature.title}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Explore Our Collection
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
