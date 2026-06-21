import useScrollReveal from '../hooks/useScrollReveal'
import Hero from '../sections/Hero'
import TrustBar from '../sections/TrustBar'
import Categories from '../sections/Categories'
import HowItWorks from '../sections/HowItWorks'
import Services from '../sections/Services'
import FeaturedProducts from '../sections/FeaturedProducts'
import WhyEyeconic from '../sections/WhyEyeconic'
import PrescriptionBanner from '../sections/PrescriptionBanner'
import Articles from '../sections/Articles'
import Testimonials from '../sections/Testimonials'
import CTA from '../sections/CTA'
import FAQ from '../sections/FAQ'
import '../sections/home.css'

export default function Home() {
  useScrollReveal()

  return (
    <main>
      <Hero />
      <TrustBar />
      <Categories />
      <FeaturedProducts />
      <HowItWorks />
      <Services />
      <WhyEyeconic />
      <PrescriptionBanner />
      <Articles />
      <Testimonials />
      <CTA />
      <FAQ />
    </main>
  )
}
