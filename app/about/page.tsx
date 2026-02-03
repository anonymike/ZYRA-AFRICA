import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Users, Leaf, Heart, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="luxury-heading text-foreground">Who We Are</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Zyra Africa, we believe in bridging the gap between remote mining communities and global markets. Based
            in Kenya, our work focuses on collecting rough and cut gemstones—especially Tsavorite, Ruby, Spinel,
            Tourmaline, Rhodolite, and Ruby—directly from the artisanal miners of Taita Taveta.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="mineral-section bg-gradient-to-b from-background to-muted/30 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-semibold mb-4 text-foreground">Our Sourcing Model</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our sourcing model is based on trust, transparency, and long-term collaboration with local miners. We
                provide market access, price fairness, and visibility to ensure miners benefit from their natural
                wealth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are not just gemstone traders—we are partners in transformation. Our gems are ethically sourced, our
                operations are community-centered, and our mission is simple: deliver exceptional Kenyan gemstones while
                empowering the hands that uncover them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Locations */}
      <section className="mineral-section px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxury-heading text-center mb-16">Our Sourcing Locations in Taita Taveta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="mineral-card">
              <h3 className="font-serif text-lg font-semibold mb-2 flex items-center gap-2 text-foreground">
                <MapPin size={20} className="text-primary" />
                Mkuki
              </h3>
              <p className="text-muted-foreground">Tsavorite, Ruby</p>
            </div>
            <div className="mineral-card">
              <h3 className="font-serif text-lg font-semibold mb-2 flex items-center gap-2 text-foreground">
                <MapPin size={20} className="text-primary" />
                Kabanga
              </h3>
              <p className="text-muted-foreground">Tsavorite, Ruby</p>
            </div>
            <div className="mineral-card">
              <h3 className="font-serif text-lg font-semibold mb-2 flex items-center gap-2 text-foreground">
                <MapPin size={20} className="text-primary" />
                Mgongoni
              </h3>
              <p className="text-muted-foreground">Tsavorite, Ruby</p>
            </div>
            <div className="mineral-card">
              <h3 className="font-serif text-lg font-semibold mb-2 flex items-center gap-2 text-foreground">
                <MapPin size={20} className="text-primary" />
                Kasighau
              </h3>
              <p className="text-muted-foreground">Green Tourmaline, Chawia Crystals</p>
            </div>
            <div className="mineral-card">
              <h3 className="font-serif text-lg font-semibold mb-2 flex items-center gap-2 text-foreground">
                <MapPin size={20} className="text-primary" />
                Mkuki
              </h3>
              <p className="text-muted-foreground">Rhodolite, Amethyst</p>
            </div>
            <div className="mineral-card">
              <h3 className="font-serif text-lg font-semibold mb-2 flex items-center gap-2 text-foreground">
                <MapPin size={20} className="text-primary" />
                Kamtonga
              </h3>
              <p className="text-muted-foreground">Garnets, Spinels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="luxury-section bg-muted/30 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              To create a direct, transparent market for ethically sourced African gemstones that empowers artisanal
              miners in Taita Taveta County and their communities through fair trade practices and sustainable
              development initiatives.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We eliminate middlemen, ensuring miners receive premium compensation while buyers gain complete
              traceability and authenticity.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              To become the global benchmark for ethical, transparent gemstone sourcing that demonstrates how luxury and
              sustainability can coexist, creating prosperity for miners and their families.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a future where every gemstone tells a story of positive impact—economic, social, and
              environmental.
            </p>
          </div>
        </div>
      </section>

      {/* Taita Taveta */}
      <section className="luxury-section px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="luxury-heading">Taita Taveta County, Kenya</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nestled in southeastern Kenya, Taita Taveta County is home to some of Africa's most prized gemstone
                deposits. For generations, artisanal miners have extracted precious stones from this region—often
                without fair compensation or market access.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Rich Geological Heritage</h4>
                    <p className="text-muted-foreground">
                      Known for world-class Tsavorite garnet, ruby, sapphire, and tourmaline deposits
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Artisanal Mining Communities</h4>
                    <p className="text-muted-foreground">
                      Home to thousands of artisanal miners and cutting craftspeople
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Leaf className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Conservation Focus</h4>
                    <p className="text-muted-foreground">
                      Balancing gemstone extraction with environmental protection and reforestation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/assets/icons/mining-operations.jpg"
                alt="Taita Taveta mining operations with excavator equipment"
                fill
                className="object-cover"
                quality={95}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Miner Partnership Model */}
      <section className="luxury-section bg-muted/30 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxury-heading text-center mb-12">Our Miner Partnership Model</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Direct Relationships",
                description:
                  "We work directly with registered artisanal mining cooperatives and individual miners, eliminating exploitative middlemen.",
              },
              {
                step: "2",
                title: "Fair Market Pricing",
                description:
                  "All gemstones are purchased at or above international market rates, ensuring miners receive sustainable income.",
              },
              {
                step: "3",
                title: "Training & Capacity",
                description:
                  "We provide technical training on sustainable mining practices, gemstone grading, and business skills.",
              },
              {
                step: "4",
                title: "Certification & Documentation",
                description:
                  "Each gemstone is documented from source, with miners receiving certificates of authenticity and provenance.",
              },
              {
                step: "5",
                title: "Community Reinvestment",
                description:
                  "A portion of profits fund local initiatives: schools, healthcare, women's programs, and environmental conservation.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-serif font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Sourcing Principles */}
      <section className="luxury-section px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxury-heading text-center mb-12">Our Ethical Sourcing Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={32} />,
                title: "Human Rights",
                points: ["No child labor", "Safe working conditions", "Fair wages", "Freedom of association"],
                image: "/assets/icons/ethical-craftsmanship.jpg",
              },
              {
                icon: <Leaf size={32} />,
                title: "Environmental",
                points: [
                  "Sustainable mining practices",
                  "Land restoration",
                  "Water protection",
                  "Biodiversity conservation",
                ],
                image: "/assets/icons/sustainability-environment.jpg",
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Economic",
                points: ["Fair compensation", "Transparent pricing", "Market access", "Income stability"],
              },
              {
                icon: <Users size={32} />,
                title: "Community",
                points: ["Local employment", "Skills development", "Healthcare support", "Education funding"],
              },
              {
                icon: <MapPin size={32} />,
                title: "Traceability",
                points: [
                  "Mine-to-buyer tracking",
                  "Certification records",
                  "Documentation audit",
                  "Blockchain verification",
                ],
                image: "/assets/icons/transparency-data.jpg",
              },
              {
                icon: <Heart className="text-pink-500" size={32} />,
                title: "Empowerment",
                points: ["Women in mining", "Youth programs", "Leadership training", "Business mentorship"],
              },
            ].map((item: any, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden border border-border group">
                {item.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      quality={90}
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h3 className="font-serif text-xl font-semibold mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.points.map((point: string) => (
                      <li key={point} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="luxury-section bg-primary text-primary-foreground px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-serif font-semibold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Miners & Artisans Partnered" },
              { number: "1,200+", label: "Families Empowered" },
              { number: "$2.3M+", label: "Fair Compensation Paid" },
              { number: "15", label: "Schools & Programs Funded" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-serif font-semibold mb-2">{stat.number}</div>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
