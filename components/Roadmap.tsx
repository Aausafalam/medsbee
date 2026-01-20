'use client'

import Image from 'next/image'
import { roadmapData } from '@/data/roadmap'

export default function Roadmap() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-lg font-semibold text-primary mb-4 uppercase tracking-widest">{roadmapData.title}</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight">
            {roadmapData.subtitle}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[600px] group">
            <div className="absolute inset-0 bg-secondary/10 rounded-3xl -rotate-3 transition-transform group-hover:rotate-0"></div>
            <Image
              src={roadmapData.image.src || "/placeholder.svg"}
              alt={roadmapData.image.alt}
              fill
              className="object-cover rounded-3xl shadow-2xl relative z-10"
            />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {roadmapData.features.map((feature) => (
              <div
                key={feature.id}
                className="relative group"
              >
                <div className="text-5xl mb-6 transition-transform group-hover:scale-110">{feature.icon}</div>
                <h3 className="font-bold text-primary mb-3 text-2xl leading-tight">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
