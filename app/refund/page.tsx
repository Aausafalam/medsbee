"use client"

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Clock, FileText, CreditCard, AlertTriangle, ChevronLeft } from 'lucide-react'

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
                        {/* Section 1: All Sales Are Final */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">All Sales Are Final</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        This is a digital product delivered instantly upon purchase. Once access is granted, the product cannot be returned, revoked, or exchanged.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: No Refunds Policy */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <CreditCard className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">No Refunds Under Any Circumstances</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg mb-4">
                                        Accordingly, we do not offer refunds, cancellations, or chargebacks under any circumstances, including but not limited to:
                                    </p>
                                    <ul className="space-y-4 text-slate-600">
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">Change of mind</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">Inability to complete or continue the course</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">Misinterpretation of the product description</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span className="text-lg">Personal expectations not being met</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Review Before Purchase */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Review Before Purchase</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        We strongly encourage you to review all product details, descriptions, and sample content carefully before making a purchase. If you have any questions prior to buying, please contact us for clarification.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Agreement */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Your Agreement</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        By completing the purchase, you acknowledge and agree to this No Refund Policy.
                                    </p>
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
