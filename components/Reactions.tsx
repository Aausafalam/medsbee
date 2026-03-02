"use client";

import { reactionsData } from "@/data/reactions";
import { Phone, MessageCircle } from "lucide-react";

export default function Reactions() {
    return (
        <section id="reactions" className="py-10 md:py-16 bg-[#0B1829] overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-6 md:mb-10 text-left">
                    <p className="text-[9px] md:text-sm font-bold text-[#deb100] mb-2 md:mb-3 uppercase tracking-[0.2em] font-sans">
                        {reactionsData.title}
                    </p>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-tight tracking-normal font-bold max-w-4xl mb-3">
                        {reactionsData.titleHighlight}
                    </h2>
                    <p className="text-xs md:text-lg text-gray-400  font-sans max-w-4xl">
                        {reactionsData.subtitle}
                    </p>
                </div>

                {/* Chat Cards Grid - 2 columns on mobile */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {/* Dr. Priya M. - Top Left */}
                    <div className="bg-[#0d2b2a] rounded-xl md:rounded-2xl overflow-hidden border border-[#1a4a47]">
                        {/* Chat Header */}
                        <div className="flex items-center justify-between px-2.5 py-2 md:px-4 md:py-3 bg-[#0d2b2a] border-b border-[#1a4a47]">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-sm md:text-base">
                                    {reactionsData.messages[0].avatar}
                                </div>
                                <div>
                                    <p className="text-white text-[11px] md:text-sm font-semibold leading-tight">{reactionsData.messages[0].name}</p>
                                    <p className="text-green-400 text-[8px] md:text-[10px] flex items-center gap-0.5">
                                        <span className="w-1 h-1 rounded-full bg-green-400"></span>
                                        {reactionsData.messages[0].status}
                                    </p>
                                </div>
                            </div>
                            <Phone size={14} className="text-gray-400 hidden sm:block" />
                        </div>
                        {/* Chat Messages */}
                        <div className="p-2.5 md:p-4 space-y-2 bg-[#0a1f1e]">
                            {reactionsData.messages[0].messages.map((msg, idx) => (
                                <div key={idx} className="flex flex-col items-end">
                                    <div className="bg-[#1a3d3a] rounded-xl rounded-tr-sm px-2.5 py-1.5 md:px-4 md:py-2 max-w-[95%]">
                                        <p className="text-white text-[10px] md:text-[13px] leading-snug">{msg.text}</p>
                                    </div>
                                    <span className="text-gray-500 text-[8px] md:text-[10px] mt-0.5 mr-0.5">{msg.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rohan K. - Top Right */}
                    <div className="bg-[#0d2b2a] rounded-xl md:rounded-2xl overflow-hidden border border-[#1a4a47]">
                        {/* Chat Header */}
                        <div className="flex items-center justify-between px-2.5 py-2 md:px-4 md:py-3 bg-[#0d2b2a] border-b border-[#1a4a47]">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-sm md:text-base">
                                    {reactionsData.messages[1].avatar}
                                </div>
                                <div>
                                    <p className="text-white text-[11px] md:text-sm font-semibold leading-tight">{reactionsData.messages[1].name}</p>
                                    <p className="text-green-400 text-[8px] md:text-[10px] flex items-center gap-0.5">
                                        <span className="w-1 h-1 rounded-full bg-green-400"></span>
                                        {reactionsData.messages[1].status}
                                    </p>
                                </div>
                            </div>
                            <Phone size={14} className="text-gray-400 hidden sm:block" />
                        </div>
                        {/* Chat Messages */}
                        <div className="p-2.5 md:p-4 space-y-2 bg-[#0a1f1e]">
                            {reactionsData.messages[1].messages.map((msg, idx) => (
                                <div key={idx} className={`flex flex-col ${msg.isReaction ? 'items-start' : 'items-end'}`}>
                                    {msg.isReaction ? (
                                        <div className="flex items-center gap-1 bg-[#1a3d3a] rounded-full px-2 py-1">
                                            <span className="text-xs text-gray-300 md:text-base">{msg.text}</span>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="bg-[#1a3d3a] rounded-xl rounded-tr-sm px-2.5 py-1.5 md:px-4 md:py-2 max-w-[95%]">
                                                <p className="text-white text-[10px] md:text-[13px] leading-snug">{msg.text}</p>
                                            </div>
                                            <span className="text-gray-500 text-[8px] md:text-[10px] mt-0.5 mr-0.5">{msg.time}</span>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Empty Placeholder Card - Bottom Left */}
                    <div className="bg-[#0d1f2d] rounded-xl md:rounded-2xl border border-dashed border-[#2a3a4a] flex flex-col items-center justify-center py-8 md:py-12 min-h-[140px] md:min-h-[200px]">
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#1a2a3a] flex items-center justify-center mb-2 md:mb-3">
                            <MessageCircle size={16} className="text-gray-500 md:w-5 md:h-5" />
                        </div>
                        <p className="text-gray-500 text-[10px] md:text-sm font-medium text-center px-2">Drop your WhatsApp screenshot here</p>
                    </div>

                    {/* Dr. Sneha R. - Bottom Right */}
                    <div className="bg-[#0d2b2a] rounded-xl md:rounded-2xl overflow-hidden border border-[#1a4a47]">
                        {/* Chat Header */}
                        <div className="flex items-center justify-between px-2.5 py-2 md:px-4 md:py-3 bg-[#0d2b2a] border-b border-[#1a4a47]">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-sm md:text-base">
                                    {reactionsData.messages[2].avatar}
                                </div>
                                <div>
                                    <p className="text-white text-[11px] md:text-sm font-semibold leading-tight">{reactionsData.messages[2].name}</p>
                                    <p className="text-green-400 text-[8px] md:text-[10px] flex items-center gap-0.5">
                                        <span className="w-1 h-1 rounded-full bg-green-400"></span>
                                        {reactionsData.messages[2].status}
                                    </p>
                                </div>
                            </div>
                            <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-600 rounded flex items-center justify-center">
                                <span className="text-white text-[8px] md:text-[10px] font-bold">in</span>
                            </div>
                        </div>
                        {/* Chat Messages */}
                        <div className="p-2.5 md:p-4 space-y-2 bg-[#0a1f1e]">
                            {reactionsData.messages[2].messages.map((msg, idx) => (
                                <div key={idx} className="flex flex-col items-end">
                                    <div className="bg-[#1a3d3a] rounded-xl rounded-tr-sm px-2.5 py-1.5 md:px-4 md:py-2 max-w-[95%]">
                                        <p className="text-white text-[10px] md:text-[13px] leading-snug">{msg.text}</p>
                                    </div>
                                    <span className="text-gray-500 text-[8px] md:text-[10px] mt-0.5 mr-0.5">{msg.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Stats */}
                <div className="mt-6 md:mt-10 flex">
                    <div className="inline-flex items-center gap-1 md:gap-2 bg-[#0d1f2d] border border-[#1a2a3a] rounded-full px-3 py-2 md:px-6 md:py-3">
                        <MessageCircle size={14} className="text-gray-400 md:w-4 md:h-4" />
                        <span className="text-gray-300 text-[0.7rem] md:text-base">{reactionsData.footerText}</span>
                        <span className="text-[#F5C518] font-bold text-[0.7rem] md:text-base">{reactionsData.footerHighlight}</span>
                        <span className="text-gray-300 text-[0.7rem] md:text-base">{reactionsData.footerSubtext}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
