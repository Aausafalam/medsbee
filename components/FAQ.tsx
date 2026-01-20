'use client'

import { useState } from 'react'
import { faqData } from '@/data/faq'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="faqs" className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 md:mb-24">
          <p className="text-lg font-semibold text-primary mb-4 uppercase tracking-widest">{faqData.title}</p>
          <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqData.faqs.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${expandedId === faq.id
                ? 'ring-2 ring-primary shadow-lg'
                : 'border border-gray-100 hover:border-blue-200'
                }`}
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === faq.id ? null : faq.id)
                }
                className={`w-full px-8 py-6 flex items-center justify-between font-bold text-xl transition-all ${expandedId === faq.id
                  ? 'bg-blue-100 text-primary'
                  : 'bg-white text-primary hover:bg-gray-50'
                  }`}
                aria-expanded={expandedId === faq.id}
              >
                <span className="text-left">{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${expandedId === faq.id ? 'bg-primary text-white' : 'bg-secondary text-primary'
                  }`}>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 transition-transform ${expandedId === faq.id ? 'rotate-180' : ''
                      }`}
                  />
                </div>
              </button>

              {expandedId === faq.id && (
                <div className="px-8 py-6 bg-blue-50 text-gray-700 animate-in slide-in-from-top-2 duration-300">
                  <p className="leading-relaxed text-lg font-medium">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
