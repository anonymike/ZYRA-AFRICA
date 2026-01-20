"use client"

import { Sparkles } from "lucide-react"

interface AnimatedMineral {
  id: number
  color: string
  gradient: string
  name: string
  delay: number
  size: "small" | "medium" | "large"
}

const minerals: AnimatedMineral[] = [
  {
    id: 1,
    color: "bg-green-500",
    gradient: "from-green-400 to-green-600",
    name: "Tsavorite",
    delay: 0,
    size: "large",
  },
  {
    id: 2,
    color: "bg-red-500",
    gradient: "from-red-400 to-red-600",
    name: "Ruby",
    delay: 0.3,
    size: "medium",
  },
  {
    id: 3,
    color: "bg-blue-500",
    gradient: "from-blue-400 to-blue-600",
    name: "Sapphire",
    delay: 0.6,
    size: "small",
  },
  {
    id: 4,
    color: "bg-pink-500",
    gradient: "from-pink-400 to-pink-600",
    name: "Tourmaline",
    delay: 0.9,
    size: "medium",
  },
  {
    id: 5,
    color: "bg-purple-500",
    gradient: "from-purple-400 to-purple-600",
    name: "Rhodolite",
    delay: 1.2,
    size: "small",
  },
  {
    id: 6,
    color: "bg-yellow-500",
    gradient: "from-yellow-400 to-yellow-600",
    name: "Spinel",
    delay: 1.5,
    size: "medium",
  },
]

export function AnimatedMinerals() {
  const sizeMap = {
    small: "w-12 h-12",
    medium: "w-16 h-16",
    large: "w-20 h-20",
  }

  const animationMap = {
    0: "animate-float-1",
    1: "animate-float-2",
    2: "animate-float-3",
    3: "animate-float-1",
    4: "animate-float-2",
    5: "animate-float-3",
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {minerals.map((mineral, index) => (
        <div
          key={mineral.id}
          className={`absolute ${sizeMap[mineral.size]} ${animationMap[index % 3]}`}
          style={{ animationDelay: `${mineral.delay}s` }}
        >
          <div
            className={`w-full h-full rounded-lg bg-gradient-to-br ${mineral.gradient} flex items-center justify-center shadow-lg backdrop-blur-sm`}
          >
            <Sparkles
              size={mineral.size === "large" ? 32 : mineral.size === "medium" ? 24 : 16}
              className="text-white/70"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
