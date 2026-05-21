import NeonLineCityHero from '../sections/NeonLineCityHero'
import TrustedClients from '../sections/TrustedClients'
import SolutionSection from '../sections/SolutionSection'
import StatsSection from '../sections/StatsSection'
import ServicesOverview from '../sections/ServicesOverview'
import CTASection from '../sections/CTASection'

export default function Home() {
  return (
    <main>
      <NeonLineCityHero />
      <TrustedClients />
      <SolutionSection />
      <StatsSection />
      <ServicesOverview />
      <CTASection />
    </main>
  )
}
