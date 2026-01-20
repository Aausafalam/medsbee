'use client'

import { featuresData } from '@/data/features'

export default function Features() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {featuresData.title}
            <br />
            <span className="text-secondary">{featuresData.highlightedText}</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuresData.features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-secondary hover:shadow-lg transition-all group"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
