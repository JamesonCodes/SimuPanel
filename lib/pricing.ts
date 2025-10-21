export interface PricingTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'single',
    name: 'Single Test',
    price: 9,
    description: 'For quick validation.',
    features: [
      '100 responses',
      'Likert + rationales',
      'PDF export',
      'Persona controls'
    ],
    cta: 'Run Test',
  },
  {
    id: 'pack5',
    name: '5 Tests',
    price: 35,
    originalPrice: 45,
    description: 'For small teams testing multiple ideas.',
    features: [
      'Priority compute',
      'CSV + PDF exports',
      'Email support'
    ],
    cta: 'Buy 5-Pack',
    popular: true,
    badge: 'Most Popular'
  },
  {
    id: 'agency',
    name: 'Agency Pack',
    price: 99,
    originalPrice: 140,
    description: 'For agencies and research teams.',
    features: [
      '20 sims',
      'Full persona customization',
      'API access',
      'Priority support'
    ],
    cta: 'Contact Sales',
  }
];

export const faqData = [
  {
    question: "How accurate are the results?",
    answer: "The underlying SSR method achieves ~90% of human test–retest reliability on real consumer data, validated across 9,000 survey participants."
  },
  {
    question: "What models power it?",
    answer: "GPT-4o for response generation and OpenAI's text-embedding-3-small for semantic similarity mapping."
  },
  {
    question: "Can I upload images?",
    answer: "Yes — product mockups are automatically captioned and incorporated into the analysis."
  },
  {
    question: "How long does it take?",
    answer: "Most simulations finish in under a minute, typically around 52 seconds per simulation."
  },
  {
    question: "What data do you store?",
    answer: "Only anonymized concepts and aggregate distributions for benchmarking. We don't store personal information."
  }
];
