'use client'

import Image from 'next/image'
import { roadmapData } from '@/data/roadmap'
import * as Icons from 'lucide-react'

export default function Roadmap() {
  return (
    <section id="roadmap" className="pb-12 md:pb-16   bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-xs md:text-base font-semibold text-primary mb-2 md:mb-3 uppercase tracking-widest">{roadmapData.title}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
            {roadmapData.subtitle}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative h-[350px] md:h-[500px] group hidden md:block">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10">
            {roadmapData.features.map((feature) => {
              const IconComponent = (Icons as any)[feature.icon] || Icons.HelpCircle
              return (
                <div
                  key={feature.id}
                  className="relative group flex flex-col items-start"
                >
                  <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-primary/5 rounded-xl md:rounded-2xl mb-2 md:mb-4 transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <IconComponent className="w-4.5 h-4.5 md:w-6 md:h-6" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-semibold md:font-bold text-primary mb-2 text-lg md:text-lg leading-tight">
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
