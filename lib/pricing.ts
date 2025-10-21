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
    name: '🧪 Single Test',
    price: 9,
    description: 'Run one simulation with 100 synthetic responses. Perfect for quick validation or product testing.',
    features: [
      '100 synthetic responses',
      'Likert distribution + rationales',
      'PDF export',
      'Basic persona controls'
    ],
    cta: 'Run Test →',
  },
  {
    id: 'pack5',
    name: '⚙️ 5-Pack',
    price: 35,
    originalPrice: 45,
    description: 'Run five simulations. Best for testing multiple concepts or campaigns.',
    features: [
      '5 simulations total',
      'Priority processing',
      'CSV + PDF exports',
      'Email support'
    ],
    cta: 'Buy 5-Pack →',
    popular: true,
    badge: 'Save $10'
  },
  {
    id: 'pack20',
    name: '🚀 20-Pack',
    price: 99,
    originalPrice: 140,
    description: 'Run twenty simulations. Ideal for teams or researchers running frequent tests.',
    features: [
      '20 simulations total',
      'Full persona customization',
      'API access',
      'Priority support'
    ],
    cta: 'Buy 20-Pack →',
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
