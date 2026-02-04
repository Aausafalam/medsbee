"use client"

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
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
                        <h1 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight leading-none uppercase">Privacy Policy</h1>
                        <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-[0.2em] flex items-center gap-3">
                            <span className="w-10 h-0.5 bg-secondary"></span>
                            Last Updated: February 2025
                        </p>
                    </header>

                    <div className="space-y-12 text-gray-700 leading-relaxed md:text-base">
                        {/* Introduction */}
                        <section className="space-y-4">
                            <p className="font-semibold text-lg text-gray-900 leading-snug">
                                This Privacy Policy (the “Policy”) governs the manner in which the Platform collects, uses, maintains and discloses information of its users.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base">
                                The Policy also describes the practices that We apply to such user information, user’s privacy rights and choices regarding their information. To clarify, this Policy applies to all users of the Platform (referred to as “Learners”, “You”, “Your”).
                            </p>
                            <p className="text-gray-600 text-sm md:text-base">
                                By accessing and using the Platform, providing Your Personal Information, or by otherwise signalling Your agreement when the option is presented to You, You consent to the collection, use, and disclosure of information described in this Policy and Terms of Use and we disclaim all the liabilities arising therefrom.
                            </p>
                        </section>

                        {/* 1. PERSONAL INFORMATION */}
                        <section id="personal-information" className="space-y-6 group">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black bg-primary text-white w-6 h-6 flex items-center justify-center rounded-md">01</span>
                                <h2 className="text-xl md:text-2xl font-black text-primary tracking-tight uppercase">Personal Information</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-3">
                                    <p className="text-sm md:text-base">
                                        <strong className="text-primary font-bold">Personal Information:</strong> shall mean the information which identifies a Learner i.e., first and last name, identification number, email address, age, gender, location, photograph and/or phone number provided at the time of registration or any time thereafter on the Platform.
                                    </p>
                                    <p className="text-sm md:text-base">
                                        <strong className="text-primary font-bold">Sensitive Personal Information:</strong> shall include (i) passwords and financial data, (ii) health data, (iii) official identifiers (Aadhar, passport, etc.), (iv) biometric data, or (v) other data categorized as ‘sensitive’ under the Digital Personal Data Protection Act, 2023 (DPDPA), GDPR, and CCPA.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 2. INFORMATION WE COLLECT */}
                        <section id="information-collection" className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black bg-primary text-white w-6 h-6 flex items-center justify-center rounded-md">02</span>
                                <h2 className="text-xl md:text-2xl font-black text-primary tracking-tight uppercase">Information We Collect</h2>
                            </div>

                            <p className="text-sm md:text-base">We collect information in a variety of ways, including when You visit our Platform, register, and in connection with other activities.</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-6 rounded-2xl bg-white border-2 border-gray-50 hover:border-secondary/30 transition-all space-y-3">
                                    <h3 className="font-black text-primary uppercase text-[10px] tracking-widest">Personal Identification</h3>
                                    <p className="text-xs text-gray-500 font-medium">We collect names and email addresses voluntarily submitted by You. You can refuse to provide this, though it may limit your access to some features.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border-2 border-gray-50 hover:border-secondary/30 transition-all space-y-3">
                                    <h3 className="font-black text-primary uppercase text-[10px] tracking-widest">Non-Personal Data</h3>
                                    <p className="text-xs text-gray-500 font-medium">Browser name, language preference, referring site, operating system, and ISP details are collected to optimize performance.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border-2 border-gray-50 hover:border-secondary/30 transition-all space-y-3">
                                    <h3 className="font-black text-primary uppercase text-[10px] tracking-widest">Cookies & Tracking</h3>
                                    <p className="text-xs text-gray-500 font-medium">A cookie is a string of information that a website stores on a visitor’s computer. We use them for record-keeping and to enhance User experience.</p>
                                </div>
                            </div>
                        </section>

                        {/* 3. HOW WE USE AND SHARE */}
                        <section id="usage" className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black bg-primary text-white w-6 h-6 flex items-center justify-center rounded-md">03</span>
                                <h2 className="text-xl md:text-2xl font-black text-primary tracking-tight uppercase">Usage & Sharing</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-3 p-5 rounded-xl bg-primary/5 border border-primary/10">
                                    <div className="w-1 h-auto bg-primary rounded-full"></div>
                                    <p className="font-medium text-gray-800 text-sm md:text-base">
                                        We do not share Your Personal Information with anyone except to comply with laws, develop our products, or protect our rights.
                                    </p>
                                </div>

                                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                                        <div className="text-sm">
                                            <strong className="text-gray-900 block font-bold mb-1">Platform Access:</strong>
                                            To allow You to access the Platform, provide customer service, and fulfil purchases.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                                        <div className="text-sm">
                                            <strong className="text-gray-900 block font-bold mb-1">Safety & Improvement:</strong>
                                            To prevent criminal activity, fraud, and to improve the Platform administration.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                                        <div className="text-sm">
                                            <strong className="text-gray-900 block font-bold mb-1">Communication:</strong>
                                            To send text messages, WhatsApp, or emails about orders, promotions, or to receive feedback.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 4. YOUR RIGHTS */}
                        <section id="rights" className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black bg-primary text-white w-6 h-6 flex items-center justify-center rounded-md">04</span>
                                <h2 className="text-xl md:text-2xl font-black text-primary tracking-tight uppercase">Your Rights</h2>
                            </div>

                            <p className="text-sm">You have significant control over your data. Depending on your location (India, EU/EEA, UK, California), you have specific rights:</p>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { title: "Confirmation", desc: "Access to your info." },
                                    { title: "Correction", desc: "Rectify inaccurate data." },
                                    { title: "Erasure", desc: "Permanently delete data." },
                                    { title: "Portability", desc: "Request data transfer." },
                                    { title: "Objection", desc: "Object to processing." },
                                    { title: "Restriction", desc: "Limit data usage." }
                                ].map((right, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100 transition-colors hover:bg-white hover:shadow-md">
                                        <h4 className="font-black text-primary mb-1 text-[10px] uppercase tracking-wider">{right.title}</h4>
                                        <p className="text-[11px] text-gray-500 font-medium leading-tight">{right.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 5. DATA LOCATION & PROTECTION */}
                        <section id="protection" className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black bg-primary text-white w-6 h-6 flex items-center justify-center rounded-md">05</span>
                                <h2 className="text-xl md:text-2xl font-black text-primary tracking-tight uppercase">Data & Protection</h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl border border-gray-100 space-y-4">
                                    <h3 className="text-sm font-black text-primary tracking-tight uppercase">Cross-Border Data Transfer</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">
                                        Your information is stored and processed in India on Amazon Web Service (AWS) servers. If you use our Platform from the USA, EU, EEA, or UK, you consent to this transfer.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl border border-gray-100 space-y-4">
                                    <h3 className="text-sm font-black text-primary tracking-tight uppercase">Storage Duration</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">
                                        We retain information for as long as required for legal or business compliances. We take all measures reasonably necessary to protect against unauthorized access.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 6. GRIEVANCES */}
                        <section id="grievances" className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black bg-primary text-white w-6 h-6 flex items-center justify-center rounded-md">06</span>
                                <h2 className="text-xl md:text-2xl font-black text-primary tracking-tight uppercase">Grievances</h2>
                            </div>

                            <div className="p-8 rounded-2xl border border-gray-100 text-primary text-center space-y-4">
                                <h3 className="text-2xl font-black tracking-tight uppercase italic">Have Questions?</h3>
                                <p className="font-bold max-w-lg mx-auto text-sm text-gray-500">
                                    If you wish to exercise your rights, or have concerns about privacy, please write to us with a thorough description of your concern.
                                </p>
                                <div className="pt-4">
                                    <Link
                                        href="mailto:contact@medsbee.com"
                                        className="inline-block bg-primary text-white px-10 py-4 rounded-full font-black hover:scale-105 transition-transform shadow-xl text-sm uppercase tracking-widest"
                                    >
                                        contact@medsbee.com
                                    </Link>
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

