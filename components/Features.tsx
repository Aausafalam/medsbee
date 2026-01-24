"use client";

import { featuresData } from "@/data/features";
import * as Icons from "lucide-react";

export default function Features() {
    return (
        <section className="py-10 md:py-16 bg-gray-50 overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2 leading-tight">
                        {featuresData.title}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-700 to-primary italic">{featuresData.highlightedText}</span>
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {featuresData.features.map((feature) => {
                        const IconComponent = (Icons as any)[feature.icon] || Icons.HelpCircle;
                        return (
                            <div
                                key={feature.id}
                                className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 hover:border-primary/10 hover:shadow-2xl transition-all duration-500 group flex flex-col items-start hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center bg-primary/5 text-primary rounded-2xl mb-6 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                                    <IconComponent size={24} strokeWidth={2} />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
