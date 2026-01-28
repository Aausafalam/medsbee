'use client'

import { sneakPeekData } from '@/data/sneakPeek'

export default function SneakPeek() {
    return (
        <section id="sneak-peek" className="pb-12 md:pb-16 bg-gray-50 overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                    <p className="text-xs md:text-base font-semibold text-primary mb-2 md:mb-3 uppercase tracking-widest">
                        {sneakPeekData.title}
                    </p>
                    <h2 className="text-2xl md:text-5xl font-bold text-primary leading-tight">
                        {sneakPeekData.subtitle}
                    </h2>
                </div>

                {/* Video Container */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-black group">
                        <iframe
                            src={sneakPeekData.videoUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
