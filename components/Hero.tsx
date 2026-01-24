"use client";

import Link from "next/link";
import Image from "next/image";
import { heroData } from "@/data/hero";

export default function Hero() {
    return (
        <section className="relative bg-[#0a192f] text-white  overflow-hidden min-h-[70vh]  flex items-center">
            {/* Enhanced Background with subtle swirling lines and glows */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
                    style={{ backgroundImage: "url('/hero-bg 1.png')" }}
                    aria-hidden="true"
                ></div>
                {/* Subtle Glows */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 blur-[100px] rounded-full animate-pulse-slow delayer-2000"></div>
            </div>

            <div className="mx-auto max-w-[1450px] px-4  relative z-10 w-full">
                <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center p-0">
                    {/* Image - Left Side (Restored size for a more beautiful look) */}
                    <div className="order-2 md:order-1  relative h-[400px] md:h-[600px] lg:h-[700px] w-full md:w-[42%] lg:w-[40%] flex items-end justify-center flex-shrink-0">
                        <div className="relative w-full h-full max-w-lg mx-auto">
                            <div className="relative w-full h-full flex items-end">
                                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-110"></div>
                                <div className="relative w-full h-[110%] flex items-end justify-center">
                                    <Image
                                        src={`/${heroData.image.src}`}
                                        alt={heroData.image.alt}
                                        width={650}
                                        height={750}
                                        className="object-contain object-bottom w-full h-full relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="absolute bottom-4 -right-12 z-10">
                                <svg width="110" height="110" viewBox="0 0 100 100" className="opacity-40">
                                    <circle cx="40" cy="50" r="18" stroke="white" strokeWidth="1" fill="none" />
                                    <text x="40" y="56" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                                        ₹
                                    </text>
                                    <circle cx="65" cy="40" r="14" stroke="white" strokeWidth="1" fill="none" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Content - Right Side (Wider container to accommodate single-line text naturally) */}
                    <div className="order-1 md:order-2 mt-12 md:mt-0  flex flex-col items-start space-y-6 md:space-y-10 flex-grow w-full md:w-[58%] lg:w-[60%]">
                        <div className="space-y-1 md:space-y-2 lg:space-y-4">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-normal leading-[1.1] text-white tracking-tight drop-shadow-sm">{heroData.headline}</h1>

                            <div className="relative inline-block mt-1 md:mt-2">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-normal leading-[1.1] text-white tracking-tight">
                                    Now Master{" "}
                                    <span className="text-secondary relative">
                                        Money.
                                        {/* SVG Swoosh Underline */}
                                        <svg
                                            className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-6 text-secondary transform translate-y-1"
                                            viewBox="0 0 320 20"
                                            fill="none"
                                            preserveAspectRatio="none"
                                        >
                                            <path d="M4 14C80 8 160 8 316 14.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-90" />
                                        </svg>
                                    </span>
                                </h1>
                            </div>
                        </div>

                        <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/90 leading-relaxed font-normal border-l-4 border-secondary/40 pl-4 max-w-none mt-5">
                            {heroData.description}
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-8 pt-2">
                            <Link
                                href={heroData.primaryCta.href}
                                className="group relative isolate overflow-hidden inline-flex items-center justify-center bg-secondary text-primary px-8 md:px-11 py-3 md:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 text-lg md:text-2xl shadow-[0_10px_30px_rgba(255,215,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,215,0,0.5)] active:scale-95"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    {heroData.primaryCta.label}
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="group-hover:translate-x-1 transition-transform"
                                    >
                                        <path d="M5 12h14m-7-7 7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
