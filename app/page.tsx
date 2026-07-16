import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/home/Hero'
import { TrustStrip } from '@/components/home/TrustStrip'
import { CategoriesGrid } from '@/components/home/CategoriesGrid'
import { HowItWorks } from '@/components/home/HowItWorks'
import { WhyVorqumi } from '@/components/home/WhyVorqumi'
import { FeaturedPros } from '@/components/home/FeaturedPros'
import { ImpactStats } from '@/components/home/ImpactStats'
import { Testimonials } from '@/components/home/Testimonials'
import { SupplierCTA } from '@/components/home/SupplierCTA'
import { AppDownload } from '@/components/home/AppDownload'
import { FAQ } from '@/components/home/FAQ'
import { FinalCTA } from '@/components/home/FinalCTA'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <TrustStrip />
      <CategoriesGrid />
      <HowItWorks />
      <WhyVorqumi />
      <FeaturedPros />
      <ImpactStats />
      <Testimonials />
      <SupplierCTA />
      <AppDownload />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}