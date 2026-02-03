import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - Zyra Africa",
  description: "Terms of service for Zyra Africa gemstone marketplace",
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-invert max-w-none text-foreground/90 space-y-6">
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Agreement to Terms
              </h2>
              <p>
                By accessing and using the Zyra Africa website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Zyra Africa's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Disclaimer
              </h2>
              <p>
                The materials on Zyra Africa's website are provided on an 'as is' basis. Zyra Africa makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Limitations
              </h2>
              <p>
                In no event shall Zyra Africa or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zyra Africa's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Accuracy of Materials
              </h2>
              <p>
                The materials appearing on Zyra Africa's website could include technical, typographical, or photographic errors. Zyra Africa does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Links
              </h2>
              <p>
                Zyra Africa has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zyra Africa of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Modifications
              </h2>
              <p>
                Zyra Africa may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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
