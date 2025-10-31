import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatMakesItDifferent from '@/components/WhatMakesItDifferent';
import HowItWorks from '@/components/HowItWorks';
import UnderTheHood from '@/components/UnderTheHood';
import Results from '@/components/Results';
import WhoItsFor from '@/components/WhoItsFor';
import Science from '@/components/Science';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatMakesItDifferent />
      <HowItWorks />
      <UnderTheHood />
      <Results />
      <WhoItsFor />
      <Science />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}