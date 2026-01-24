"use client"

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
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

                    <h1 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tight">Privacy Policy</h1>

                    <div className="prose prose-blue prose-lg max-w-none text-gray-600 space-y-8 font-medium">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Introduction</h2>
                            <p>
                                At MedsBee, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website and services.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Information We Collect</h2>
                            <p>
                                We collect information that you provide to us directly, such as when you enroll in a course, subscribe to our newsletter, or contact our support team. This may include your name, email address, professional details, and payment information.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">How We Use Your Information</h2>
                            <p>
                                Your information is used to provide and improve our services, communicate with you about your account and our products, and ensure a personalized and secure experience. We never sell your personal data to third parties.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. Your trust is our priority.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
                            <p>
                                If you have any questions or concerns regarding this Privacy Policy, please contact us at support@medsbee.com.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
