"use client";

import Link from "next/link";
import Image from "next/image";
import { heroData } from "@/data/hero";

export default function Hero() {
    return (
        <section className="relative bg-primary text-primary-foreground py-12 md:py-16 overflow-hidden">
            {/* Background Pattern with subtle swirling lines */}
            <div className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: "url('/hero-bg 1.png')" }} aria-hidden="true"></div>

            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Image - Left Side */}
                    <div className="order-2 md:order-1 relative h-[400px] md:h-[600px] flex items-end justify-center -mb-12 md:-mb-20">
                        <div className="relative w-full h-full max-w-lg mx-auto">
                            {/* Decorative elements */}
                            <div className="absolute -top-12 -left-12 z-10 animate-pulse">
                                <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-40">
                                    <circle cx="30" cy="30" r="15" stroke="white" strokeWidth="1" fill="none" />
                                    <circle cx="50" cy="20" r="12" stroke="white" strokeWidth="1" fill="none" />
                                    <path d="M70 35 L80 45 M80 35 L70 45" stroke="white" strokeWidth="1" />
                                </svg>
                            </div>

                            <div className="relative w-full h-full flex items-end">
                                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-110"></div>
                                <div className="relative w-full h-[110%] flex items-end justify-center">
                                    <Image
                                        src={`/${heroData.image.src}`}
                                        alt={heroData.image.alt}
                                        width={600}
                                        height={700}
                                        className="object-contain object-bottom w-full h-full relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="absolute bottom-4 -right-12 z-10">
                                <svg width="120" height="120" viewBox="0 0 100 100" className="opacity-40">
                                    <circle cx="40" cy="50" r="18" stroke="white" strokeWidth="1" fill="none" />
                                    <text x="40" y="56" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                                        ₹
                                    </text>
                                    <circle cx="65" cy="40" r="14" stroke="white" strokeWidth="1" fill="none" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Content - Right Side */}
                    <div className="order-1 md:order-2 space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white tracking-tight">{heroData.headline}</h1>

                            <div className="relative inline-block">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                                    Now Master <span className="text-secondary italic">Money.</span>
                                </h1>
                                <div className="absolute -bottom-3 left-0 w-full max-w-[22ch] h-2 bg-secondary rounded-full opacity-80"></div>
                            </div>
                        </div>

                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-xl font-medium">{heroData.description}</p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href={heroData.primaryCta.href}
                                className="inline-block bg-secondary text-primary px-10 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-105 text-xl"
                            >
                                {heroData.primaryCta.label}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
