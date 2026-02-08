"use client";

import Image from "next/image";

export default function Instructor() {
    return (
        <section id="instructor" className="bg-primary text-white  relative overflow-hidden ">
            {/* Subtle background decoration - matching Highlight style */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-4 pt-10 md:py-12  md:space-y-6">
                        <div className="space-y-2">
                            <p className="text-secondary font-bold uppercase tracking-widest text-xs md:text-sm">Course Instructor</p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">Karan Chawla</h2>
                        </div>

                        <p className="text-base md:text-lg text-white/80 font-medium max-w-lg leading-relaxed">
                            Through close work with doctors, he identified a widespread lack of financial clarity. His focus is helping doctors simplify investing, manage debt, and build structured
                            systems for long-term wealth.
                        </p>

                        <div className="space-y-1">
                            <div className="text-5xl md:text-6xl font-bold text-secondary leading-none">75K +</div>
                            <p className="text-sm md:text-base text-white/70 font-medium tracking-wide">Doctor Community for Financial Clarity</p>
                        </div>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="relative h-[250px] md:h-[400px] lg:h-[450px]">
                        <div className="relative w-full h-full flex items-end justify-center lg:justify-end">
                            <Image src="/krn 1.png" alt="Karan Chawla" fill className="object-contain object-bottom drop-shadow-[0_15px_40px_rgba(255,215,0,0.15)]" priority />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
