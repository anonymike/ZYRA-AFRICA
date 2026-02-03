"use client"

import { useEffect, useRef } from "react"

export function GeometricCrystalsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Crystal class
    interface Crystal {
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      size: number
      rotation: number
      rotationSpeed: number
      color: string
      opacity: number
    }

    const crystals: Crystal[] = []
    const crystalColors = [
      "rgba(34, 197, 94, ", // green (Tsavorite)
      "rgba(239, 68, 68, ", // red (Ruby)
      "rgba(59, 130, 246, ", // blue (Sapphire)
      "rgba(236, 72, 153, ", // pink (Tourmaline)
      "rgba(168, 85, 247, ", // purple (Rhodolite)
      "rgba(251, 146, 60, ", // orange (Spinel)
      "rgba(168, 162, 141, ", // beige (neutral)
    ]

    // Initialize crystals
    for (let i = 0; i < 20; i++) {
      crystals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 500,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: (Math.random() - 0.5) * 1,
        size: Math.random() * 40 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        color: crystalColors[Math.floor(Math.random() * crystalColors.length)],
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    // Draw function
    const drawCrystal = (crystal: Crystal) => {
      ctx.save()
      ctx.globalAlpha = crystal.opacity
      ctx.translate(crystal.x, crystal.y)
      ctx.rotate(crystal.rotation)

      // Draw geometric crystal shape
      const scale = crystal.size / 50
      ctx.scale(scale, scale)

      // Draw octahedron (diamond shape)
      ctx.fillStyle = crystal.color + crystal.opacity + ")"
      ctx.strokeStyle = crystal.color + crystal.opacity * 1.5 + ")"
      ctx.lineWidth = 2

      // Top triangle
      ctx.beginPath()
      ctx.moveTo(0, -30)
      ctx.lineTo(30, 10)
      ctx.lineTo(-30, 10)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Bottom triangle
      ctx.beginPath()
      ctx.moveTo(0, 30)
      ctx.lineTo(30, -10)
      ctx.lineTo(-30, -10)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Center highlight
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
      ctx.beginPath()
      ctx.arc(0, 0, 8, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      // Clear with semi-transparent background for trail effect
      ctx.fillStyle = "rgba(248, 245, 240, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw crystals
      crystals.forEach((crystal) => {
        crystal.x += crystal.vx
        crystal.y += crystal.vy
        crystal.z += crystal.vz
        crystal.rotation += crystal.rotationSpeed

        // Wrap around edges
        if (crystal.x > canvas.width + 100) crystal.x = -100
        if (crystal.x < -100) crystal.x = canvas.width + 100
        if (crystal.y > canvas.height + 100) crystal.y = -100
        if (crystal.y < -100) crystal.y = canvas.height + 100

        // Depth effect
        crystal.opacity = ((crystal.z % 500) / 500) * 0.6 + 0.2

        drawCrystal(crystal)
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "linear-gradient(135deg, #faf5f0 0%, #f5ede4 100%)" }}
    />
  )
}
