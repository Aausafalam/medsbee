"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { pricingData } from "@/data/pricing";
import { Check, X, Star } from "lucide-react";

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
        <section id="pricing" className="py-8 md:py-12 bg-blue-50/30 overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto ">
                    <p className="text-xs md:text-base font-semibold text-primary mb-2 md:mb-3 uppercase tracking-widest leading-none">{pricingData.title}</p>
                    <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">{pricingData.subtitle}</h2>
                </div>

                {/* Pricing Cards Container */}
                <div className="relative max-w-[1400px] mx-auto px-0 md:px-10">
                    <div
                        ref={scrollContainerRef}
                        className="flex md:grid md:grid-cols-3 gap-2 md:gap-4 px-1 lg:gap-8 overflow-x-auto py-6 md:py-8 snap-x snap-mandatory no-scrollbar pb-6 md:pb-8 items-stretch"
                    >
                        {[...pricingData.plans].reverse().map((plan, index) => (
                            <div
                                key={plan.id}
                                className={`flex-shrink-0 w-[85vw] sm:w-[350px] py-2 md:py-3 md:w-auto snap-center relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col h-auto shadow-lg hover:shadow-xl hover:scale-[1.02] hover:z-20 ${plan.isFeatured
                                    ? "bg-[#002B5B] text-white ring-2 ring-secondary/30 z-10 hover:shadow-[0_20px_50px_rgba(255,215,0,0.4)]"
                                    : "bg-white text-primary border border-blue-100/50 hover:shadow-[0_20px_40px_rgba(0,43,91,0.2)]"
                                    } ${plan.id === 1 ? "md:order-1" : plan.id === 2 ? "md:order-2" : "md:order-3"}`}
                            >
                                {/* Star Badge */}
                                <div className="absolute top-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                                    <Star size={18} className={`fill-current ${plan.isFeatured ? "text-secondary" : "text-primary/10"}`} />
                                    {plan.badge && <span className="text-[10px] mt-1 font-bold text-secondary uppercase tracking-tighter whitespace-nowrap leading-none">{plan.badge}</span>}
                                </div>

                                <div className="p-6 mt-2 md:p-8 pt-10 md:pt-14 space-y-4 md:space-y-6 flex-grow flex flex-col">
                                    {/* Plan Name & Price */}
                                    <div className="text-center space-y-2">
                                        <h3 className="text-xl font-bold tracking-tight italic">{plan.name}</h3>
                                        <p className={`text-[13px] font-medium leading-tight px-2 ${plan.isFeatured ? "text-blue-100/70" : "text-gray-500"}`}>{plan.description}</p>

                                        <div className="pt-2 space-y-0.5">
                                            {plan.originalPrice && (
                                                <div className={`text-sm font-medium line-through decoration-red-500/80 decoration-1 ${plan.isFeatured ? "text-blue-200/50" : "text-gray-400"}`}>
                                                    {plan.originalPrice}
                                                </div>
                                            )}
                                            <div className="flex items-center justify-center gap-1">
                                                <span className="text-3xl md:text-4xl font-bold tracking-tighter leading-none">{plan.price}</span>
                                                <span className={`text-base font-bold ${plan.isFeatured ? "text-blue-100/70" : "text-gray-500"}`}>/-</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <ul className="space-y-2.5 md:space-y-3 flex-grow py-3 border-y border-dashed border-primary/10">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className={`flex items-start gap-2.5 transition-opacity duration-300 ${!feature.included ? "opacity-50" : ""}`}>
                                                <div className={`mt-0.5 flex-shrink-0 ${feature.included ? "text-green-500" : "text-red-400"}`}>
                                                    {feature.included ? <Check size={16} strokeWidth={3} /> : <X size={16} strokeWidth={3} />}
                                                </div>
                                                <span
                                                    className={`text-[13px] md:text-sm leading-tight font-medium ${plan.isFeatured ? "text-white" : "text-gray-700"
                                                        } ${!feature.included ? "line-through grayscale" : ""}`}
                                                >
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Buttons */}
                                    <div className="space-y-3 pt-2 mt-auto">
                                        <Link
                                            href={plan.cta.href}
                                            className={`block text-center py-3 rounded-xl font-bold transition-all text-lg uppercase tracking-wide ${plan.isFeatured
                                                ? "bg-secondary text-[#002B5B] hover:bg-yellow-400 shadow-[0_5px_15px_rgba(255,215,0,0.3)]"
                                                : "bg-[#002B5B] text-white hover:bg-[#002B5B]/80"
                                                }`}
                                        >
                                            <span className="relative z-10">{plan.cta.label}</span>
                                        </Link>
                                        {/* <div className="flex flex-col items-center">
                                            <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                                                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                                                <p className={`text-[9px] font-bold uppercase tracking-[0.1em] ${plan.isFeatured ? "text-green-300" : "text-green-600"}`}>
                                                    100% Money Back
                                                </p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bullet Indicators (Mobile Only) */}
                    <div className="flex items-center justify-center gap-2.5 mt-2 md:hidden">
                        {[...pricingData.plans].reverse().map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToPlan(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-6 bg-primary" : "w-1.5 bg-primary/20 hover:bg-primary/40"}`}
                                aria-label={`Go to plan ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
