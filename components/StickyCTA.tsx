'use client'

import { useState, useEffect } from 'react'
import { Play } from 'lucide-react'
import Link from 'next/link'

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false)

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

    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 max-w-fit left-1/2 -translate-x-1/2 z-[100] w-full  animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-[#0a192f] max-w-fit rounded-full p-2 md:p-2.5 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 backdrop-blur-sm">
                {/* Play Video Action */}
                <button
                    onClick={() => {
                        // This would ideally trigger the same video modal as SocialProof
                        // For now, let's keep it simple or try to find a way to share the state
                        const videoBtn = document.querySelector('[data-main-video-btn]') as HTMLButtonElement
                        if (videoBtn) videoBtn.click()
                    }}
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
    )
}
