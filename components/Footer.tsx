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
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          {/* Brand Column */}
          <div className="max-w-md space-y-6">
            <Link href="/" className="flex items-center gap-3 font-bold text-2xl group">
              <div className="flex items-center gap-2">
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
              </div>
            </Link>
            <p className="text-lg text-white/60 leading-relaxed font-medium">
              {footerData.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-6">
              {footerData.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-white/40 hover:text-secondary transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  {getIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact / Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white">Follow us on</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-secondary transition-colors"><Twitter size={24} /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Youtube size={24} /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Facebook size={24} /></Link>
            </div>
            <div className="pt-8">
              <h3 className="font-bold text-xl text-white mb-2">For support</h3>
              <Link href="mailto:support@medsbee.com" className="text-white/60 hover:text-secondary flex items-center gap-2 transition-colors">
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">?</span>
                support@medsbee.com
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-widest">
          <p>© Copyright 2026</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="#" className="hover:text-white transition-colors">Enroll</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
