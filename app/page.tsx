import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HowToBuySection } from "@/components/how-to-buy"
import { EvolutionSection } from "@/components/evolution-section"
import { SocialFeed } from "@/components/social-feed"
import { FuelingSection } from "@/components/fueling-section"
import { UtilitySection } from "@/components/utility-section"
import { PodcastSection } from "@/components/podcast-section"
import { NewsletterForm } from "@/components/newsletter-form"
import { Footer } from "@/components/footer"
import Navbar from "@/components/Navbar"
import { BuySection } from "@/components/buy-section"
import MakingWaves from "@/components/Making-waves"
import OurPartners from "@/components/OurPartners"

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <SocialFeed />
      <AboutSection />
      <UtilitySection />
      <HowToBuySection />
      <MakingWaves/>
      <OurPartners/>
      {/* <BuySection /> */}
      <EvolutionSection />  
      {/* <FuelingSection /> */}
      {/* <UtilitySection /> */}
      <PodcastSection />
      <NewsletterForm />
      <Footer />
    </main>
  )
}

