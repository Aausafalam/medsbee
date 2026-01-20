'use client'

import { comparisonData } from '@/data/comparison'
import { Check } from 'lucide-react'

export default function Comparison() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Comparison Table - Desktop */}
        <div className="overflow-x-auto shadow-2xl rounded-[2rem] border border-blue-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-blue-100">
                <th className="py-8 px-8 font-extrabold text-primary text-2xl">
                  Feature
                </th>
                <th className="py-8 px-8 font-bold text-primary text-lg text-center bg-blue-50/30">
                  Basic Video Plan
                </th>
                <th className="py-8 px-8 font-bold text-primary text-lg text-center bg-blue-50/50">
                  Standard Learning Plan
                </th>
                <th className="py-8 px-8 font-bold text-primary text-lg text-center bg-blue-50/80">
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
                  <td className="py-6 px-8 font-bold text-primary text-base">
                    {feature.name}
                  </td>
                  <td className="py-6 px-8 text-center bg-blue-50/30">
                    <div className="flex justify-center items-center gap-2">
                      <span className={`text-sm font-bold uppercase tracking-wider ${feature.basic === '✓' ? 'text-green-600' : 'text-red-500'}`}>
                        {feature.basic === '✓' ? (
                          <span className="flex items-center gap-1"><Check size={16} strokeWidth={4} /> Included</span>
                        ) : (
                          <span className="flex items-center gap-1 font-extrabold rotate-45 text-xl line-clamp-1">+</span>
                        )}
                        {feature.basic !== '✓' && feature.basic !== '✗' && feature.basic}
                      </span>
                    </div>
                  </td>
                  <td className="py-6 px-8 text-center bg-blue-50/50">
                    <div className="flex justify-center items-center gap-2">
                      <span className={`text-sm font-bold uppercase tracking-wider ${feature.pro === '✓' ? 'text-green-600' : 'text-blue-600'}`}>
                        {feature.pro === '✓' ? (
                          <span className="flex items-center gap-1"><Check size={16} strokeWidth={4} /> Included</span>
                        ) : feature.pro === '✗' ? (
                          <span className="flex items-center gap-1 text-red-500 font-extrabold rotate-45 text-xl">+</span>
                        ) : (
                          feature.pro
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="py-6 px-8 text-center bg-blue-50/80">
                    <div className="flex justify-center items-center gap-2">
                      <span className={`text-sm font-bold uppercase tracking-wider ${feature.premium === '✓' ? 'text-green-600' : 'text-blue-700'}`}>
                        {feature.premium === '✓' ? (
                          <span className="flex items-center gap-1"><Check size={16} strokeWidth={4} /> Included</span>
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
