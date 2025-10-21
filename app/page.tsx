import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Science from '@/components/Science';
import HowItWorks from '@/components/HowItWorks';
import Results from '@/components/Results';
import UnderTheHood from '@/components/UnderTheHood';
import WhoItsFor from '@/components/WhoItsFor';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Science />
      <HowItWorks />
      <Results />
      <UnderTheHood />
      <WhoItsFor />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}