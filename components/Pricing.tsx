'use client';

import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { pricingTiers } from '@/lib/pricing';

const Pricing = () => {
  const handleCtaClick = (tierId: string) => {
    // For all tiers, show coming soon message
    alert('Payment integration coming soon! Contact us at hello@simupanel.com');
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Simple, one-click pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No accounts, no subscriptions, no waiting — just pay per test.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 p-8"
            >

              {/* Tier Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    ${tier.price}
                  </span>
                  {tier.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">
                      ${tier.originalPrice}
                    </span>
                  )}
                </div>
                {tier.originalPrice && (
                  <div className="text-sm text-green-600 font-medium mt-1">
                    Save ${tier.originalPrice - tier.price}
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleCtaClick(tier.id)}
                className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800"
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            No subscriptions. No upsells. No catch.<br />
            Pay only when you need insights — fast, validated, and on demand.
          </p>
          <button
            onClick={() => handleCtaClick('single')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
          >
            Start with a Single Test ($9) →
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Payments handled securely by Stripe. No account required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
