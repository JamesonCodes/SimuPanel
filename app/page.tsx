import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatMakesItDifferent from '@/components/WhatMakesItDifferent';
import WhyTeamsLoveIt from '@/components/WhyTeamsLoveIt';
import HowItWorks from '@/components/HowItWorks';
import Results from '@/components/Results';
import UnderTheHood from '@/components/UnderTheHood';
import WhoItsFor from '@/components/WhoItsFor';
import Pricing from '@/components/Pricing';
import Science from '@/components/Science';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatMakesItDifferent />
      <WhyTeamsLoveIt />
      <HowItWorks />
      <Results />
      <UnderTheHood />
      <WhoItsFor />
      <Pricing />
      <Science />
      <FAQ />
      <FinalCTA />
    </main>
  );
}