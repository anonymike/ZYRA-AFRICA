import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/icons/logo.jpeg"
                alt="Zyra Africa Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-serif text-lg font-semibold text-foreground">Zyra Africa</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium ethical gemstones directly from artisanal miners in Taita Taveta, Kenya.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-foreground">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/collection" className="hover:text-primary transition-colors">
                  All Gemstones
                </Link>
              </li>
              <li>
                <Link href="/collection?type=tsavorite" className="hover:text-primary transition-colors">
                  Tsavorite
                </Link>
              </li>
              <li>
                <Link href="/collection?type=ruby" className="hover:text-primary transition-colors">
                  Ruby
                </Link>
              </li>
              <li>
                <Link href="/collection?type=sapphire" className="hover:text-primary transition-colors">
                  Sapphire
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-primary transition-colors">
                  Impact Programs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Zyra Africa. All rights reserved. Sourced and certified in Kenya.
          </p>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Curated with ❤️ by{" "}
            <a
              href="https://anonymiketech.online"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-semibold"
            >
              ANONYMIKETECHS
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
