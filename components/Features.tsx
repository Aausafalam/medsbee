"use client";

import { featuresData } from "@/data/features";

export default function Features() {
    return (
        <section id="features" className="py-10 md:py-16 bg-[#071324] mb-10 overflow-hidden">
            <div className="mx-auto max-w-[1400px] px-4 md:px-6">

                {/* Section Header - Styled like Roadmap but dark theme */}
                <div className="max-w-4xl mb-8 md:mb-12 text-left px-2">
                    <p className="text-[9px] md:text-xs font-bold text-[#fed700] mb-1 md:mb-3 uppercase tracking-[0.2em] font-sans">
                        {featuresData.title}
                    </p>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-normal md:leading-[1.1] tracking-normal font-bold">
                        {featuresData.subtitle}
                    </h2>
                </div>

                {/* Features Custom Grid - Updated for full-width featured items */}
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
                    {featuresData.features.map((feature) => {
                        const isFeatured = (feature as any).isFeatured;
                        const isWide = (feature as any).isWide;

                        const colSpanClasses = isFeatured || isWide
                            ? "col-span-2"
                            : "col-span-1";

                        return (
                            <div
                                key={feature.id}
                                className={`${colSpanClasses} bg-[#12243d] border transition-all duration-300 p-4 md:p-8 rounded-2xl md:rounded-[1.5rem] flex ${isFeatured ? "flex-row items-center gap-2 md:gap-8" : "flex-col items-start gap-4"
                                    } ${isFeatured
                                        ? "border-[#fed700]/40 shadow-[0_0_30px_rgba(254,215,0,0.05)]"
                                        : "border-[#E8ECF4]/10 hover:border-[#fed700]/20"
                                    }`}
                            >
                                {/* Icon Container - Horizontal for featured */}
                                <div className={`flex-shrink-0 ${isFeatured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-4xl'} ${isFeatured ? 'animate-bounce-subtle' : ''}`}>
                                    {feature.icon}
                                </div>

                                {/* Content */}
                                <div className={`${isFeatured ? 'flex-grow' : ''} space-y-1 md:space-y-3`}>
                                    <h3 className={`font-bold leading-snug text-[0.8rem] md:text-2xl ${isFeatured ? 'text-[#fed700]' : 'text-white'
                                        }`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-[10px] md:text-base text-gray-400 font-sans font-medium leading-normal md:leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx global>{`
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
