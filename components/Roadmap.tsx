'use client'

import Image from 'next/image'
import { roadmapData } from '@/data/roadmap'
import * as Icons from 'lucide-react'

export default function Roadmap() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-base font-semibold text-primary mb-3 uppercase tracking-widest">{roadmapData.title}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
            {roadmapData.subtitle}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative h-[350px] md:h-[500px] group">
            <div className="absolute inset-x-4 -inset-y-4 bg-secondary/10 rounded-3xl -rotate-2 transition-transform group-hover:rotate-0"></div>
            <Image
              src={roadmapData.image.src || "/placeholder.svg"}
              alt={roadmapData.image.alt}
              fill
              className="object-cover rounded-3xl shadow-xl relative z-10"
              priority
            />
          </div>

          {/* Features Grid - More compact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {roadmapData.features.map((feature) => {
              const IconComponent = (Icons as any)[feature.icon] || Icons.HelpCircle
              return (
                <div
                  key={feature.id}
                  className="relative group flex flex-col items-start"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/5 rounded-2xl mb-4 transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <IconComponent size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-primary mb-2 text-xl leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
