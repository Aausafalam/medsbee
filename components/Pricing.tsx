"use client";

import Link from "next/link";
import { pricingData } from "@/data/pricing";
import { Check, Star } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-10 md:py-14 bg-blue-50/50 overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                    <p className="text-base font-semibold text-primary mb-3 uppercase tracking-widest">Choose the</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">Plan that Fits You Best</h2>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 items-stretch max-w-6xl mx-auto">
                    {pricingData.plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col ${
                                plan.isFeatured ? "bg-[#002B5B] text-white ring-2 ring-secondary/20 shadow-2xl scale-100 md:scale-105 z-10" : "bg-white text-primary border border-blue-100 shadow-lg"
                            }`}
                        >
                            {/* Star Badge */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2">
                                <Star size={24} className={`fill-current ${plan.isFeatured ? "text-secondary" : "text-primary"}`} />
                            </div>

                            <div className="p-6 md:p-8 pt-12 md:pt-16 space-y-6 flex-grow flex flex-col">
                                {/* Plan Name & Price */}
                                <div className="text-center space-y-2">
                                    <h3 className="text-xl font-bold tracking-tight">{plan.name}</h3>
                                    <p className={`text-xs font-medium ${plan.isFeatured ? "text-blue-100/70" : "text-gray-500"}`}>{plan.description}</p>
                                    <div className="flex items-center justify-center gap-1 pt-2">
                                        <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                                        <span className={`text-lg ${plan.isFeatured ? "text-blue-100/70" : "text-gray-500"}`}>/-</span>
                                    </div>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-3 pb-6 flex-grow">
                                    {plan.features.slice(0, 8).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className={`mt-0.5 flex-shrink-0 ${plan.isFeatured ? "text-green-400" : "text-green-500"}`}>
                                                <Check size={16} strokeWidth={3} />
                                            </div>
                                            <span className={`text-xs md:text-sm font-medium ${plan.isFeatured ? "text-white" : "text-gray-700"}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Buttons */}
                                <div className="space-y-3 pt-6 border-t border-dashed border-white/20">
                                    <Link
                                        href={plan.cta.href}
                                        className={`block text-center py-3 rounded-xl font-bold transition-all text-lg ${
                                            plan.isFeatured ? "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_10px_20px_rgba(37,99,235,0.3)]" : "bg-blue-600 text-white hover:bg-blue-700"
                                        }`}
                                    >
                                        {plan.cta.label}
                                    </Link>
                                    <p className={`text-center text-[10px] font-bold uppercase tracking-widest ${plan.isFeatured ? "text-blue-200" : "text-gray-400"}`}>100% Money Back</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
