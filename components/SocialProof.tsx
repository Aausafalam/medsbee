'use client'

import Image from 'next/image'
import Link from 'next/link'
import { socialProofData } from '@/data/socialProof'
import { Play } from 'lucide-react'

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header with Title and Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-lg font-semibold text-primary mb-4 uppercase tracking-widest">{socialProofData.title}</p>
              <h2 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight">
                {socialProofData.titleHighlight}
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all px-8 py-3 rounded-full text-lg group">
                <Play size={20} className="fill-current" />
                {socialProofData.playVideoLabel}
              </button>
              <Link
                href={socialProofData.cta.href}
                className="bg-secondary text-primary px-10 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all text-center text-lg hover:shadow-lg active:scale-95"
              >
                {socialProofData.cta.label}
              </Link>
            </div>
          </div>

          {/* Doctor Testimonials Carousel/Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {socialProofData.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-4 shadow-md transition-all group-hover:shadow-xl group-hover:-translate-y-2">
                  <Image
                    src={testimonial.image || '/placeholder.svg'}
                    alt={testimonial.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Info Overlay (Bottom) */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="font-bold text-white text-lg leading-tight">{testimonial.name}</h3>
                    <p className="text-xs text-white/70">{testimonial.handle}</p>
                    <p className="text-[10px] text-secondary font-bold uppercase mt-1 tracking-wider">{testimonial.followers}</p>
                  </div>

                  {/* Play Icon Overlay (Center) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                      <Play size={24} className="text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
