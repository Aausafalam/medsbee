"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { pricingData } from "@/data/pricing";
import { Check, X, Star } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollToPlan = (index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cards = container.children;
            if (cards[index]) {
                const card = cards[index] as HTMLElement;
                container.scrollTo({
                    left: card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2,
                    behavior: "smooth",
                });
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const scrollLeft = container.scrollLeft;
                const cardWidth = container.offsetWidth * 0.85; // Matches w-[85vw] approx
                const index = Math.round(scrollLeft / cardWidth);
                setActiveIndex(index);
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <section id="pricing" className="py-10 md:py-14 bg-[#F7F9FC] overflow-hidden">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-4xl mb-4  text-left px-2">
                    <p className="text-[9px] md:text-xs font-bold text-[#b4862a] mb-1 md:mb-3 uppercase tracking-[0.2em] font-sans">
                        {pricingData.title}
                    </p>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#071324] leading-tight tracking-normal font-bold">
                        {pricingData.subtitle}
                    </h2>
                </div>

                {/* Early Bird Banner */}
                <div className="max-w-[1200px] mb-4 px-2 md:mb-12">
                    <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-sm p-3 flex items-center gap-3 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0"></div>
                        <p className="text-[0.75rem] md:text-base font-normal text-[#92400E]">
                            ⏰ Early Bird pricing active — <span className="">limited seats remaining in this cohort</span>
                        </p>
                    </div>
                </div>

                {/* Pricing Cards Container */}
                <div className="relative max-w-[1200px] mx-auto">
                    <div
                        ref={scrollContainerRef}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-8 overflow-visible"
                    >
                        {pricingData.plans.map((plan, index) => (
                            <div
                                key={plan.id}
                                className={`flex-shrink-0  md:w-full snap-center relative rounded-[1rem] p-6 md:p-8 transition-all duration-500 flex flex-col h-auto border-2 ${plan.isFeatured
                                    ? "bg-[#071324] text-white border-[#deb100] shadow-[0_15px_40px_rgba(222,177,0,0.1)] md:scale-[1.02] z-10"
                                    : "bg-white text-[#071324] border-[#E8ECF4] shadow-[0_5px_20px_rgba(0,0,0,0.03)]"
                                    }`}
                            >
                                {plan.isFeatured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <div className="bg-[#F5C518] text-[#071324] px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black flex items-center gap-2 whitespace-nowrap shadow-md">
                                            <Star size={12} fill="currentColor" />
                                            MOST POPULAR
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-4 flex-grow flex flex-col">
                                    {/* Plan Name & Desc */}
                                    <div className="space-y-1">
                                        <h3 className={`text-2xl md:text-3xl font-serif font-bold ${plan.isFeatured ? 'text-white' : 'text-[#071324]'}`}>
                                            {plan.name}
                                        </h3>
                                        <p className={`text-[0.7rem] md:text-sm font-medium leading-relaxed ${plan.isFeatured ? "text-gray-400" : "text-gray-500"}`}>
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* Price Section */}
                                    <div className="space-y-0.5">
                                        <div className="flex items-baseline gap-2">
                                            <span className={`text-xs md:text-base font-medium line-through ${plan.isFeatured ? "text-gray-500" : "text-gray-400"}`}>
                                                {plan.originalPrice}
                                            </span>
                                            <div className="flex items-center">
                                                <span className={`text-3xl md:text-5xl font-serif font-black ${plan.isFeatured ? "text-[#deb100]" : "text-[#071324]"}`}>
                                                    {plan.price}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-sm  md:text-base font-bold text-[#22C55E]">
                                            {(plan as any).savings}
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <ul className="space-y-3 flex-grow py-4 border-t border-dashed border-gray-100/10">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className={`flex items-start gap-3 ${!feature.included ? "opacity-30" : ""}`}>
                                                <div className={`mt-1 flex-shrink-0 ${feature.included ? "text-[#22C55E]" : "text-gray-400"}`}>
                                                    {feature.included ? <Check size={16} strokeWidth={3} /> : <span className="text-base font-bold">✕</span>}
                                                </div>
                                                <span className={`text-[12px] md:text-sm font-bold font-sans tracking-tight leading-snug ${plan.isFeatured ? "text-white" : "text-[#071324]"}`}>
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <div className="pt-2 mt-auto">
                                        <Link
                                            href={plan.cta.href}
                                            onClick={() => {
                                                sendGAEvent({
                                                    event: "enroll_now_checkout",
                                                    value: plan.price,
                                                    plan_name: plan.name,
                                                });
                                            }}
                                            className={`block text-center py-3 rounded-md font-black transition-all text-base md:text-lg uppercase tracking-widest ${plan.isFeatured
                                                ? "bg-[#F5C518] text-[#071324] hover:bg-[#deb100]/90 shadow-lg"
                                                : "bg-[#071324] text-white hover:bg-[#071324]/90 shadow-md"
                                                }`}
                                        >
                                            {plan.cta.label}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bullet Indicators (Mobile Only) */}
                    {/* <div className="flex items-center justify-center gap-2 mt-6 md:hidden">
                        {pricingData.plans.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToPlan(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-8 bg-[#071324]" : "w-2 bg-[#071324]/20"}`}
                                aria-label={`Go to plan ${idx + 1}`}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}

