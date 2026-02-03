import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Cookie Policy - Zyra Africa",
  description: "Cookie policy for Zyra Africa gemstone marketplace",
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
            Cookie Policy
          </h1>
          <div className="prose prose-invert max-w-none text-foreground/90 space-y-6">
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                What Are Cookies?
              </h2>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. They help us remember your preferences and improve your browsing experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Types of Cookies We Use
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our site</li>
                <li><strong>Marketing Cookies:</strong> Used to track advertising effectiveness</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Your Cookie Choices
              </h2>
              <p>
                You can control and manage cookies in your browser settings. However, disabling cookies may affect website functionality and your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Third-Party Cookies
              </h2>
              <p>
                We may allow third-party service providers to place cookies on your device for analytics and advertising purposes. These providers have their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Updates to This Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time. We encourage you to review this policy periodically to stay informed about how we protect your privacy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions about our use of cookies, please contact us at:
                <br />
                Email: privacy@zyra-africa.com
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
