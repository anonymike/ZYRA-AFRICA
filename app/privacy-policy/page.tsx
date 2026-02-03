import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - Zyra Africa",
  description: "Privacy policy for Zyra Africa gemstone marketplace",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert max-w-none text-foreground/90 space-y-6">
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Introduction
              </h2>
              <p>
                Zyra Africa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Information We Collect
              </h2>
              <p>We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal data you voluntarily submit (name, email, phone number)</li>
                <li>Information collected automatically through cookies and tracking technologies</li>
                <li>Data about your interactions with our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Respond to your inquiries and customer support requests</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at privacy@zyra-africa.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@zyra-africa.com
                <br />
                Address: Taita Taveta County, Kenya
              </p>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm text-foreground/70">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
