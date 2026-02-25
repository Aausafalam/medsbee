"use client";
import Link from "next/link";
import Image from "next/image";
import { heroData } from "@/data/hero";
import { sendGAEvent } from "@next/third-parties/google";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative bg-[#071324] text-white flex flex-col items-center md:min-h-[calc(100vh-80px)] min-h-[calc(100vh-80px)] justify-between">
            {/* Main Content Area */}
            <div className="mx-auto max-w-[1450px] px-4 pt-6 md:pt-8 relative z-10 w-full flex-grow flex flex-col justify-center">
                <div className="flex flex-col md:flex-row lg:gap-8 items-center">

                    {/* Left/Top Content */}
                    <div className="flex flex-col items-start text-left space-y-3 md:space-y-8 w-full md:w-1/2 lg:w-[55%]">
                        <div className="space-y-1">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-serif leading-[1.05] tracking-tight">
                                <span className="block">You Mastered Medicine.</span>
                                <span className="block mt-1">
                                    Now Master <span className="text-[#ffd700] italic">Money.</span>
                                </span>
                            </h1>
                        </div>

                        <div className="flex items-start gap-3 max-w-sm">
                            <div className="w-[2.5px] h-full  min-h-[65px] md:min-h-[75px] bg-[#ffd700] opacity-100 flex-shrink-0" />
                            <p className="text-sm md:text-base text-white/90 font-sans leading-relaxed">
                                Build a <span className="text-[#ffd700] font-bold">₹10 Crore+ retirement corpus</span> while working 12-hour shifts, without quitting medicine or hiring a wealth manager.
                            </p>
                        </div>

                        {/* Tagline Badge - Pill style */}
                        <div className="inline-flex md:-mt-4 items-center gap-2 bg-[#1a2533] border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#ffd700] hover:bg-[#253040] transition-colors">
                            <span className="text-[#ffd700]">★</span>
                            <span className="font-sans font-medium uppercase tracking-wider">{heroData.tagline}</span>
                        </div>

                        {/* Desktop CTA area - Inside left container */}
                        <div className="hidden md:flex flex-col gap-3 mt-4 relative z-20 w-full max-w-sm">
                            <Link
                                href={heroData.primaryCta.href}
                                onClick={() => sendGAEvent({ event: "enroll_now_click", location: "hero" })}
                                className="group"
                            >
                                <div className="bg-[#ffd700] text-[#071324] px-6 py-4 md:px-8 md:py-3.5 rounded-lg flex items-center justify-between w-full shadow-[0_10px_30px_rgba(255,215,0,0.2)] hover:scale-[1.01] transition-all duration-300">
                                    <span className="text-xl md:text-2xl font-serif font-bold  tracking-normal uppercase leading-none">{heroData.primaryCta.label}</span>
                                    <div className="bg-[#ccac00] p-1.5 md:p-2 rounded-md ml-4">
                                        <ArrowRight size={18} className="text-[#071324]" strokeWidth={3} />
                                    </div>
                                </div>
                            </Link>

                            <button
                                onClick={() => document.getElementById('sneak-peek')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center justify-center gap-2.5 py-2.5 text-white/70 hover:text-white transition-colors bg-[#1a2533]/40 border border-white/5 rounded-lg backdrop-blur-sm"
                            >
                                <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
                                    <Play fill="white" size={10} className="translate-x-0.5" />
                                </div>
                                <span className="text-sm font-medium tracking-wide">{heroData.secondaryCta.label}</span>
                            </button>
                        </div>
                    </div>

                    {/* Right/Bottom Image Content */}
                    <div className="relative -left-7 w-full md:w-1/2 lg:w-[50%] flex justify-center items-end -mb-5 h-[380px] md:h-[450px] lg:h-[590px] lg:-mb-5 mt-auto">
                        <div className="relative w-full h-full flex items-end justify-center">
                            <Image
                                src={`/${heroData.image.src}`}
                                alt={heroData.image.alt}
                                width={450}
                                height={600}
                                className="object-contain object-bottom w-auto h-full relative z-10"
                                priority
                            />

                            {/* Floating Community Badge */}
                            <div className="absolute top-[35%] right-2 md:right-4 z-20 bg-[#ffd700] text-[#071324] px-4 py-3 md:px-6 md:py-5 rounded-2xl md:rounded-[2rem] shadow-[0_10px_40px_rgba(255,215,0,0.6)] flex flex-col items-center justify-center border border-[#071324]/5 transition-transform hover:scale-105">
                                <span className="text-xl md:text-3xl font-bold font-sans leading-none tracking-tight">80K+</span>
                                <span className="text-[8px] md:text-[11px] font-bold font-sans mt-0.5 md:mt-1 leading-tight text-center">Doctors<br />in Community</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile CTA area - Below image */}
                <div className="flex md:hidden flex-col gap-3  pb-8 relative z-20 w-full max-w-sm mx-auto">
                    <Link
                        href={heroData.primaryCta.href}
                        onClick={() => sendGAEvent({ event: "enroll_now_click", location: "hero" })}
                        className="group"
                    >
                        <div className="bg-[#ffd700] text-[#071324] px-6 py-4 rounded-lg flex items-center justify-between w-full shadow-[0_10px_30px_rgba(255,215,0,0.2)]">
                            <span className="text-xl font-serif font-bold  tracking-tight uppercase leading-none">{heroData.primaryCta.label}</span>
                            <div className="bg-[#ccac00] p-1.5 rounded-md ml-4">
                                <ArrowRight size={18} className="text-[#071324]" strokeWidth={3} />
                            </div>
                        </div>
                    </Link>

                    <button
                        onClick={() => document.getElementById('sneak-peek')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center justify-center gap-2.5 py-2.5 text-white/70 hover:text-white transition-colors bg-[#1a2533]/40 border border-white/5 rounded-lg backdrop-blur-sm"
                    >
                        <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
                            <Play fill="white" size={10} className="translate-x-0.5" />
                        </div>
                        <span className="text-sm font-medium tracking-wide">{heroData.secondaryCta.label}</span>
                    </button>
                </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="w-full bg-[#ffd700] text-[#071324] py-4 md:py-6 px-4 relative z-10 border-t border-[#071324]/10 shrink-0">
                <div className="mx-auto max-w-[1450px] grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {heroData.stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <h3 className="text-xl md:text-2xl font-serif font-bold  leading-none transition-transform group-hover:scale-105 duration-300">
                                {stat.title}
                            </h3>
                            <div className="h-[1px] w-8 bg-[#071324]/20 my-1.5 md:my-2 rounded-full" />
                            <p className="text-[9px] md:text-[10px] font-bold font-sans opacity-95 uppercase tracking-widest leading-tight">
                                {stat.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
