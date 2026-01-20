import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GeometricCrystalsBackground } from "@/components/geometric-crystals-background"
import { TypingText } from "@/components/typing-text"
import { ArrowRight, Sparkles, Globe, Users, Shield, Leaf, CheckCircle } from "lucide-react"

export default function Home() {
  const gemstones = [
    { name: "Tsavorite", color: "from-green-400 to-green-600", description: "Rare African green garnet" },
    { name: "Ruby", color: "from-red-400 to-red-600", description: "Deep crimson perfection" },
    { name: "Tourmaline", color: "from-pink-400 to-pink-600", description: "Multi-hued natural beauty" },
    { name: "Sapphire", color: "from-blue-400 to-blue-600", description: "Celestial blue brilliance" },
    { name: "Rhodolite", color: "from-purple-400 to-purple-600", description: "Rose-red radiance" },
    { name: "Spinel", color: "from-orange-400 to-orange-600", description: "Vibrant coral tones" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 min-h-screen flex items-center justify-center overflow-hidden">
        <GeometricCrystalsBackground />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="luxury-heading text-center text-cyan-300 dark:text-blue-600">
            From Mine to Market: Natural Gemstones from the Heart of Kenya
          </h1>
          <TypingText
            text="We source exquisite Tsavorite, Ruby, Tourmaline, Rhodolite, Alexandrite, and more—direct from miners in Taita Taveta to buyers worldwide."
            speed={30}
            className="text-xl text-blue-100 dark:text-slate-700 mb-6 leading-relaxed font-light max-w-3xl mx-auto"
          />
          <p className="text-lg text-blue-50 dark:text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Welcome to Zyra Africa—your trusted partner for ethically sourced, uncut and faceted gemstones from the rich
            mineral belts of Taita Taveta County. We work hand-in-hand with artisanal miners to deliver authentic gems
            from the source, ensuring quality, traceability, and fairness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collection" className="cta-button inline-flex items-center justify-center gap-2">
              Shop Our Gems
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 md:px-8 md:py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium inline-flex items-center justify-center"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Highlight Strip */}
      <section className="bg-primary/8 border-y border-primary/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-primary flex-shrink-0" size={24} />
              <span className="text-sm font-semibold text-foreground">Direct from Kenyan mines</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-primary flex-shrink-0" size={24} />
              <span className="text-sm font-semibold text-foreground">Ethical and traceable sourcing</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-primary flex-shrink-0" size={24} />
              <span className="text-sm font-semibold text-foreground">International shipping</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-primary flex-shrink-0" size={24} />
              <span className="text-sm font-semibold text-foreground">Custom orders & bulk supply</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gemstone Types */}
      <section className="mineral-section px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="luxury-heading">Our Gemstone Collection</h2>
            <p className="text-xl text-muted-foreground">
              Discover the diversity of African gemstones from Taita Taveta
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {gemstones.map((stone) => (
              <Link href={`/collection?type=${stone.name.toLowerCase()}`} key={stone.name}>
                <div className="group cursor-pointer h-full">
                  <div
                    className={`bg-gradient-to-br ${stone.color} rounded-xl h-40 md:h-52 flex items-center justify-center mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`}
                  >
                    <Sparkles size={48} className="text-white/70" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-1 text-foreground">{stone.name}</h3>
                  <p className="text-sm text-muted-foreground">{stone.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mine-to-Market Promise */}
      <section className="mineral-section px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxury-heading text-center mb-16">Our Mine-to-Market Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={32} />,
                title: "Transparency",
                description: "Complete traceability from mine to buyer. Know the origin and story of every gemstone.",
              },
              {
                icon: <Globe size={32} />,
                title: "Global Standards",
                description:
                  "All gemstones come with optional certification and lab grading from international accreditors.",
              },
              {
                icon: <Users size={32} />,
                title: "Miner Partnership",
                description:
                  "Direct relationships with artisanal miners ensuring fair compensation and safe working conditions.",
              },
              {
                icon: <Leaf size={32} />,
                title: "Sustainability",
                description:
                  "Environmentally conscious sourcing practices protecting Taita Taveta's natural resources.",
              },
              {
                icon: <Users size={32} className="text-pink-500" />,
                title: "Women Empowerment",
                description: "Dedicated programs for female miners and youth training in gemstone crafts.",
              },
              {
                icon: <Sparkles size={32} />,
                title: "Premium Quality",
                description: "Hand-selected gemstones meeting international quality benchmarks and buyer expectations.",
              },
            ].map((item, i) => (
              <div key={i} className="mineral-card text-center p-8 hover:bg-muted/50">
                <div className="flex justify-center mb-4 text-primary">{item.icon}</div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mineral-section bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Ready to Own African Excellence?</h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Browse our curated collection or connect with us for wholesale and custom orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collection"
              className="px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
