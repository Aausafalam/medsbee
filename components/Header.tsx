'use client'

import { useState } from 'react'
import Link from 'next/link'
import { headerData } from '@/data/header'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 font-bold text-2xl group">
          <div className="flex items-center gap-2">
            {/* Stethoscope icon forming heart shape */}
            <div className="relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-secondary group-hover:scale-110 transition-transform"
              >
                <path
                  d="M14 3C10 3 7 6 7 10c0 4 7 11 7 11s7-7 7-11c0-4-3-7-7-7z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="currentColor"
                  fillOpacity="0.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 10v8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="18" cy="10" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            {/* Logo text */}
            <div className="flex items-baseline">
              <span className="text-white font-bold tracking-tight">Meds</span>
              <span className="text-secondary font-bold italic ml-0.5">Bee</span>
              <div className="w-1.5 h-1.5 rounded-full bg-secondary ml-1 self-center"></div>
            </div>
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
