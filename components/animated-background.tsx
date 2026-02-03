'use client'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden hidden dark:block">
      {/* Animated blue orbs for dark mode */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/40 rounded-full filter blur-3xl animate-blob-1" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-400/30 rounded-full filter blur-3xl animate-blob-2" />
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-600/35 rounded-full filter blur-3xl animate-blob-3" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/25 rounded-full filter blur-3xl animate-blob-4" />
    </div>
  )
}
