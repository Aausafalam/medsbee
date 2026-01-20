'use client'

import Link from 'next/link'
import { pricingData } from '@/data/pricing'
import { Check, Star } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-16 bg-blue-50/50">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-lg font-semibold text-primary mb-4 uppercase tracking-widest">Choose the</p>
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
            Plan that Fits You Best
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-stretch">
          {pricingData.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col ${plan.isFeatured
                ? 'bg-[#002B5B] text-white ring-4 ring-secondary/20 shadow-2xl scale-105 z-10'
                : 'bg-white text-primary border border-blue-100 shadow-xl'
                }`}
            >
              {/* Star Badge */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2">
                <Star size={32} className={`fill-current ${plan.isFeatured ? 'text-secondary' : 'text-primary'}`} />
              </div>

              <div className="p-10 pt-20 space-y-8 flex-grow flex flex-col">
                {/* Plan Name & Price */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">{plan.name}</h3>
                  <p className={`text-sm font-medium ${plan.isFeatured ? 'text-blue-100/70' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-center justify-center gap-1 pt-4">
                    <span className="text-5xl font-bold tracking-tighter">
                      {plan.price}
                    </span>
                    <span className={`text-xl ${plan.isFeatured ? 'text-blue-100/70' : 'text-gray-500'}`}>
                      /-
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 pb-8 flex-grow">
                  {plan.features.slice(0, 8).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4"
                    >
                      <div className={`mt-1 flex-shrink-0 ${plan.isFeatured ? 'text-green-400' : 'text-green-500'}`}>
                        <Check size={20} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-medium ${plan.isFeatured ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="space-y-4 pt-10 border-t border-dashed border-white/20">
                  <Link
                    href={plan.cta.href}
                    className={`block text-center py-4 rounded-xl font-bold transition-all text-xl ${plan.isFeatured
                      ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_10px_20px_rgba(37,99,235,0.3)]'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                  >
                    {plan.cta.label}
                  </Link>
                  <p className={`text-center text-xs font-bold uppercase tracking-widest ${plan.isFeatured ? 'text-blue-200' : 'text-gray-400'}`}>
                    100% Money Back
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
