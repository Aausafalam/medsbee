"use client"

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { RefreshCcw, Clock, FileText, CreditCard, AlertTriangle, ChevronLeft } from 'lucide-react'

export default function RefundPolicy() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-secondary/30">
            <Header />
            <main className="pt-12 pb-26">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <div className="mb-10">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-primary/60 hover:text-primary font-semibold transition-colors text-sm group"
                        >
                            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                    </div>

                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Refund Policy</h1>
                        <p className="text-slate-500 font-medium tracking-wide">
                            Last Updated: February 2025
                        </p>
                    </header>

                    <div className="space-y-6">
                        {/* Section 1: Commitment */}
                        <section className="bg-white rounded-3xl p-8 md:p-10  border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <RefreshCcw className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Our Commitment to Your Satisfaction</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        At MedsBee, we are committed to providing high-quality medical education. We want you to be fully satisfied with your purchase. This Refund Policy outlines the terms and conditions for refunds on our courses and services.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Eligibility */}
                        <section className="bg-white rounded-3xl p-8 md:p-10  border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Eligibility for Refunds</h2>
                                    <ul className="space-y-4 text-slate-600">
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">Refund requests must be made within 14 days of purchase.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">You must not have completed more than 25% of the course content.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">Refunds are not available for individual modules or partial course completion.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: How to Request */}
                        <section className="bg-white rounded-3xl p-8 md:p-10  border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">How to Request a Refund</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        To request a refund, please email <a href="mailto:contact@medsbee.com" className="text-blue-600 font-semibold hover:underline">contact@medsbee.com</a>  with your order number or phone number and reason for the refund. Our team will review your request and respond within 3 business days.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Processing */}
                        <section className="bg-white rounded-3xl p-8 md:p-10  border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <CreditCard className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Refund Processing</h2>
                                    <ul className="space-y-4 text-slate-600">
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">Approved refunds will be processed within 5-10 business days.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">Refunds will be issued to the original payment method used for the purchase.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">Any applicable taxes or gateway fees may be deducted from the refund amount.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Non-Refundable */}
                        <section className="bg-white rounded-3xl p-8 md:p-10  border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Non-Refundable Items</h2>
                                    <ul className="space-y-4 text-slate-600">
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">Downloadable course materials once accessed or downloaded.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">Live webinar or consultation sessions that have already taken place.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">Subscription fees for the current billing period.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
