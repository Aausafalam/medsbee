'use client'

import { roadmapData } from '@/data/roadmap'

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-8 md:py-14 bg-[#F7F9FC] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-2 md:px-4">
        {/* Section Header */}
        <div className="max-w-4xl mb-4 md:mb-8 text-left px-2">
          <p className="text-[9px] md:text-xs font-bold text-[#b4862a] mb-1 md:mb-3 uppercase tracking-[0.2em] font-sans">
            {roadmapData.title}
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#071324] leading-normal md:leading-[1.1] tracking-normal font-bold">
            {roadmapData.subtitle}
          </h2>
        </div>

        {/* Highlight Box */}
        <div className="bg-[#FFFCF0] border-l-[3px] md:border-l-[3.5px] border-[#b4862a] p-4 rounded-r-xl md:rounded-r-2xl mb-5 md:mb-8 shadow-sm mx-2">
          <p className="text-xs md:text-lg text-[#5C4033] font-medium leading-relaxed font-sans">
            {roadmapData.intro}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {roadmapData.features.slice(0, 3).map((feature) => (
            <div
              key={feature.id}
              className="bg-white border  border-[#E8ECF4] hover:shadow-lg p-4 md:p-6 rounded-2xl md:rounded-[1rem] shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex flex-col items-start transition-all duration-300 hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-2 md:mb-4 text-xl md:text-3xl">
                {feature.icon}
              </div>
              <h3 className="font-bold text-[#071324] mb-1 md:mb-2 text-[0.8rem] md:text-xl font-sans tracking-tight leading-snug">
                {feature.title}
              </h3>
              <p className="text-[10px] md:text-sm text-gray-500/90 leading-normal md:leading-relaxed font-sans font-medium">
                {feature.description}
              </p>
            </div>
          ))}
          {/* Second Row items */}
          {roadmapData.features.slice(3).map((feature) => (
            <div
              key={feature.id}
              className={`bg-white border  border-[#E8ECF4] hover:shadow-lg  p-4 md:p-6 rounded-2xl md:rounded-[1rem] shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex flex-col items-start transition-all duration-300 hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] ${feature.id === 5 ? 'col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="mb-2 md:mb-4 text-xl md:text-3xl">
                {feature.icon}
              </div>
              <h3 className="font-bold text-[#071324] mb-1 md:mb-2 text-[0.8rem] md:text-xl font-sans tracking-tight leading-snug">
                {feature.title}
              </h3>
              <p className="text-[10px] md:text-sm text-gray-500/90 leading-normal md:leading-relaxed font-sans font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
