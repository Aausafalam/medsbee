"use client"

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="py-20 md:py-32">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:text-blue-600 transition-colors"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5m7-7-7 7 7 7" />
                        </svg>
                        Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tight">Terms of Service</h1>

                    <div className="prose prose-blue prose-lg max-w-none text-gray-600 space-y-8 font-medium">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Acceptance of Terms</h2>
                            <p>
                                By accessing or using the MedsBee website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please refrain from using our plateforme.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Use of Content</h2>
                            <p>
                                All course materials, videos, and resources provided through MedsBee are for your personal, non-commercial use only. Unauthorized distribution or reproduction of our content is strictly prohibited.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Enrollment and Payments</h2>
                            <p>
                                Course enrollment is subject to payment of the specified fees. We reserve the right to modify pricing or content at any time. Our 100% Money-Back Guarantee is subject to the terms specified during checkout.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Limitation of Liability</h2>
                            <p>
                                MedsBee provides educational content only. We are not responsible for any financial decisions or outcomes resulting from the use of our materials. Always consult with a professional advisor.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Governing Law</h2>
                            <p>
                                These terms are governed by the laws of the jurisdiction in which MedsBee operates. Any disputes shall be resolved in the appropriate local courts.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
