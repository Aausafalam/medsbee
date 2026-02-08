"use client"

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronLeft, Info, User, Database, Share2, ShieldCheck, Lock, HelpCircle } from 'lucide-react'

export default function PrivacyPolicy() {
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
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Privacy Policy</h1>
                        <p className="text-slate-500 font-medium tracking-wide">
                            Last Updated: February 2025
                        </p>
                    </header>

                    <div className="space-y-6">
                        {/* Introduction */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Info className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">About This Policy</h2>
                                    <div className="text-slate-600 leading-relaxed text-lg space-y-4">
                                        <p>
                                            This Privacy Policy (the “Policy”) governs the manner in which the Platform collects, uses, maintains and discloses information of its users.
                                        </p>
                                        <p>
                                            By accessing and using the Platform, providing Your Personal Information, or by otherwise signalling Your agreement when the option is presented to You, You consent to the collection, use, and disclosure of information described in this Policy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 1: Personal Information */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <User className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4 w-full">
                                    <h2 className="text-2xl font-bold text-slate-900">Personal Information Definitions</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                            <h3 className="font-bold text-primary mb-2">Personal Information</h3>
                                            <p className="text-slate-600 text-sm">
                                                Information identifying a Learner: first and last name, identification number, email address, age, gender, location, photograph and/or phone number provided at registration.
                                            </p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                            <h3 className="font-bold text-primary mb-2">Sensitive Personal Information</h3>
                                            <p className="text-slate-600 text-sm">
                                                Includes passwords, financial data, health data, official identifiers (Aadhar, passport, etc.), and biometric data.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Information We Collect */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Database className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4 w-full">
                                    <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <h3 className="font-bold text-primary">Personal Identification</h3>
                                            <p className="text-slate-600 text-sm">We collect names and email addresses voluntarily submitted by You.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="font-bold text-primary">Non-Personal Data</h3>
                                            <p className="text-slate-600 text-sm">Browser name, language preference, referring site, operating system, and ISP details.</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="font-bold text-primary">Cookies</h3>
                                            <p className="text-slate-600 text-sm">We use cookies to enhance User experience and for record-keeping purposes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Usage & Sharing */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Share2 className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Usage & Sharing</h2>
                                    <p className="text-slate-600 leading-relaxed text-lg mb-4">
                                        We do not share Your Personal Information with anyone except to comply with laws, develop our products, or protect our rights.
                                    </p>
                                    <ul className="space-y-3 text-slate-600">
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span><strong>Platform Access:</strong> To provide access, customer service, and fulfil purchases.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span><strong>Safety & Improvement:</strong> To prevent fraud and improve administration.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                            <span><strong>Communication:</strong> To send updates about orders, promotions, or receive feedback.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Your Rights */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4 w-full">
                                    <h2 className="text-2xl font-bold text-slate-900">Your Rights</h2>
                                    <p className="text-slate-600 text-lg mb-4">You have significant control over your data. Depending on your location, you have rights to:</p>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                        {['Confirmation', 'Correction', 'Erasure', 'Portability', 'Objection', 'Restriction'].map((right) => (
                                            <div key={right} className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 font-semibold text-primary text-center">
                                                {right}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Data Protection */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Lock className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">Data Location & Protection</h2>
                                    <div className="space-y-4 text-slate-600">
                                        <p>
                                            <strong>Cross-Border Data Transfer:</strong> Your information is stored and processed in India on Amazon Web Service (AWS) servers.
                                        </p>
                                        <p>
                                            <strong>Storage Duration:</strong> We retain information for as long as required for legal or business compliances. We take all measures reasonably necessary to protect against unauthorized access.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Grievances */}
                        <section className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <HelpCircle className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4 w-full">
                                    <h2 className="text-2xl font-bold text-slate-900">Grievances & Questions</h2>
                                    <p className="text-slate-600 text-lg">
                                        If you wish to exercise your rights, or have concerns about privacy, please write to us with a thorough description of your concern.
                                    </p>
                                    <div className="pt-2">
                                        <a href="mailto:contact@medsbee.com" className="text-blue-600 font-bold text-lg hover:underline">
                                            contact@medsbee.com
                                        </a>
                                    </div>
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

