import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Results from './components/Results'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <HowItWorks />
        <Results />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
