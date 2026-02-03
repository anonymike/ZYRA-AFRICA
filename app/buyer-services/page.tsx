import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Globe, Shield, Award, Truck, Clock, Lock, CheckCircle, FileText } from "lucide-react"

export default function BuyerServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="luxury-heading">Premium Buyer Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive support for global buyers—from selection to delivery, certification to care instructions.
          </p>
        </div>
      </section>

      {/* Shipping & Logistics */}
      <section className="luxury-section bg-muted/30 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="luxury-heading">Worldwide DHL Shipping</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                All gemstones are shipped via DHL Express with full insurance, tracking, and professional packaging. We
                ensure your precious stones arrive safe, secure, and on time.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Truck size={24} />, title: "Express Delivery", desc: "2-3 business days to most countries" },
                  { icon: <Lock size={24} />, title: "Full Insurance", desc: "100% value coverage included" },
                  {
                    icon: <Globe size={24} />,
                    title: "Real-Time Tracking",
                    desc: "Live tracking from Kenya to your door",
                  },
                  {
                    icon: <Shield size={24} />,
                    title: "Secure Packaging",
                    desc: "Professional gemstone-grade packaging",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-primary flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-96">
              <Image
                src="/assets/icons/global-shipping.jpg"
                alt="Global shipping network and logistics"
                fill
                className="object-cover"
                quality={95}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certification & Grading */}
      <section className="luxury-section px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxury-heading text-center mb-12">Lab Certification & Grading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <Award className="text-primary mb-4" size={32} />
              <h3 className="font-serif text-2xl font-semibold mb-4">Optional Certification</h3>
              <p className="text-muted-foreground mb-6">
                All gemstones can be certified by leading international labs:
              </p>
              <ul className="space-y-3">
                {[
                  "GIA (Gemological Institute of America)",
                  "AGS (American Gem Society)",
                  "IGI (International Gemological Institute)",
                ].map((lab) => (
                  <li key={lab} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{lab}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <FileText className="text-primary mb-4" size={32} />
              <h3 className="font-serif text-2xl font-semibold mb-4">What's Included</h3>
              <p className="text-muted-foreground mb-6">Every certified gemstone comes with:</p>
              <ul className="space-y-3">
                {[
                  "Complete 4Cs grading (Color, Clarity, Cut, Carat)",
                  "Photomicrographs and UV analysis",
                  "Treatment disclosure",
                  "Permanent laser inscription (optional)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ordering Process */}
      <section className="luxury-section bg-muted/30 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxury-heading text-center mb-12">Simple Ordering Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Browse & Select",
                description: "Explore our collection and filter by your preferences",
              },
              {
                step: "2",
                title: "Request Details",
                description: "Get high-resolution photos and detailed specifications",
              },
              {
                step: "3",
                title: "Secure Payment",
                description: "Multiple payment options with buyer protection",
              },
              {
                step: "4",
                title: "Ship & Receive",
                description: "Track your gemstone with full insurance to your door",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-serif font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services */}
      <section className="luxury-section px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxury-heading text-center mb-12">Custom & Wholesale Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Orders",
                description:
                  "Looking for specific gemstone specifications? We can source custom pieces based on your requirements.",
                features: [
                  "Custom color/size sourcing",
                  "Private collection viewings",
                  "Expert consultations",
                  "Rush orders available",
                ],
              },
              {
                title: "Wholesale Partnerships",
                description: "Establish long-term partnerships with volume pricing and dedicated account management.",
                features: [
                  "Bulk discounts",
                  "Flexible payment terms",
                  "Priority access to new stones",
                  "Custom packaging options",
                ],
              },
              {
                title: "Trade & Estate Buyers",
                description: "Professional support for jewelry designers, retailers, and estate buyers.",
                features: [
                  "Certification assistance",
                  "Market pricing guidance",
                  "Confidentiality agreements",
                  "Professional networking",
                ],
              },
            ].map((service, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-serif text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gemstone Care */}
      <section className="luxury-section bg-primary text-primary-foreground px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12">Caring for Your Gemstones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Cleaning",
                tips: [
                  "Gentle soap and warm water with soft brush",
                  "Avoid ultrasonic cleaners for soft stones",
                  "Pat dry with soft lint-free cloth",
                  "Professional cleaning annually recommended",
                ],
              },
              {
                title: "Storage",
                tips: [
                  "Store in individual soft pouches",
                  "Keep away from heat and direct sunlight",
                  "Avoid exposure to chemicals and perfumes",
                  "Use padded jewelry boxes for security",
                ],
              },
              {
                title: "Wearing",
                tips: [
                  "Remove during physical activities",
                  "Avoid exposure to extreme temperatures",
                  "Protect from impacts and scratches",
                  "Professional maintenance every 5 years",
                ],
              },
              {
                title: "Insurance",
                tips: [
                  "Get appraisal for insurance purposes",
                  "Keep certification documents safe",
                  "Document with photos for records",
                  "Update coverage as needed",
                ],
              },
            ].map((section, i) => (
              <div key={i}>
                <h3 className="text-xl font-serif font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="luxury-section px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxury-heading text-center mb-12">Buyer Protection Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={32} />,
                title: "Money-Back Guarantee",
                description: "30-day money-back guarantee if you're not completely satisfied with your purchase.",
              },
              {
                icon: <Lock size={32} />,
                title: "Authenticity Guarantee",
                description:
                  "All gemstones are guaranteed authentic and as described. Certified stones come with lab verification.",
              },
              {
                icon: <Clock size={32} />,
                title: "Delivery Guarantee",
                description:
                  "On-time delivery guaranteed or shipping costs refunded. Full insurance covers loss or damage.",
              },
            ].map((policy, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4 text-primary">{policy.icon}</div>
                <h3 className="font-serif text-lg font-semibold mb-3">{policy.title}</h3>
                <p className="text-muted-foreground">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="luxury-section bg-secondary px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions? Our team is ready to help you find the perfect gemstone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded font-semibold hover:bg-accent transition-colors">
              Browse Collection
            </button>
            <button className="px-8 py-4 border-2 border-primary rounded font-semibold hover:bg-primary/10 transition-colors">
              Contact Specialist
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
