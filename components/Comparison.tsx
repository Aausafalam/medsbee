'use client'

import { comparisonData } from '@/data/comparison'
import { Check } from 'lucide-react'

export default function Comparison() {
  return (
    <section className="py-10 pt-20 md:pb-12 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Comparison Table - Desktop */}
        <div className="overflow-x-auto shadow-xl rounded-[1.5rem] md:rounded-[2rem] border border-blue-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-blue-100">
                <th className="py-4 px-6 md:py-6 md:px-8 font-extrabold text-primary text-lg md:text-xl">
                  Feature
                </th>
                <th className="py-4 px-6 md:py-6 md:px-8 font-bold text-primary text-sm md:text-base text-center bg-blue-50/30">
                  Basic Video Plan
                </th>
                <th className="py-4 px-6 md:py-6 md:px-8 font-bold text-primary text-sm md:text-base text-center bg-blue-50/50">
                  Standard Learning Plan
                </th>
                <th className="py-4 px-6 md:py-6 md:px-8 font-bold text-primary text-sm md:text-base text-center bg-blue-50/80">
                  Premium In Advantage Plan
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonData.features.map((feature) => (
                <tr
                  key={feature.id}
                  className="hover:bg-blue-50/20 transition-colors"
                >
                  <td className="py-3 px-6 md:py-4 md:px-8 font-bold text-primary text-xs md:text-sm">
                    {feature.name}
                  </td>
                  <td className="py-3 px-6 md:py-4 md:px-8 text-center bg-blue-50/30">
                    <div className="flex justify-center items-center gap-2">
                      <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${feature.basic === '✓' ? 'text-green-600' : 'text-red-500'}`}>
                        {feature.basic === '✓' ? (
                          <span className="flex items-center gap-1"><Check size={14} strokeWidth={4} /> Included</span>
                        ) : (
                          <span className="flex items-center gap-1 font-extrabold rotate-45 text-lg">+</span>
                        )}
                        {feature.basic !== '✓' && feature.basic !== '✗' && feature.basic}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 md:py-4 md:px-8 text-center bg-blue-50/50">
                    <div className="flex justify-center items-center gap-2">
                      <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${feature.pro === '✓' ? 'text-green-600' : 'text-blue-600'}`}>
                        {feature.pro === '✓' ? (
                          <span className="flex items-center gap-1"><Check size={14} strokeWidth={4} /> Included</span>
                        ) : feature.pro === '✗' ? (
                          <span className="flex items-center gap-1 text-red-500 font-extrabold rotate-45 text-lg">+</span>
                        ) : (
                          feature.pro
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 md:py-4 md:px-8 text-center bg-blue-50/80">
                    <div className="flex justify-center items-center gap-2">
                      <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${feature.premium === '✓' ? 'text-green-600' : 'text-blue-700'}`}>
                        {feature.premium === '✓' ? (
                          <span className="flex items-center gap-1"><Check size={14} strokeWidth={4} /> Included</span>
                        ) : (
                          feature.premium
                        )}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
