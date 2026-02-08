"use client"

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronLeft, ShieldCheck, FileText, CreditCard, AlertTriangle, Scale } from 'lucide-react'

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-secondary/30">
            <Header />
            <main className="pt-12 pb-24">
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
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Terms of Service</h1>
                        <p className="text-slate-500 font-medium tracking-wide">
                            Last Updated: February 2025
                        </p>
                    </header>

                    <div className="space-y-6">
                        {/* Section 1: Acceptance */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Acceptance of Terms</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        By accessing or using the MedsBee website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please refrain from using our platform.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Use of Content */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Use of Content</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        All course materials, videos, and resources provided through MedsBee are for your personal, non-commercial use only. Unauthorized distribution or reproduction of our content is strictly prohibited.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Enrollment and Payments */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <CreditCard className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Enrollment and Payments</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        Course enrollment is subject to payment of the specified fees. We reserve the right to modify pricing or content at any time. Our 100% Money-Back Guarantee is subject to the terms specified during checkout.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Limitation of Liability */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Limitation of Liability</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        MedsBee provides educational content only. We are not responsible for any financial decisions or outcomes resulting from the use of our materials. Always consult with a professional advisor.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Governing Law */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Scale className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Governing Law</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        These terms are governed by the laws of the jurisdiction in which MedsBee operates. Any disputes shall be resolved in the appropriate local courts.
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
