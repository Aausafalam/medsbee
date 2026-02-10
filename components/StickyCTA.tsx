'use client'

import { useState, useEffect } from 'react'
import { Play, X } from 'lucide-react'
import Link from 'next/link'
import { sneakPeekData } from '@/data/sneakPeek'

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false)
    const [showVideo, setShowVideo] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const openVideo = () => {
        setShowVideo(true)
        document.body.style.overflow = 'hidden'
    }

    const closeVideo = () => {
        setShowVideo(false)
        document.body.style.overflow = 'auto'
    }

    if (!isVisible) return null

    return (
        <>
            <div className="fixed bottom-6 max-w-fit left-1/2 -translate-x-1/2 z-[100] w-full  animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-white text-center text-[0.65rem] md:text-[0.8rem] font-semibold bg-[#062b53] p-2 md:p-2.5 w-fit m-auto relative top-[7px] rounded-t-md">The Money Lessons Med School Never Taught You</p>
                <div className="bg-[#0a192f] max-w-fit rounded-full p-2 md:p-2.5 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 backdrop-blur-sm">
                    {/* Play Video Action */}
                    <button
                        onClick={openVideo}
                        className="flex  items-center gap-3 px-6 py-2 text-white hover:text-secondary transition-colors group"
                    >
                        <Play size={18} className="fill-current" />
                        <span className="font-bold text-sm md:text-base tracking-wide cursor-pointer whitespace-nowrap">Play Video</span>
                    </button>

                    {/* Enroll Now Button */}
                    <Link
                        href="#pricing"
                        className="bg-secondary text-primary px-8 md:px-12 py-3 md:py-3.5 whitespace-nowrap rounded-full font-bold text-sm md:text-base hover:bg-yellow-400 transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
                    >
                        Enroll Now
                    </Link>
                </div>
            </div>

            {/* Video Modal */}
            {showVideo && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300" onClick={closeVideo}>
                    <button onClick={closeVideo} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-[120]">
                        <X size={24} />
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={`${sneakPeekData.videoUrl}${sneakPeekData.videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media; fullscreen"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    )
}
