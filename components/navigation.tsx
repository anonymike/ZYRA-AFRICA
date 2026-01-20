"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/icons/logo.jpeg"
              alt="Zyra Africa Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-serif text-lg font-semibold hidden sm:inline text-foreground">Zyra Africa</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/collection" className="text-sm hover:text-primary transition-colors">
              Collection
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/buyer-services" className="text-sm hover:text-primary transition-colors">
              Buyer Services
            </Link>
            <Link href="/miners" className="text-sm hover:text-primary transition-colors">
              For Miners
            </Link>
            <Link href="/impact" className="text-sm hover:text-primary transition-colors">
              Impact
            </Link>
            <Link href="/blog" className="text-sm hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="cta-button text-sm">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4">
            <Link href="/collection" className="block text-sm hover:text-primary">
              Collection
            </Link>
            <Link href="/about" className="block text-sm hover:text-primary">
              About
            </Link>
            <Link href="/buyer-services" className="block text-sm hover:text-primary">
              Buyer Services
            </Link>
            <Link href="/miners" className="block text-sm hover:text-primary">
              For Miners
            </Link>
            <Link href="/impact" className="block text-sm hover:text-primary">
              Impact
            </Link>
            <Link href="/blog" className="block text-sm hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="block cta-button text-sm">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
