"use client";

import { featuresData } from "@/data/features";
import * as Icons from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="py-10 md:py-16 bg-gray-50 overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                    <p className="text-xs md:text-base font-semibold text-primary mb-2 md:mb-3 uppercase tracking-widest">{featuresData.title}</p>
                    <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
                        {featuresData.subtitle}
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                    {featuresData.features.map((feature) => {
                        const IconComponent = (Icons as any)[feature.icon] || Icons.HelpCircle;
                        return (
                            <div
                                key={feature.id}
                                className="bg-white p-4 md:p-8 rounded-2xl md:rounded-[2rem] border border-gray-100 hover:border-primary/10 hover:shadow-2xl transition-all duration-500 group flex flex-col items-start hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-primary/5 text-primary rounded-lg md:rounded-2xl mb-3 md:mb-6 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                                    <IconComponent className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                                </div>

                                {/* Content */}
                                <h3 className="text-sm md:text-lg font-bold text-primary mb-1 md:mb-3 leading-tight">{feature.title}</h3>
                                <p className="hidden md:block text-sm text-gray-500 leading-relaxed font-medium">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
