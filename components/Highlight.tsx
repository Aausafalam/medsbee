'use client'

import Image from 'next/image'
import Link from 'next/link'
import { highlightData } from '@/data/highlight'

export default function Highlight() {
  return (
    <section className="bg-primary text-white py-12 md:py-16 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                {highlightData.title}
              </h2>
              <p className="text-xl md:text-2xl text-secondary font-medium italic">
                {highlightData.subtitle}
              </p>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-white/80 font-medium">
              Our proven framework has helped thousands of medical professionals
              build financial security and achieve their wealth goals. Join our
              community of successful doctors who are mastering their finances.
            </p>
            <div className="pt-4">
              <Link
                href="#pricing"
                className="inline-block bg-secondary text-primary px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all hover:scale-105"
              >
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] order-1 md:order-2">
            <div className="absolute inset-0 border-2 border-secondary/30 rounded-3xl translate-x-4 translate-y-4"></div>
            <Image
              src={highlightData.image.src || "/placeholder.svg"}
              alt={highlightData.image.alt}
              fill
              className="object-cover rounded-3xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
