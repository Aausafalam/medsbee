'use client'

import Link from 'next/link'
import Image from 'next/image'
import { footerData } from '@/data/footer'
import { Linkedin, Youtube, Instagram, MessageCircle, MessageCircleMore } from 'lucide-react'

export default function Footer() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return <Linkedin size={24} className="" />
      case 'youtube':
        return <Youtube size={24} className="" />
      case 'instagram':
        return <Instagram size={24} />
      case 'whatsapp':
        return <MessageCircleMore size={32} className="" />
      default:
        return null
    }
  }

  return (
    <footer className="bg-[#03152e] text-white pt-16 pb-8">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand & Description */}
          <div className="max-w-md space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-12">
                <Image
                  src="/medsbee-logo 1.png"
                  alt="MedsBee Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md">
              {footerData.description}
            </p>
          </div>

          {/* Social & Support */}
          <div className="flex flex-col items-end gap-8 text-right min-w-[200px]">
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Follow us on</h4>
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

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">{footerData.support.label}</h4>
              <Link
                href={footerData.support.href}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-secondary hover:border-secondary transition-all hover:-translate-y-1 ml-auto"
                aria-label="Contact via WhatsApp"
              >
                {getIcon(footerData.support.icon)}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-white/40">
          <p>{footerData.copyright}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerData.bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
