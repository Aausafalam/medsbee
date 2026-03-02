"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { socialProofData } from "@/data/socialProof";
import { Play, X, Star, Check } from "lucide-react";
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
        const scrollSpeed = 0.5;

        const scroll = () => {
            if (!isPaused) {
                scrollContainer.scrollLeft += scrollSpeed;
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const displayTestimonials = [...socialProofData.testimonials, ...socialProofData.testimonials];

    return (
        <section id="testimonials" className="py-12 md:py-16 bg-[#0F2040] overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-0 md:mb-10 text-left">
                    <p className="text-[10px] md:text-sm font-bold text-[#deb100] mb-2 md:mb-4 uppercase tracking-[0.2em] font-sans">{socialProofData.title}</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight tracking-normal font-bold max-w-3xl mb-4">{socialProofData.titleHighlight}</h2>
                    <p className="text-sm md:text-lg text-gray-400 font-medium font-sans">{socialProofData.subtitle}</p>
                </div>

                <div className="relative">
                    <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar py-4 gap-4 md:gap-8" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                        {displayTestimonials.map((testimonial, index) => (
                            <div
                                key={`${testimonial.id}-${index}`}
                                className="flex-shrink-0 w-[85vw] sm:w-[500px] md:w-[480px] lg:w-[420px] group cursor-pointer bg-white rounded-[1rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
                                onClick={() => testimonial.videoUrl && openVideo(testimonial.videoUrl)}
                            >
                                {/* Top Section: Video Thumbnail */}
                                <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                                    <Image
                                        src={testimonial.image ?? "/placeholder.svg"}
                                        alt={testimonial.alt || testimonial.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Dark Overlay with Gradient */}
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30">
                                            <Play size={24} className="text-white fill-white ml-1" />
                                        </div>
                                    </div>

                                    {/* Name & Title Overlay */}
                                    <div className="absolute bottom-4 left-6 right-6">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5">{testimonial.name}</h3>
                                        <p className="text-xs md:text-sm font-bold text-white/90">
                                            {testimonial.handle} <span className="text-[#F5C518]">· {testimonial.followersCount}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Section: Content */}
                                {/* <div className="p-4 md:p-6 space-y-4 flex flex-col flex-grow"> */}
                                {/* Stars */}
                                {/* <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={18} className="fill-[#F5C518] text-[#F5C518]" />
                                        ))}
                                    </div> */}

                                {/* Testimonial Text */}
                                {/* <p className="text-[0.8rem] md:text-md font-medium text-[#1F2937] leading-relaxed  flex-grow min-h-[100px] md:min-h-[120px]">
                                        &quot;{testimonial.testimonial}&quot;
                                    </p> */}

                                {/* Success Badge */}
                                {/* <div className="pt-2">
                                        <div className="inline-flex items-center gap-2 bg-[#E6F7ED] px-4 py-2 rounded-full border border-[#BFF0D2]">
                                            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#22C55E] flex items-center justify-center">
                                                <Check size={10} className="text-white" />
                                            </div>
                                            <span className="text-[11px] md:text-xs font-bold text-[#15803D] uppercase tracking-wide">
                                                {testimonial.successBadge}
                                            </span>
                                        </div>
                                    </div> */}
                                {/* </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={closeVideo}>
                    <button
                        onClick={closeVideo}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-[110]"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={`${activeVideo}${activeVideo.includes("?") ? "&" : "?"}autoplay=1`}
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
