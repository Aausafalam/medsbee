'use client'

import Link from 'next/link'
import { footerData } from '@/data/footer'
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook':
        return <Facebook size={20} />
      case 'twitter':
        return <Twitter size={20} />
      case 'linkedin':
        return <Linkedin size={20} />
      case 'youtube':
        return <Youtube size={20} />
      default:
        return null
    }
  }

  return (
    <footer className="bg-[#0a192f] text-white py-12 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 md:mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl group">
              <svg
                width="32"
                height="32"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-secondary"
              >
                <path
                  d="M14 3C10 3 7 6 7 10c0 4 7 11 7 11s7-7 7-11c0-4-3-7-7-7z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
                <path d="M14 10v8" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="18" cy="10" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <div className="flex items-baseline">
                <span className="text-white font-bold tracking-tight">Meds</span>
                <span className="text-secondary font-bold italic ml-0.5">Bee</span>
              </div>
            </Link>
            <p className="text-sm text-blue-100/60 leading-relaxed font-medium">
              {footerData.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {footerData.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-secondary hover:border-secondary transition-all hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {getIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerData.sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="font-bold text-base text-white tracking-widest uppercase">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-blue-100/60 hover:text-secondary transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest text-blue-100/40">
          <p>{footerData.copyright}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-secondary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
