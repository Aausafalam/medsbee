"use client"

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CookiePolicy() {
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

                    <h1 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tight">Cookie Policy</h1>

                    <div className="prose prose-blue prose-lg max-w-none text-gray-600 space-y-8 font-medium">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">What are Cookies?</h2>
                            <p>
                                Cookies are small text files that are stored on your device when you visit a website. They help the website recognize your device and remember information about your visit.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">How We Use Cookies</h2>
                            <p>
                                We use cookies to enhance your browsing experience, provide secure login, analyze site traffic, and personalize content. These cookies help us understand how you interact with our plateforme.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Types of Cookies We Use</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                                <li><strong>Analytical Cookies:</strong> Help us improve our website by tracking usage patterns.</li>
                                <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Managing Cookies</h2>
                            <p>
                                You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
