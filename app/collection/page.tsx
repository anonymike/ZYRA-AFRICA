"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GemstoneFilters, type GemstoneFilters as GemstoneFiltersType } from "@/components/gemstone-filters"
import { GemstoneCard } from "@/components/gemstone-card"
import { Sparkles } from "lucide-react"

// Sample gemstone data
const gemstones = [
  {
    id: "ts001",
    name: "Vivid Green Tsavorite",
    type: "Tsavorite",
    carat: 2.15,
    cut: "Cushion",
    origin: "Taita Taveta",
    price: 3200,
    color: "Vivid Green",
    clarity: "VVS1",
    certification: "GIA",
    minerName: "Kamau Mining Cooperative",
    image: "/assets/gemstones/tsavorite-polished.jpg",
  },
  {
    id: "rb001",
    name: "Premium Mixed Ruby Collection",
    type: "Ruby",
    carat: 1.85,
    cut: "Mixed Rough",
    origin: "Taita Taveta",
    price: 4500,
    color: "Deep Red & Green",
    clarity: "VS1",
    certification: "GIA",
    minerName: "Wangari Women Miners",
    image: "/assets/gemstones/ruby-mixed.jpeg",
  },
  {
    id: "tm001",
    name: "Iridescent Tourmaline Collection",
    type: "Tourmaline",
    carat: 3.42,
    cut: "Raw",
    origin: "Taita Taveta",
    price: 1800,
    color: "Multi-Color Iridescent",
    clarity: "VVS2",
    certification: "AGS",
    minerName: "Mombasa Artisan Collective",
    image: "/assets/gemstones/tourmaline-collection.jpg",
  },
  {
    id: "rh001",
    name: "Deep Rhodolite Garnet Rough",
    type: "Rhodolite",
    carat: 1.92,
    cut: "Raw Granular",
    origin: "Taita Taveta",
    price: 2100,
    color: "Deep Red-Purple",
    clarity: "VVS1",
    minerName: "Taita Garnet Cooperative",
    image: "/assets/gemstones/rhodolite-granular.jpeg",
  },
  {
    id: "sp001",
    name: "Deep Pink Spinel Raw",
    type: "Spinel",
    carat: 1.45,
    cut: "Raw Crystal",
    origin: "Taita Taveta",
    price: 1600,
    color: "Deep Pink-Magenta",
    clarity: "VVS2",
    minerName: "Women of Taita Mining Initiative",
    image: "/assets/gemstones/spinel-raw.jpg",
  },
  {
    id: "sp002",
    name: "Premium Purple Sapphire",
    type: "Sapphire",
    carat: 2.6,
    cut: "Faceted",
    origin: "Taita Taveta",
    price: 5200,
    color: "Lavender Purple",
    clarity: "VS1",
    certification: "GIA",
    minerName: "Eastern Kenya Miners",
    image: "/assets/gemstones/sapphire-polished.jpg",
  },
  {
    id: "ts002",
    name: "Vivid Green Tsavorite Faceted",
    type: "Tsavorite",
    carat: 3.8,
    cut: "Faceted",
    origin: "Taita Taveta",
    price: 5600,
    color: "Vivid Green",
    clarity: "VVS1",
    certification: "GIA",
    minerName: "Mkuki Mining Group",
    image: "/assets/gemstones/tsavorite-faceted.jpg",
  },
]

export default function CollectionPage() {
  const [filters, setFilters] = useState<GemstoneFiltersType>({})

  const filteredGemstones = useMemo(() => {
    return gemstones.filter((gem) => {
      if (filters.type && gem.type !== filters.type) return false
      if (filters.caratMin !== undefined && gem.carat < filters.caratMin) return false
      if (filters.caratMax !== undefined && gem.carat > filters.caratMax) return false
      if (filters.cut && gem.cut !== filters.cut) return false
      if (filters.origin && gem.origin !== filters.origin) return false
      if (filters.priceMin !== undefined && gem.price < filters.priceMin) return false
      if (filters.priceMax !== undefined && gem.price > filters.priceMax) return false
      if (
        filters.certification &&
        filters.certification !== "All" &&
        filters.certification !== "Uncertified" &&
        gem.certification !== filters.certification
      )
        return false
      return true
    })
  }, [filters])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 md:pb-16 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={24} className="text-primary" />
            <h1 className="text-4xl md:text-5xl font-serif font-semibold">Gemstone Collection</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Explore our curated selection of ethically sourced African gemstones
          </p>
        </div>
      </section>

      {/* Collection */}
      <section className="luxury-section px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <GemstoneFilters onFilterChange={setFilters} />
            </div>

            {/* Gemstones Grid */}
            <div className="lg:col-span-3">
              {filteredGemstones.length > 0 ? (
                <>
                  <div className="mb-6">
                    <p className="text-muted-foreground">
                      Showing {filteredGemstones.length} of {gemstones.length} gemstones
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredGemstones.map((gem) => (
                      <GemstoneCard key={gem.id} gemstone={gem} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <Sparkles size={48} className="mx-auto text-muted/30 mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2">No gemstones found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
