export interface PricingTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  tagline: string;
  features: string[];
  cta: string;
  popular?: boolean;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'single',
    name: '🧪 Single Test',
    price: 9,
    description: 'Run one simulation with 100 AI responses. Ideal for quick validation.',
    tagline: 'Quick idea validation',
    features: [
      '100 synthetic responses',
      'Likert distribution + rationales',
      'PDF export',
      'Basic persona controls'
    ],
    cta: 'Join Waitlist',
  },
  {
    id: 'pack5',
    name: '⚙️ 5-Pack',
    price: 35,
    originalPrice: 45,
    description: 'Test multiple ideas or variants.',
    tagline: 'Compare campaigns fast',
    features: [
      '5 simulations total',
      'Priority processing',
      'CSV + PDF exports',
      'Email support'
    ],
    cta: 'Join Waitlist'
  },
  {
    id: 'pack20',
    name: '🚀 20-Pack',
    price: 99,
    originalPrice: 140,
    description: 'For teams or agencies running frequent tests. Includes persona customization + API access.',
    tagline: 'Scale testing for teams',
    features: [
      '20 simulations total',
      'Full persona customization',
      'API access',
      'Priority support'
    ],
    cta: 'Join Waitlist',
  }
];

export const faqData = [
  {
    question: "How accurate are the results?",
    answer: "The underlying SSR methodology achieves approximately 90% of human test–retest reliability on validated consumer datasets, benchmarked across 9,000 survey participants. This gives you the realism of human focus-group data, without the cost or waiting."
  },
  {
    question: "Can I upload images or mockups?",
    answer: "Yes. Upload product visuals or packaging mockups — SimuPanel automatically captions and integrates them into the simulation context."
  },
  {
    question: "How long does a test take?",
    answer: "Most simulations complete in under 60 seconds. Larger multi-test batches may take a few minutes, but every result is generated in real time."
  },
  {
    question: "What data do you store?",
    answer: "Only anonymized concept text and aggregated response distributions for benchmarking. We don't store personal information, uploaded files, or customer content beyond your active session."
  },
  {
    question: "Can I use it for any industry?",
    answer: "Yes. The model adapts to consumer language across categories — from CPG to SaaS to apparel. Results are context-aware and calibrated to your chosen persona."
  },
  {
    question: "Do I need any technical setup?",
    answer: "No. Just paste your concept or upload a mockup, select a persona, and click Run Test. Everything happens automatically in the background."
  }
];
