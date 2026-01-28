import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SneakPeek from '@/components/SneakPeek'
import SocialProof from '@/components/SocialProof'
import Roadmap from '@/components/Roadmap'
import Highlight from '@/components/Highlight'
import Curriculum from '@/components/Curriculum'
import Instructor from '@/components/Instructor'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Comparison from '@/components/Comparison'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Roadmap />
        {/* <Highlight /> */}
        <Instructor />
        <Curriculum />
        <Features />
        <SneakPeek />
        <Pricing />
        {/* <Comparison /> */}
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  )
}
