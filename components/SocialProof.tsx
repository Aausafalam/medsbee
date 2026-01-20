"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialProofData } from "@/data/socialProof";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/globals.css";

export default function SocialProof() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const openVideo = (url: string) => {
        setActiveVideo(url);
        document.body.style.overflow = "hidden";
    };

    const closeVideo = () => {
        setActiveVideo(null);
        document.body.style.overflow = "auto";
    };

    return (
        <section id="testimonials" className="py-10 md:py-14 bg-white overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 md:space-y-10">
                    {/* Header with Title and Buttons */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="max-w-2xl text-center md:text-left">
                            <p className="text-base font-semibold text-primary mb-3 uppercase tracking-widest">{socialProofData.title}</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">{socialProofData.titleHighlight}</h2>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => openVideo(socialProofData.mainVideoUrl)}
                                data-main-video-btn
                                className="flex cursor-pointer items-center justify-center gap-2 border-2 border-primary/20 text-primary font-bold hover:border-primary hover:bg-primary hover:text-white transition-all px-8 py-3 rounded-full text-base group"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <Play size={14} className="fill-current ml-0.5" />
                                </div>
                                {socialProofData.playVideoLabel}
                            </button>
                            <Link
                                href={socialProofData.cta.href}
                                className="bg-secondary text-primary px-10 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all text-center text-base hover:shadow-xl active:scale-95 flex items-center justify-center"
                            >
                                {socialProofData.cta.label}
                            </Link>
                        </div>
                    </div>

                    <div className="relative group/carousel">
                        <div className="flex overflow-x-auto pb-4 pt-2 gap-4 md:gap-5 snap-x snap-mandatory no-scrollbar  cursor-grab active:cursor-grabbing">
                            {socialProofData.testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] snap-start group cursor-pointer"
                                    onClick={() => testimonial.videoUrl && openVideo(testimonial.videoUrl)}
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-3 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border border-gray-50">
                                        <Image
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt={testimonial.alt}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Info Overlay (Bottom) */}
                                        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                                            <div className="space-y-1">
                                                <h3 className="font-bold text-white text-lg md:text-xl leading-tight">{testimonial.name}</h3>
                                                <p className="text-xs md:text-sm text-blue-200/80 font-medium">{testimonial.handle}</p>
                                                <p className="text-[10px] md:text-xs text-secondary font-bold uppercase pt-1.5 tracking-wider border-t border-white/10 mt-2">
                                                    {testimonial.followers}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Play Icon Overlay (Center) */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-primary/20 backdrop-blur-[2px]">
                                            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                                                <Play size={24} className="text-white fill-white ml-1 md:ml-1.5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#002B5B]/95 backdrop-blur-md animate-in fade-in duration-300" onClick={closeVideo}>
                    <button onClick={closeVideo} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all">
                        <X size={24} />
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
                        <iframe src={`${activeVideo}?autoplay=1`} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}
