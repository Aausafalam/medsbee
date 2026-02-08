"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialProofData } from "@/data/socialProof";
import { Play, X, Instagram, Twitter } from "lucide-react";
import "../styles/globals.css";

export default function SocialProof() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    const openVideo = (url: string) => {
        setActiveVideo(url);
        document.body.style.overflow = "hidden";
    };

    const closeVideo = () => {
        setActiveVideo(null);
        document.body.style.overflow = "auto";
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        const scrollSpeed = 0.5; // Adjust for slower/faster scroll

        const scroll = () => {
            if (!isPaused) {
                scrollContainer.scrollLeft += scrollSpeed;

                // Reset to middle if we've scrolled past the first set of items
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <section id="testimonials" className="py-10 md:py-14 bg-white overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 md:space-y-10">
                    {/* Header with Title and Buttons */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="max-w-2xl text-center md:text-left">
                            <p className="text-xs md:text-base font-semibold text-primary mb-2 md:mb-3 uppercase tracking-widest">{socialProofData.title}</p>
                            <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">{socialProofData.titleHighlight}</h2>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden md:flex flex-col sm:flex-row gap-4">
                            <Link
                                href={socialProofData.cta.href}
                                className="bg-secondary text-primary px-10 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all text-center text-base hover:shadow-xl active:scale-95 flex items-center justify-center"
                            >
                                {socialProofData.cta.label}
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Lightened Gradient Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white/40 to-transparent pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white/40 to-transparent pointer-events-none" />

                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto py-4 gap-4 md:gap-5 no-scrollbar"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            style={{ scrollBehavior: "auto" }}
                        >
                            {[...socialProofData.testimonials, ...socialProofData.testimonials].map((testimonial, index) => (
                                <div
                                    key={`${testimonial.id}-${index}`}
                                    className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] group cursor-pointer"
                                    onClick={() => testimonial.videoUrl && openVideo(testimonial.videoUrl)}
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-3 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border border-gray-50">
                                        <Image src={testimonial.image ?? "/placeholder.svg"} alt={testimonial.alt || testimonial.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />

                                        {/* Info Overlay (Bottom) */}
                                        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                                            <div className="space-y-1">
                                                <h3 className="font-bold text-white text-lg md:text-xl leading-tight">{testimonial.name}</h3>
                                                <div className="flex items-center gap-1.5 text-blue-200/80">
                                                    {(testimonial as any).platform === "instagram" && <Instagram size={14} />}
                                                    {(testimonial as any).platform === "twitter" && <Twitter size={14} />}
                                                    <p className="text-xs md:text-sm font-medium">{testimonial.handle}</p>
                                                </div>
                                                <p className="text-[10px] md:text-xs text-secondary font-bold uppercase pt-1.5 tracking-wider border-t border-white/10 mt-2">{testimonial.followers}</p>
                                            </div>
                                        </div>

                                        {/* Play Icon Overlay (Center) */}
                                        <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:md:bg-primary/20 group-hover:md:backdrop-blur-[2px]">
                                            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/15  rounded-full flex items-center justify-center border border-white/40 shadow-2xl scale-100 md:scale-95 group-hover:bg-white/30 group-hover:scale-100 transition-all duration-500">
                                                <Play size={24} className="text-white fill-white ml-1 md:ml-1.5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile CTA Button - Below Carousel */}
                    <div className="flex md:hidden flex-col gap-4 mt-2">
                        <Link
                            href={socialProofData.cta.href}
                            className="bg-secondary text-primary px-10 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all text-center text-base hover:shadow-xl active:scale-95 flex items-center justify-center"
                        >
                            {socialProofData.cta.label}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/5 backdrop-blur-2xl animate-in fade-in duration-300" onClick={closeVideo}>
                    <button onClick={closeVideo} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-primary/70 hover:text-primary hover:bg-black/20 transition-all z-[110]">
                        <X size={24} />
                    </button>

                    <div className="relative w-full max-w-[400px] aspect-[9/16] bg-black/20 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.1)] border border-white/20 animate-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={`${activeVideo}${activeVideo.includes('?') ? '&' : '?'}autoplay=1`}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media; fullscreen"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}
