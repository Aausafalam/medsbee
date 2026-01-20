'use client'

import { useState } from 'react'
import { faqData } from '@/data/faq'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="faqs" className="py-10 md:py-12 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-base font-semibold text-primary mb-3 uppercase tracking-widest">{faqData.title}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqData.faqs.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${expandedId === faq.id
                ? 'ring-1 ring-primary shadow-md'
                : 'border border-gray-100 hover:border-blue-200'
                }`}
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === faq.id ? null : faq.id)
                }
                className={`w-full px-6 py-4 flex items-center justify-between font-bold text-lg transition-all ${expandedId === faq.id
                  ? 'bg-blue-50 text-primary'
                  : 'bg-white text-primary hover:bg-gray-50'
                  }`}
                aria-expanded={expandedId === faq.id}
              >
                <span className="text-left leading-snug">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${expandedId === faq.id ? 'bg-primary text-white' : 'bg-secondary text-primary'
                  }`}>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${expandedId === faq.id ? 'rotate-180' : ''
                      }`}
                  />
                </div>
              </button>

              {expandedId === faq.id && (
                <div className="px-6 py-4 bg-blue-50/30 text-gray-700 animate-in fade-in slide-in-from-top-1 duration-200">
                  <p className="leading-relaxed text-sm font-medium">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
