import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookOpen, Heart, Zap, Users, Award, TrendingUp } from "lucide-react"

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-gradient-to-br from-pink-50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="luxury-heading">Community Impact & Empowerment</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Zyra Africa is committed to transforming lives through education, skills development, and economic
            opportunity in Taita Taveta County.
          </p>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="luxury-section px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-12">
            {[
              { number: "1,200+", label: "Families Supported" },
              { number: "$2.3M+", label: "Fair Compensation Paid" },
              { number: "450+", label: "Youth Trained" },
              { number: "15", label: "Schools Funded" },
            ].map((stat, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-8">
                <div className="text-4xl md:text-5xl font-serif font-semibold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Women's Empowerment */}
      <section className="luxury-section bg-muted/30 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="luxury-heading">Women in Mining: Breaking Barriers</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Mining in Taita Taveta has historically been a male-dominated sector. Zyra Africa is dedicated to
                creating equal opportunities for women miners and supporting their leadership in the industry.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Women's Mining Cooperative",
                    description: "Support and market access for female-led mining groups",
                  },
                  {
                    title: "Technical Training",
                    description: "Mining operations, gemstone grading, and equipment maintenance",
                  },
                  {
                    title: "Business Leadership",
                    description: "Cooperative management, financial literacy, and entrepreneurship",
                  },
                  {
                    title: "Health & Safety",
                    description: "Occupational health screening, safety equipment, and maternity support",
                  },
                  {
                    title: "Childcare Support",
                    description: "Community childcare centers enabling mothers to work",
                  },
                  {
                    title: "Market Access",
                    description: "Premium pricing and direct buyer relationships for women-mined gemstones",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg p-12 aspect-square flex items-center justify-center">
              <div className="text-center">
                <Heart className="text-pink-500" size={64} className="mx-auto mb-4" />
                <p className="font-serif text-2xl font-semibold">350+ Women</p>
                <p className="text-muted-foreground mt-2">Actively partnering with Zyra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Development */}
      <section className="luxury-section px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-12 aspect-square flex items-center justify-center order-last md:order-first">
              <div className="text-center">
                <Zap className="text-primary" size={64} className="mx-auto mb-4" />
                <p className="font-serif text-2xl font-semibold">450+ Youth</p>
                <p className="text-muted-foreground mt-2">Trained in gemstone crafts</p>
              </div>
            </div>
            <div>
              <h2 className="luxury-heading">Youth Skills & Employment</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Youth unemployment is a critical challenge in Taita Taveta. Zyra Africa creates pathways to meaningful
                employment and entrepreneurship in the gemstone sector.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Gemstone Cutting & Polishing",
                    description: "Professional training in traditional and modern cutting techniques",
                  },
                  {
                    title: "Quality Assessment",
                    description: "Certified training in gemstone grading and evaluation",
                  },
                  {
                    title: "Business Development",
                    description: "Entrepreneurship training for those starting their own operations",
                  },
                  {
                    title: "Digital Skills",
                    description: "Marketing, e-commerce, and digital communication for modern markets",
                  },
                  {
                    title: "Mentorship Programs",
                    description: "One-on-one mentoring with experienced miners and business leaders",
                  },
                  {
                    title: "Employment Placement",
                    description: "Direct connections to mining cooperatives and international buyers",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section className="luxury-section bg-muted/30 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxury-heading text-center mb-12">Education & Community Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen size={32} />,
                title: "School Funding",
                description:
                  "We fund construction, repairs, and supplies for primary and secondary schools in mining communities. 15 schools have benefited so far.",
                stats: "$450,000+ invested",
              },
              {
                icon: <Heart size={32} />,
                title: "Healthcare Access",
                description:
                  "Mobile health clinics, maternal healthcare programs, and occupational health screening for miners and their families.",
                stats: "2,000+ people served",
              },
              {
                icon: <Zap size={32} />,
                title: "Infrastructure",
                description:
                  "Water wells, electricity access, and community centers that serve as hubs for training and social activities.",
                stats: "8 major projects",
              },
              {
                icon: <Users size={32} />,
                title: "Scholarship Program",
                description:
                  "Full scholarships for children of miners to attend secondary school and vocational training programs.",
                stats: "200+ students",
              },
              {
                icon: <Award size={32} />,
                title: "Vocational Training",
                description:
                  "Technical training centers offering courses in gemstone work, business, agriculture, and digital skills.",
                stats: "4 centers operating",
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Economic Empowerment",
                description:
                  "Microfinance access, cooperative development, and business training for miners and their families.",
                stats: "3,500+ beneficiaries",
              },
            ].map((program, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-8">
                <div className="text-primary mb-4">{program.icon}</div>
                <h3 className="font-serif text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">{program.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Purchases Create Impact */}
      <section className="luxury-section px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="luxury-heading text-center mb-12">Every Purchase Creates Impact</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            When you buy a gemstone from Zyra Africa, you're directly supporting:
          </p>
          <div className="space-y-6">
            {[
              {
                percentage: "60%",
                description: "Direct payment to miners and their families",
              },
              {
                percentage: "15%",
                description: "Community reinvestment (education, healthcare, infrastructure)",
              },
              {
                percentage: "10%",
                description: "Training and skills development programs",
              },
              {
                percentage: "10%",
                description: "Women and youth empowerment initiatives",
              },
              {
                percentage: "5%",
                description: "Operations and sustainability",
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-end justify-between mb-2">
                  <p className="font-semibold">{item.description}</p>
                  <span className="text-2xl font-serif font-semibold text-primary">{item.percentage}</span>
                </div>
                <div className="bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full"
                    style={{
                      width: item.percentage,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories & Testimonials */}
      <section className="luxury-section bg-primary text-primary-foreground px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12">Stories of Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Wangari Mwangangi",
                role: "Women's Cooperative Leader",
                story:
                  "Four years ago, I was mining alone without proper equipment. Now I lead a cooperative of 25 women. Zyra Africa helped us get better prices and training. I've sent two daughters to secondary school.",
                image: "bg-gradient-to-br from-emerald-200 to-emerald-100",
              },
              {
                name: "David Kipchoge",
                role: "Artisan Miner & Trainer",
                story:
                  "I learned gemstone grading through Zyra's program. Now I train other miners and earn commission. My income tripled. Zyra's support meant we could finally build a proper home.",
                image: "bg-gradient-to-br from-blue-200 to-blue-100",
              },
              {
                name: "Grace Mwendwa",
                role: "Youth Scholar",
                story:
                  "I received a Zyra scholarship and completed secondary school. Now I work in gemstone quality assessment and mentoring younger girls. I dream of opening my own business one day.",
                image: "bg-gradient-to-br from-pink-200 to-pink-100",
              },
            ].map((story, i) => (
              <div
                key={i}
                className="bg-primary-foreground/10 rounded-lg p-8 backdrop-blur-sm border border-primary-foreground/20"
              >
                <div className={`w-16 h-16 rounded-full ${story.image} mb-4`} />
                <h3 className="font-serif text-lg font-semibold mb-1">{story.name}</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">{story.role}</p>
                <p className="leading-relaxed">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="luxury-section px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="luxury-heading mb-6">Get Involved in Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Every purchase, partnership, and share of our story helps transform lives in Taita Taveta.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Shop",
                description: "Buy ethical gemstones and directly support our programs",
                cta: "Browse Collection",
              },
              {
                title: "Partner",
                description: "Join as a miner or mining cooperative",
                cta: "Partner With Us",
              },
              {
                title: "Support",
                description: "Corporate partnerships and sponsorships",
                cta: "Contact Us",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-serif text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-accent transition-colors">
                  {item.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
