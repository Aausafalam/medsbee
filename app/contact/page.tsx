"use client"

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
                                href="https://wa.me/919999999999" // Placeholder WhatsApp number
                                target="_blank"
                                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-black hover:scale-105 transition-all shadow-xl text-xl"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Need Support? WhatsApp Us
                            </Link>
                        </div>

                        <div className="pt-12 border-t border-gray-100 space-y-6">
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
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
