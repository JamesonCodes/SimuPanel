'use client';

import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { pricingTiers } from '@/lib/pricing';

const Pricing = () => {
  const handleCtaClick = (tierId: string) => {
    if (tierId === 'agency') {
      // For agency tier, show contact form or email
      window.location.href = 'mailto:sales@simupanel.com?subject=Agency Pack Inquiry';
    } else {
      // For other tiers, scroll to a contact form or show coming soon
      alert('Payment integration coming soon! Contact us at hello@simupanel.com');
    }
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
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pay only for the insights you need. No subscriptions, no freemium limits.
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
              className={`relative bg-white rounded-lg border-2 p-8 ${
                tier.popular 
                  ? 'border-blue-200 shadow-lg scale-105' 
                  : 'border-gray-200 shadow-sm'
              } hover:shadow-lg transition-all duration-200`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {tier.badge}
                  </div>
                </div>
              )}

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
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  tier.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
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
          className="text-center bg-white rounded-lg p-8 border border-gray-200 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            No subscriptions. No freemium limits.
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Just fast, validated consumer simulation on demand. Start with a single test and scale as you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleCtaClick('single')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Start with Single Test ($9)
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="text-gray-600 hover:text-gray-900 px-6 py-3 font-medium transition-colors">
              View Pricing Details
            </button>
          </div>
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Questions about pricing or need a custom plan?
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Contact our sales team →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
