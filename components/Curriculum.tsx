"use client";

import { useState } from "react";
import Image from "next/image";
import { curriculumData } from "@/data/curriculum";
import { ChevronDown, Play, ArrowRight } from "lucide-react";

export default function Curriculum() {
    const [expandedId, setExpandedId] = useState<number | null>(1);

    return (
        <section id="curriculum" className="py-10 md:py-12 bg-[#F7F9FC] overflow-hidden">
            <div className="mx-auto max-w-[1400px] px-4 md:px-6">

                {/* Section Header - Same as Roadmap.tsx */}
                <div className="max-w-4xl mb-8 md:mb-12 text-left px-2">
                    <p className="text-[9px] md:text-xs font-bold text-[#b4862a] mb-1 md:mb-3 uppercase tracking-[0.2em] font-sans">
                        {curriculumData.title}
                    </p>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#071324] leading-normal md:leading-[1.1] tracking-normal font-bold">
                        {curriculumData.subtitle}
                    </h2>
                    {curriculumData.description && (
                        <p className="mt-2 text-xs md:text-lg text-gray-500 font-sans max-w-2xl leading-relaxed">
                            {curriculumData.description}
                        </p>
                    )}
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* Left side Illustration - Shared style with Roadmap side elements */}
                    <div className="lg:col-span-6 relative h-[300px] md:h-[500px] group hidden lg:block">
                        <div className="absolute inset-x-4 -inset-y-4 bg-primary/5 rounded-3xl rotate-2 transition-transform group-hover:rotate-0"></div>
                        <Image
                            src={curriculumData.image.src || "/placeholder.svg"}
                            alt={curriculumData.image.alt}
                            fill
                            className="object-cover rounded-3xl shadow-xl relative z-10"
                            priority
                        />
                    </div>

                    {/* Right side Accordion Modules */}
                    <div className="lg:col-span-6 space-y-4">
                        {curriculumData.modules.map((module) => {
                            const isExpanded = expandedId === module.id;
                            return (
                                <div
                                    key={module.id}
                                    className={`group transition-all duration-300 rounded-lg ${isExpanded
                                        ? "bg-white ring-1 ring-[#deb100]/30 shadow-[0_10px_30px_rgba(180,134,42,0.08)]"
                                        : "bg-white border border-[#E8ECF4] hover:border-[#deb100]/20"
                                        }`}
                                >
                                    <button
                                        onClick={() => setExpandedId(isExpanded ? null : module.id)}
                                        className="w-full px-4 py-4 md:px-6 md:py-5 flex items-center gap-4 md:gap-5 text-left"
                                        aria-expanded={isExpanded}
                                    >
                                        {/* Module Number/Index */}
                                        <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center font-bold text-sm md:text-base border-2 transition-colors duration-300 ${isExpanded
                                            ? "bg-[#071324] border-[#071324] text-[#fed700]"
                                            : "bg-[#071324] border-[#071324] text-[#fed700]"
                                            }`}>
                                            {module.number || `0${module.id}`}
                                        </div>

                                        <div className="flex-grow">
                                            <h3 className={`text-sm md:text-lg font-bold font-sans tracking-tight transition-colors duration-300 ${isExpanded ? "text-[#071324]" : "text-[#071324]"}`}>
                                                {module.title}
                                            </h3>
                                            <p className="text-[10px] md:text-sm text-gray-500 font-medium font-sans mt-0.5">
                                                {module.subtitle}
                                            </p>
                                        </div>

                                        <div className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                                            <ChevronDown size={20} className={isExpanded ? "text-[#fed700]" : "text-gray-400"} />
                                        </div>
                                    </button>

                                    {/* Expanded Content */}
                                    {isExpanded && module.items && (
                                        <div className="px-4 pb-5 md:px-6 md:pb-6 pt-0 animate-in slide-in-from-top-2 duration-300">
                                            <div className="h-[1px] w-full bg-gray-100 mb-4" />
                                            <ul className="space-y-3">
                                                {module.items.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 group/item">
                                                        <div className="flex-shrink-0 mt-0.5 w-5 h-5 md:w-6 md:h-6 rounded bg-blue-50 flex items-center justify-center text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                                                            <Play size={10} fill="currentColor" className="md:w-3 md:h-3" />
                                                        </div>
                                                        <span className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* CTA Button */}
                        <div className="pt-6 flex justify-center lg:justify-start">
                            <a
                                href={curriculumData.fullCurriculumHref}
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#071324] text-[#fed700] font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <span className="text-sm uppercase tracking-wider">{curriculumData.fullCurriculumLabel}</span>
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
