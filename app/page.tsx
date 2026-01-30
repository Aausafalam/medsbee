import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Roadmap from '@/components/Roadmap'
import Instructor from '@/components/Instructor'

const Curriculum = dynamic(() => import('@/components/Curriculum'))
const Features = dynamic(() => import('@/components/Features'))
const SneakPeek = dynamic(() => import('@/components/SneakPeek'))
const Pricing = dynamic(() => import('@/components/Pricing'))
const FAQ = dynamic(() => import('@/components/FAQ'))
const Footer = dynamic(() => import('@/components/Footer'))
const StickyCTA = dynamic(() => import('@/components/StickyCTA'))

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
