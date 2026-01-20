'use client'

import { useState } from 'react'
import { curriculumData } from '@/data/curriculum'
import { ChevronDown } from 'lucide-react'

export default function Curriculum() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section id="curriculum" className="py-20 md:py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-lg font-semibold text-primary mb-4 uppercase tracking-widest">{curriculumData.title}</p>
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
            Self-placed modules, watch anytime.
          </h2>
        </div>

        {/* Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side Illustration/Image */}
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-blue-50 rounded-full scale-110"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <svg width="300" height="300" viewBox="0 0 100 100" className="text-primary opacity-20">
                <rect x="20" y="20" width="60" height="50" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M40 35 L60 45 L40 55 Z" fill="currentColor" />
                <circle cx="50" cy="80" r="5" fill="currentColor" />
              </svg>
              {/* Floating icons */}
              <div className="absolute top-10 right-10 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-xl">💰</span>
              </div>
              <div className="absolute bottom-10 left-10 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-xl text-white">📈</span>
              </div>
            </div>
          </div>

          {/* Right side Accordion */}
          <div className="space-y-4">
            {curriculumData.modules.map((module) => (
              <div
                key={module.id}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${expandedId === module.id
                  ? 'ring-2 ring-primary shadow-xl bg-blue-50'
                  : 'border border-gray-100 bg-white hover:border-blue-200'
                  }`}
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === module.id ? null : module.id)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  aria-expanded={expandedId === module.id}
                >
                  <span className={`text-xl font-bold transition-colors ${expandedId === module.id ? 'text-primary' : 'text-gray-700'
                    }`}>
                    {module.title}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${expandedId === module.id ? 'bg-primary text-white' : 'bg-secondary text-primary'
                    }`}>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${expandedId === module.id ? 'rotate-180' : ''
                        }`}
                    />
                  </div>
                </button>

                {expandedId === module.id && (
                  <div className="px-8 pb-6 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">
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
