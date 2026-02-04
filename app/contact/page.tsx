"use client"

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MessageCircle } from 'lucide-react'

export default function Contact() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-secondary/30">
            <Header />
            <main className="py-16">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb / Back */}
                    <div className="mb-12">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-600 transition-colors text-sm group"
                        >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 group-hover:bg-primary/5 transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 12H5m7-7-7 7 7 7" />
                                </svg>
                            </div>
                            Back to Home
                        </Link>
                    </div>

                    <div className="max-w-[800px] space-y-12">
                        <header>
                            <h1 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tight leading-none uppercase">Contact Us</h1>
                            <p className="text-lg font-medium text-gray-600 italic">For any support related issues:</p>
                        </header>

                        <div>
                            <Link
                                href="mailto:contact@medsbee.com" // Placeholder WhatsApp number
                                target="_blank"
                                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-black hover:scale-105 transition-all shadow-xl text-xl"
                            >
                                <MessageCircle className='h-4 w-4' />
                                Need Support? Email Us
                            </Link>
                        </div>

                        {/* <div className="pt-12 border-t border-gray-100 space-y-6">
                            <div className="space-y-1">
                                <p className="text-secondary font-black uppercase tracking-widest text-xs">Business Name</p>
                                <p className="text-xl font-bold text-gray-900">Zaan WebVeda Private Limited</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-secondary font-black uppercase tracking-widest text-xs">Registered Head Office</p>
                                <p className="text-xl font-bold text-gray-900">B413, Green Fields Colony, Faridabad, Haryana 121004</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-secondary font-black uppercase tracking-widest text-xs">CIN</p>
                                <p className="text-xl font-bold text-gray-900 tracking-tight">U72200HR2011PTC042820</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
