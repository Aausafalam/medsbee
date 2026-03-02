"use client";

import { reactionsData } from "@/data/reactions";
import { Phone, MessageCircle } from "lucide-react";

export default function Reactions() {
    return (
        <section id="reactions" className="py-12 md:py-16 bg-[#071324] overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 md:mb-12 text-left">
                    <p className="text-[10px] md:text-sm font-bold text-[#deb100] mb-2 md:mb-4 uppercase tracking-[0.2em] font-sans">
                        {reactionsData.title}
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight tracking-normal font-bold max-w-3xl mb-4">
                        {reactionsData.titleHighlight}
                    </h2>
                    <p className="text-sm md:text-lg text-gray-400 font-medium font-sans max-w-2xl">
                        {reactionsData.subtitle}
                    </p>
                </div>

                {/* Chat Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* Dr. Priya M. - Left Column */}
                    <div className="bg-[#0d2b2a] rounded-2xl md:rounded-3xl overflow-hidden border border-[#1a4a47]">
                        {/* Chat Header */}
                        <div className="flex items-center justify-between px-4 py-3 md:px-5 md:py-4 bg-[#0d2b2a] border-b border-[#1a4a47]">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-base md:text-lg">
                                    {reactionsData.messages[0].avatar}
                                </div>
                                <div>
                                    <p className="text-white text-sm md:text-base font-semibold">{reactionsData.messages[0].name}</p>
                                    <p className="text-green-400 text-[10px] md:text-xs flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                        {reactionsData.messages[0].status}
                                    </p>
                                </div>
                            </div>
                            <Phone size={18} className="text-gray-400" />
                        </div>
                        {/* Chat Messages */}
                        <div className="p-4 md:p-5 space-y-3 bg-[#0a1f1e]">
                            {reactionsData.messages[0].messages.map((msg, idx) => (
                                <div key={idx} className="flex flex-col items-end">
                                    <div className="bg-[#1a3d3a] rounded-2xl rounded-tr-sm px-4 py-2.5 md:px-5 md:py-3 max-w-[90%]">
                                        <p className="text-white text-[13px] md:text-sm leading-relaxed">{msg.text}</p>
                                    </div>
                                    <span className="text-gray-500 text-[10px] md:text-xs mt-1 mr-1">{msg.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rohan K. - Right Column (Top on mobile) */}
                    <div className="bg-[#0d2b2a] rounded-2xl md:rounded-3xl overflow-hidden border border-[#1a4a47]">
                        {/* Chat Header */}
                        <div className="flex items-center justify-between px-4 py-3 md:px-5 md:py-4 bg-[#0d2b2a] border-b border-[#1a4a47]">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-base md:text-lg">
                                    {reactionsData.messages[1].avatar}
                                </div>
                                <div>
                                    <p className="text-white text-sm md:text-base font-semibold">{reactionsData.messages[1].name}</p>
                                    <p className="text-green-400 text-[10px] md:text-xs flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                        {reactionsData.messages[1].status}
                                    </p>
                                </div>
                            </div>
                            <Phone size={18} className="text-gray-400" />
                        </div>
                        {/* Chat Messages */}
                        <div className="p-4 md:p-5 space-y-3 bg-[#0a1f1e]">
                            {reactionsData.messages[1].messages.map((msg, idx) => (
                                <div key={idx} className={`flex flex-col ${msg.isReaction ? 'items-start' : 'items-end'}`}>
                                    {msg.isReaction ? (
                                        <div className="flex items-center gap-2 bg-[#1a3d3a] rounded-full px-3 py-1.5">
                                            <span className="text-lg">{msg.text}</span>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="bg-[#1a3d3a] rounded-2xl rounded-tr-sm px-4 py-2.5 md:px-5 md:py-3 max-w-[90%]">
                                                <p className="text-white text-[13px] md:text-sm leading-relaxed">{msg.text}</p>
                                            </div>
                                            <span className="text-gray-500 text-[10px] md:text-xs mt-1 mr-1">{msg.time}</span>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dr. Sneha R. - Right Column (Bottom on mobile) */}
                    <div className="bg-[#0d2b2a] rounded-2xl md:rounded-3xl overflow-hidden border border-[#1a4a47]">
                        {/* Chat Header */}
                        <div className="flex items-center justify-between px-4 py-3 md:px-5 md:py-4 bg-[#0d2b2a] border-b border-[#1a4a47]">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-base md:text-lg">
                                    {reactionsData.messages[2].avatar}
                                </div>
                                <div>
                                    <p className="text-white text-sm md:text-base font-semibold">{reactionsData.messages[2].name}</p>
                                    <p className="text-green-400 text-[10px] md:text-xs flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                        {reactionsData.messages[2].status}
                                    </p>
                                </div>
                            </div>
                            <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">in</span>
                            </div>
                        </div>
                        {/* Chat Messages */}
                        <div className="p-4 md:p-5 space-y-3 bg-[#0a1f1e]">
                            {reactionsData.messages[2].messages.map((msg, idx) => (
                                <div key={idx} className="flex flex-col items-end">
                                    <div className="bg-[#1a3d3a] rounded-2xl rounded-tr-sm px-4 py-2.5 md:px-5 md:py-3 max-w-[90%]">
                                        <p className="text-white text-[13px] md:text-sm leading-relaxed">{msg.text}</p>
                                    </div>
                                    <span className="text-gray-500 text-[10px] md:text-xs mt-1 mr-1">{msg.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Empty Placeholder Card - Drop Zone */}
                <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-[#0d1f2d] rounded-2xl md:rounded-3xl border border-dashed border-[#2a3a4a] flex flex-col items-center justify-center py-12 md:py-16 min-h-[200px] md:min-h-[280px]">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1a2a3a] flex items-center justify-center mb-4">
                            <MessageCircle size={24} className="text-gray-500" />
                        </div>
                        <p className="text-gray-500 text-sm md:text-base font-medium">Drop your WhatsApp screenshot here</p>
                    </div>
                </div>

                {/* Footer Stats */}
                <div className="mt-8 md:mt-12 flex justify-center">
                    <div className="inline-flex items-center gap-2 bg-[#0d1f2d] border border-[#1a2a3a] rounded-full px-5 py-3 md:px-6 md:py-3.5">
                        <MessageCircle size={16} className="text-gray-400" />
                        <span className="text-gray-400 text-sm md:text-base">{reactionsData.footerText}</span>
                        <span className="text-[#deb100] font-bold text-sm md:text-base">{reactionsData.footerHighlight}</span>
                        <span className="text-gray-400 text-sm md:text-base">{reactionsData.footerSubtext}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
