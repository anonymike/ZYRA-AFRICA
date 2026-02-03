"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, TrendingUp, Heart, Zap, CheckCircle, Mail, ChevronDown, Globe } from "lucide-react"

export default function MinersPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-gradient-to-br from-muted/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="luxury-heading">Partner With Zyra Africa</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Fair compensation, market access, and community support for artisanal miners and mining cooperatives in
            Taita Taveta.
          </p>
          <a href="#registration" className="cta-button inline-flex items-center gap-2">
            Join Our Network
            <Zap size={18} />
          </a>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="luxury-section px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxury-heading text-center mb-12">Why Join Zyra Africa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp size={32} />,
                title: "Fair Market Pricing",
                description:
                  "We pay competitive rates at or above international market prices. No middlemen, no exploitation.",
              },
              {
                icon: <Globe size={24} />,
                title: "Direct Market Access",
                description:
                  "Sell directly to global buyers. Your gemstones reach customers in 150+ countries with full traceability.",
              },
              {
                icon: <Heart size={32} />,
                title: "Transparent Partnerships",
                description:
                  "Know exactly where your gemstones are sold, to whom, and for how much. Full supply chain visibility.",
              },
              {
                icon: <Users size={32} />,
                title: "Training & Skills",
                description:
                  "Access technical training, business skills workshops, and market information to improve your mining practice.",
              },
              {
                icon: <Zap size={32} />,
                title: "Infrastructure Support",
                description:
                  "Help with equipment, sorting facilities, and quality control tools to improve productivity and standards.",
              },
              {
                icon: <Heart className="text-pink-500" size={32} />,
                title: "Community Programs",
                description:
                  "Your partnership funds education, healthcare, and empowerment programs in your community.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-8">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Miner Benefits */}
      <section className="luxury-section bg-muted/30 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="luxury-heading">Direct Benefits for Mining Partners</h2>
              <p className="text-lg text-muted-foreground mb-8">
                When you partner with Zyra Africa, you and your community benefit from:
              </p>
              <ul className="space-y-4">
                {[
                  "Premium pricing for quality gemstones",
                  "Immediate payment upon delivery and verification",
                  "Technical training on sustainable mining practices",
                  "Access to quality control and grading education",
                  "Documentation and certification for your gemstones",
                  "Business management and cooperative skills training",
                  "Healthcare and education fund contributions",
                  "Women and youth empowerment program access",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg p-12 aspect-square flex items-center justify-center">
              <div className="text-center">
                <Users size={64} className="text-primary mx-auto mb-4" />
                <p className="font-serif text-2xl font-semibold">Community First</p>
                <p className="text-muted-foreground mt-2">Partnerships that matter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration" className="luxury-section px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="luxury-heading text-center mb-4">Miner Registration</h2>
          <p className="text-center text-muted-foreground mb-12">
            Join our network of ethical mining partners. Registration is free and confidential.
          </p>

          <form className="bg-card border border-border rounded-lg p-8 space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Contact Phone *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+254..."
                />
              </div>
            </div>

            {/* Email & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Location/Sublocation *</label>
                <select className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select your area in Taita Taveta...</option>
                  <option>Mtongwe</option>
                  <option>Bura</option>
                  <option>Voi</option>
                  <option>Werugha</option>
                  <option>Mwatate</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Mining Experience */}
            <div>
              <label className="block text-sm font-semibold mb-2">Years of Mining Experience *</label>
              <input
                type="number"
                required
                min="0"
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Years"
              />
            </div>

            {/* Miner Type */}
            <div>
              <label className="block text-sm font-semibold mb-3">Type of Mining Operation *</label>
              <div className="space-y-2">
                {["Individual miner", "Mining cooperative/group", "Artisan group", "Other"].map((type) => (
                  <label key={type} className="flex items-center gap-3">
                    <input type="radio" name="minerType" value={type} className="rounded" />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Gemstone Types */}
            <div>
              <label className="block text-sm font-semibold mb-3">Gemstones You Mine (select all) *</label>
              <div className="grid grid-cols-2 gap-3">
                {["Tsavorite", "Ruby", "Tourmaline", "Sapphire", "Rhodolite", "Spinel"].map((stone) => (
                  <label key={stone} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">{stone}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Monthly Output */}
            <div>
              <label className="block text-sm font-semibold mb-2">Approximate Monthly Output (carats) *</label>
              <input
                type="number"
                required
                min="0"
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Approximate carats per month"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">Additional Information</label>
              <textarea
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
                placeholder="Tell us about your mining operation, goals, and what you're looking for in a partnership..."
              />
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3">
              <input type="checkbox" required className="mt-1" />
              <span className="text-sm">
                I agree to partner with Zyra Africa under the terms of ethical sourcing, fair trade practices, and
                community commitment. I understand my information will be kept confidential.
              </span>
            </label>

            {/* Submit */}
            <button type="submit" className="w-full cta-button flex items-center justify-center gap-2 text-lg">
              <Mail size={20} />
              Submit Registration
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Once submitted, we'll contact you within 48 hours to discuss partnership opportunities.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="luxury-section bg-muted/30 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="luxury-heading text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does the registration process take?",
                a: "Registration is instant online, and our team contacts you within 48 hours to begin partnership discussions and verification.",
              },
              {
                q: "What is the minimum monthly production to partner with you?",
                a: "We partner with miners of all scales, from individual artisans (50+ carats/month) to large cooperatives. Quality and ethics matter more than volume.",
              },
              {
                q: "How are prices determined?",
                a: "We use international market benchmarks plus a fair-trade premium. Prices are transparent and communicated upfront for each gemstone.",
              },
              {
                q: "How quickly do I get paid?",
                a: "Payment is made within 3-5 business days of gemstone verification and quality assessment.",
              },
              {
                q: "Can cooperatives register together?",
                a: "Yes! We encourage cooperative registration. We can support group registrations with simplified processes for multiple miners.",
              },
              {
                q: "What training programs are available?",
                a: "We offer technical mining training, gemstone grading, business skills, sustainable practices, and women's leadership programs.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
                >
                  <h3 className="font-semibold text-left">{faq.q}</h3>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 transition-transform ${expandedFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="px-6 py-4 border-t border-border bg-muted/10">
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
