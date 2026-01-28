'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { headerData } from '@/data/header'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 font-bold text-2xl group">
          <div className="relative w-40 h-12 md:w-40 md:h-12">
            <Image
              src="/medsbee-logo 1.png"
              alt="MedsBee Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {headerData.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href={headerData.cta.href}
            className="bg-secondary text-primary px-8 py-2.5 rounded-full font-bold hover:bg-yellow-400 transition-all hover:shadow-lg active:scale-95 text-sm"
          >
            {headerData.cta.label}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-primary-foreground/20 bg-primary px-4 py-4">
          <div className="flex flex-col gap-4">
            {headerData.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={headerData.cta.href}
              className="bg-secondary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              {headerData.cta.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
