import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="luxury-heading">Get in Touch</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have questions? Want to partner with us? Let's connect and explore how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="luxury-section px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: <Mail size={24} />,
                  title: "Email",
                  content: "hello@zyra-africa.com",
                  subtext: "Responses within 24 hours",
                },
                {
                  icon: <Phone size={24} />,
                  title: "Phone",
                  content: "+254 (0) 722 123 456",
                  subtext: "Mon–Fri, 9 AM–5 PM EAT",
                },
                {
                  icon: <MapPin size={24} />,
                  title: "Headquarters",
                  content: "Nairobi, Kenya",
                  subtext: "With operations in Taita Taveta",
                },
                {
                  icon: <Clock size={24} />,
                  title: "Hours",
                  content: "Monday – Friday",
                  subtext: "9:00 AM – 5:00 PM EAT",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-primary flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="font-serif text-lg mb-1">{item.content}</p>
                    <p className="text-sm text-muted-foreground">{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="bg-card border border-border rounded-lg p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject *</label>
                  <select className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select a subject...</option>
                    <option>Buyer Inquiry</option>
                    <option>Miner Partnership</option>
                    <option>Wholesale Interest</option>
                    <option>Certification Question</option>
                    <option>Community Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button type="submit" className="w-full cta-button flex items-center justify-center gap-2 text-lg">
                  <Send size={20} />
                  Send Message
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll respond to your message within 24 business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="luxury-section bg-muted/30 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="luxury-heading text-center mb-12">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "How do I buy gemstones?",
                a: "Browse our collection, select your stones, and proceed to checkout with secure payment options.",
              },
              {
                q: "What's your return policy?",
                a: "30-day money-back guarantee on all purchases. Free shipping for returns.",
              },
              {
                q: "Can I get certification?",
                a: "Yes, optional GIA, AGS, or IGI certification available for all gemstones.",
              },
              {
                q: "Do you offer wholesale pricing?",
                a: "Yes, volume discounts and wholesale partnerships available. Contact our team for details.",
              },
              {
                q: "How are gemstones sourced?",
                a: "Directly from registered artisanal miners in Taita Taveta with complete traceability.",
              },
              {
                q: "Can I visit your operations?",
                a: "Yes! Educational visits to mining sites and our offices can be arranged. Contact us.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
