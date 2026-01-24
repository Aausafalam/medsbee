"use client"

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Disclaimer() {
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

                    <h1 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tight">Disclaimer</h1>

                    <div className="prose prose-blue prose-lg max-w-none text-gray-600 space-y-8 font-medium">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Educational Purposes Only</h2>
                            <p>
                                The information provided by MedsBee is for educational and informational purposes only. It is not intended as, and should not be considered, financial, investment, or professional advice.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">No Financial Advice</h2>
                            <p>
                                MedsBee is not a financial advisor. Any financial decisions you make based on content from our courses or website are your sole responsibility. We recommend consulting with a certified financial planner or professional advisor before making any significant financial commitments.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Accuracy of Information</h2>
                            <p>
                                While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind about the completeness, accuracy, or suitability of the information contained on our plateforme.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Affiliate Disclosure</h2>
                            <p>
                                Some links on our website may be affiliate links. This means we may earn a small commission if you make a purchase through these links, at no additional cost to you.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
