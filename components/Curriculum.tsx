'use client'

import { useState } from 'react'
import Image from 'next/image'
import { curriculumData } from '@/data/curriculum'
import { ChevronDown } from 'lucide-react'

export default function Curriculum() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section id="curriculum" className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-base font-semibold text-primary mb-3 uppercase tracking-widest">{curriculumData.title}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
            Self-placed modules, watch anytime.
          </h2>
        </div>

        {/* Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side Illustration/Image */}
          <div className="relative h-[350px] md:h-[500px] group">
            <div className="absolute inset-x-4 -inset-y-4 bg-primary/5 rounded-3xl rotate-2 transition-transform group-hover:rotate-0"></div>
            <Image
              src={curriculumData.image.src || "/placeholder.svg"}
              alt={curriculumData.image.alt}
              fill
              className="object-cover rounded-3xl shadow-xl relative z-10"
              priority
            />
          </div>

          {/* Right side Accordion */}
          <div className="space-y-3">
            {curriculumData.modules.map((module) => (
              <div
                key={module.id}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${expandedId === module.id
                  ? 'ring-1 ring-primary shadow-lg bg-blue-50/50'
                  : 'border border-gray-100 bg-white hover:border-blue-200'
                  }`}
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === module.id ? null : module.id)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between text-left group"
                  aria-expanded={expandedId === module.id}
                >
                  <span className={`text-lg font-bold transition-colors ${expandedId === module.id ? 'text-primary' : 'text-gray-700'
                    }`}>
                    {module.title}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${expandedId === module.id ? 'bg-primary text-white' : 'bg-secondary text-primary'
                    }`}>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${expandedId === module.id ? 'rotate-180' : ''
                        }`}
                    />
                  </div>
                </button>

                {expandedId === module.id && (
                  <div className="px-6 pb-4 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-gray-600 leading-relaxed text-sm font-medium">
                      {module.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
