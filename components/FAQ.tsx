"use client";

import { useState } from "react";
import { faqData } from "@/data/faq";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const [expandedId, setExpandedId] = useState<number | null>(1);

    return (
        <section id="faqs" className="py-10 md:py-12 bg-[#F7F9FC] overflow-hidden">
            <div className="mx-auto max-w-[1400px] px-4 md:px-6">

                {/* Section Header - Matching Curriculum/Roadmap Style */}
                <div className="max-w-4xl mb-8 md:mb-12 text-left px-2">
                    <p className="text-[9px] md:text-xs font-bold text-[#b4862a] mb-1 md:mb-3 uppercase tracking-[0.2em] font-sans">
                        {faqData.title}
                    </p>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#071324] leading-normal md:leading-[1.1] tracking-normal font-bold">
                        {faqData.subtitle}
                    </h2>
                </div>

                {/* FAQ Accordion - Matching Curriculum Style */}
                <div className="max-w-6xl mx-auto space-y-4">
                    {faqData.faqs.map((faq, index) => {
                        const isExpanded = expandedId === faq.id;
                        return (
                            <div
                                key={faq.id}
                                className={`group transition-all duration-300 rounded-lg ${isExpanded
                                    ? "bg-white ring-1 ring-[#deb100]/30 shadow-[0_10px_30px_rgba(180,134,42,0.08)]"
                                    : "bg-white border border-[#E8ECF4] hover:border-[#deb100]/20"
                                    }`}
                            >
                                <button
                                    onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                                    className="w-full cursor-pointer px-4 py-4 flex items-center gap-4 md:gap-5 text-left"
                                    aria-expanded={isExpanded}
                                >
                                    {/* Question Index/Number Box */}
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm md:text-base border-2 transition-colors duration-300 ${isExpanded
                                        ? "bg-[#071324] border-[#071324] text-[#fed700]"
                                        : "bg-[#071324] border-[#071324] text-[#fed700]"
                                        }`}>
                                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="text-sm md:text-lg font-bold font-sans tracking-tight text-[#071324]">
                                            {faq.question}
                                        </h3>
                                    </div>

                                    <div className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                                        <ChevronDown size={20} className={isExpanded ? "text-[#fed700]" : "text-gray-400"} />
                                    </div>
                                </button>

                                {/* Expanded Content */}
                                {isExpanded && (
                                    <div className="px-4 pb-5 md:px-6 md:pb-6 pt-0 animate-in slide-in-from-top-2 duration-300">
                                        <div className="h-[1px] w-full bg-gray-100 mb-4" />
                                        <p className="text-xs md:text-sm text-gray-600 font-medium font-sans leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

