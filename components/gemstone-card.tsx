"use client"

import Image from "next/image"
import { ShoppingCart, Heart, Award } from "lucide-react"
import { useState } from "react"

interface Gemstone {
  id: string
  name: string
  type: string
  carat: number
  cut: string
  origin: string
  price: number
  color: string
  clarity: string
  certification?: string
  minerId?: string
  minerName?: string
  image: string
}

interface GemstoneCardProps {
  gemstone: Gemstone
}

export function GemstoneCard({ gemstone }: GemstoneCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative group overflow-hidden bg-muted/30 aspect-square">
        <Image
          src={gemstone.image || "/placeholder.svg"}
          alt={`${gemstone.type} - ${gemstone.carat}ct`}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
          quality={95}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className={`p-2 rounded-full transition-colors ${
              isFavorited ? "bg-accent text-accent-foreground" : "bg-background/80 hover:bg-background"
            }`}
          >
            <Heart size={20} fill={isFavorited ? "currentColor" : "none"} />
          </button>
        </div>
        {gemstone.certification && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Award size={14} />
            {gemstone.certification}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold mb-2">{gemstone.name}</h3>

        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="bg-muted/30 p-2 rounded">
            <p className="text-muted-foreground text-xs">Type</p>
            <p className="font-semibold">{gemstone.type}</p>
          </div>
          <div className="bg-muted/30 p-2 rounded">
            <p className="text-muted-foreground text-xs">Carat</p>
            <p className="font-semibold">{gemstone.carat}ct</p>
          </div>
          <div className="bg-muted/30 p-2 rounded">
            <p className="text-muted-foreground text-xs">Cut</p>
            <p className="font-semibold">{gemstone.cut}</p>
          </div>
          <div className="bg-muted/30 p-2 rounded">
            <p className="text-muted-foreground text-xs">Color</p>
            <p className="font-semibold">{gemstone.color}</p>
          </div>
        </div>

        {/* Miner Info */}
        {gemstone.minerName && (
          <div className="mb-4 pb-4 border-t border-border pt-4">
            <p className="text-xs text-muted-foreground mb-1">Sourced by:</p>
            <p className="text-sm font-semibold">{gemstone.minerName}</p>
            <p className="text-xs text-muted-foreground">Taita Taveta, Kenya</p>
          </div>
        )}

        {/* Price & CTA */}
        <div className="space-y-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-muted-foreground text-xs mb-1">Price</p>
              <p className="font-serif text-2xl font-semibold">${gemstone.price.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-xs mb-1">per carat</p>
              <p className="text-sm font-semibold">${Math.round(gemstone.price / gemstone.carat)}</p>
            </div>
          </div>
          <button className="w-full cta-button flex items-center justify-center gap-2 text-sm">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
          <button className="w-full px-4 py-2 border border-primary text-primary rounded hover:bg-primary/5 transition-colors text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}
