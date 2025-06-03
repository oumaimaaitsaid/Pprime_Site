import HeroBanner from "@/components/hero-banner"
import Stats from "@/components/stats"
import AboutSection from "@/components/about-section"
import PartnersSection from "@/components/partners-section"
import TeamSection from "@/components/team-section"
import TestimonialsSection from "@/components/testimonials-section"
import SectorsSection from "@/components/sectors-section"

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Stats />
      <SectorsSection />
      <AboutSection />
      <PartnersSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  )
}
