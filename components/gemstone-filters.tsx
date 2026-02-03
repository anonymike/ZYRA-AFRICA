"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface FiltersProps {
  onFilterChange: (filters: GemstoneFilters) => void
}

export interface GemstoneFilters {
  type?: string
  caratMin?: number
  caratMax?: number
  cut?: string
  origin?: string
  certification?: string
  priceMin?: number
  priceMax?: number
}

export function GemstoneFilters({ onFilterChange }: FiltersProps) {
  const [activeFilters, setActiveFilters] = useState<GemstoneFilters>({})
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const gemstoneTypes = ["Tsavorite", "Ruby", "Tourmaline", "Rhodolite", "Spinel", "Amethyst", "Sapphire"]
  const cuts = ["Cushion", "Oval", "Round", "Emerald", "Pear", "Asscher", "Mixed"]
  const origins = ["Taita Taveta", "All Regions"]
  const certifications = ["GIA", "AGS", "Uncertified", "All"]

  const handleFilterChange = (newFilters: GemstoneFilters) => {
    setActiveFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    setActiveFilters({})
    onFilterChange({})
  }

  const hasActiveFilters = Object.values(activeFilters).some((v) => v !== undefined && v !== "")

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="md:hidden flex gap-2 mb-6">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="flex-1 px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
        >
          Filters
        </button>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="px-4 py-2 border border-destructive text-destructive rounded hover:bg-destructive/10 transition-colors flex items-center gap-2"
          >
            <X size={16} />
            Clear
          </button>
        )}
      </div>

      {/* Filter Panel */}
      <div className={`${showMobileFilters ? "block" : "hidden"} md:block md:sticky md:top-24 mb-6 md:mb-0`}>
        <div className="space-y-6 bg-muted/30 rounded-lg p-6">
          {/* Gemstone Type */}
          <div>
            <h3 className="font-semibold mb-3">Gemstone Type</h3>
            <div className="space-y-2">
              {gemstoneTypes.map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters.type === type}
                    onChange={(e) => {
                      handleFilterChange({
                        ...activeFilters,
                        type: e.target.checked ? type : undefined,
                      })
                    }}
                    className="rounded"
                  />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Carat Weight */}
          <div>
            <h3 className="font-semibold mb-3">Carat Weight</h3>
            <div className="space-y-2">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Min: {activeFilters.caratMin || 0}</label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={activeFilters.caratMin || 0}
                  onChange={(e) =>
                    handleFilterChange({
                      ...activeFilters,
                      caratMin: Number.parseFloat(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Max: {activeFilters.caratMax || 10}</label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={activeFilters.caratMax || 10}
                  onChange={(e) =>
                    handleFilterChange({
                      ...activeFilters,
                      caratMax: Number.parseFloat(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Cut */}
          <div>
            <h3 className="font-semibold mb-3">Cut</h3>
            <div className="space-y-2">
              {cuts.map((cut) => (
                <label key={cut} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters.cut === cut}
                    onChange={(e) => {
                      handleFilterChange({
                        ...activeFilters,
                        cut: e.target.checked ? cut : undefined,
                      })
                    }}
                    className="rounded"
                  />
                  <span className="text-sm">{cut}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Origin */}
          <div>
            <h3 className="font-semibold mb-3">Origin</h3>
            <div className="space-y-2">
              {origins.map((origin) => (
                <label key={origin} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters.origin === origin}
                    onChange={(e) => {
                      handleFilterChange({
                        ...activeFilters,
                        origin: e.target.checked ? origin : undefined,
                      })
                    }}
                    className="rounded"
                  />
                  <span className="text-sm">{origin}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div>
            <h3 className="font-semibold mb-3">Certification</h3>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <label key={cert} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters.certification === cert}
                    onChange={(e) => {
                      handleFilterChange({
                        ...activeFilters,
                        certification: e.target.checked ? cert : undefined,
                      })
                    }}
                    className="rounded"
                  />
                  <span className="text-sm">{cert}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="space-y-2">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Min: ${activeFilters.priceMin || 0}</label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={activeFilters.priceMin || 0}
                  onChange={(e) =>
                    handleFilterChange({
                      ...activeFilters,
                      priceMin: Number.parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">
                  Max: ${activeFilters.priceMax || 10000}
                </label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={activeFilters.priceMax || 10000}
                  onChange={(e) =>
                    handleFilterChange({
                      ...activeFilters,
                      priceMax: Number.parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="w-full px-4 py-2 border border-destructive text-destructive rounded hover:bg-destructive/10 transition-colors"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>
    </>
  )
}
