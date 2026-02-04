"use client"

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RefundPolicy() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-secondary/30">
            <Header />
            <main className="py-12">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb / Back */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-600 transition-colors text-xs group"
                        >
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-50 group-hover:bg-primary/5 transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 12H5m7-7-7 7 7 7" />
                                </svg>
                            </div>
                            Back to Home
                        </Link>
                    </div>

                    <header className="mb-10 border-b border-gray-100 pb-8">
                        <h1 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight leading-none uppercase">Refund Policy</h1>
                        <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-[0.2em] flex items-center gap-3">
                            <span className="w-10 h-0.5 bg-secondary"></span>
                            Last Updated: February 2025
                        </p>
                    </header>

                    <div className="max-w-[1000px] space-y-12 text-gray-700 leading-relaxed">
                        {/* 14-Day Guarantee Card */}
                        <section className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 md:p-12 text-white shadow-2xl">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-secondary opacity-20 blur-3xl"></div>
                            <div className="relative z-10 space-y-6">
                                <span className="inline-block rounded-full bg-secondary px-4 py-1 text-[10px] font-black uppercase tracking-widest text-primary">100% Risk Free</span>
                                <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">14-Day No Questions Asked Refund Policy</h2>
                                <p className="max-w-2xl text-lg font-medium text-primary-foreground/90">
                                    We believe in the value of our content. If you're not satisfied with the course, we'll refund 100% of your payment within 14 days of purchase.
                                </p>
                            </div>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            {/* Process Section */}
                            <section className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black bg-gray-100 text-primary w-6 h-6 flex items-center justify-center rounded-md">01</span>
                                    <h3 className="text-xl font-black text-primary uppercase tracking-tight">Processing Timeline</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                                        <p className="text-sm font-bold text-gray-900 uppercase tracking-widest text-[10px]">Step 1: Initiation</p>
                                        <p className="text-sm">Once you contact us, we process your refund request within <span className="font-bold text-primary">24 hours</span>. No complicated forms or interviews required.</p>
                                    </div>
                                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                                        <p className="text-sm font-bold text-gray-900 uppercase tracking-widest text-[10px]">Step 2: Bank Credit</p>
                                        <p className="text-sm">The amount will be credited back to your original payment method. Depending on your bank, this usually takes <span className="font-bold text-primary">3-5 business days</span>.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Eligibility Section */}
                            <section className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black bg-gray-100 text-primary w-6 h-6 flex items-center justify-center rounded-md">02</span>
                                    <h3 className="text-xl font-black text-primary uppercase tracking-tight">Eligibility</h3>
                                </div>
                                <div className="space-y-4 text-sm font-medium text-gray-600">
                                    <p>The refund policy is valid for all users who have purchased the course within the last 14 days.</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                                            <span>The 14-day window starts from the exact time of purchase.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                                            <span>Refunds are only issued to the original source of payment.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                                            <span>Post the 14-day window, no refund requests will be entertained.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        {/* How to Apply */}
                        <section className="pt-12 border-t border-gray-100 text-center space-y-8">
                            <h3 className="text-2xl font-black text-primary uppercase tracking-tight">How to initiate a refund?</h3>
                            <p className="max-w-xl mx-auto text-gray-500 font-medium text-sm">
                                Reach out to us via any of our support channels below with your order details. We'll handle the rest.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="https://wa.me/919999999999" // Updated during Contact Us implementation
                                    target="_blank"
                                    className="flex items-center gap-3 bg-primary text-white px-8 py-3 rounded-full font-black hover:scale-105 transition-all shadow-lg text-sm group"
                                >
                                    WhatsApp Support
                                </Link>
                                <Link
                                    href="mailto:contact@medsbee.com"
                                    className="flex items-center gap-3 bg-white text-primary border-2 border-primary/10 px-8 py-3 rounded-full font-black hover:bg-gray-50 transition-all text-sm"
                                >
                                    contact@medsbee.com
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
