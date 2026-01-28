'use client'

import Link from 'next/link'
import Image from 'next/image'
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
              <div className="relative w-48 h-12 md:w-48 md:h-14">
                <Image
                  src="/medsbee-logo 1.png"
                  alt="MedsBee Logo"
                  fill
                  className="object-contain"
                />
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
