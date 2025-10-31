'use client';

import { motion } from 'framer-motion';
import { FileText, Users, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Describe your concept',
      description: 'Paste your product idea, campaign copy, or upload a creative mockup. Optionally choose or generate a target persona — e.g., VP of Marketing at a mid-market SaaS company.',
      icon: FileText,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'Simulate digital twins',
      description: 'SimuPanel prompts AI personas to respond naturally, producing dozens of authentic reactions that mirror real consumer language.',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      number: '03',
      title: 'Quantify purchase intent',
      description: 'Each reaction is compared to five calibrated anchor statements — from "definitely not" to "definitely yes" — using semantic similarity scoring. The result: a Likert-style intent distribution plus qualitative feedback that reads like a real focus group.',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      output: 'Output: Purchase intent distribution + top quotes explaining the "why" — in under 60 seconds.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test campaigns, messaging, and product ideas with digital twins that think and reason like your customers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gray-200 z-0"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >

                <div className="relative bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  {step.output && (
                    <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 shadow-sm">
                      <p className="text-sm font-medium text-gray-900 leading-relaxed">
                        {step.output}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-lg p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Get insights in minutes, not weeks
          </h3>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            No need to find participants, schedule sessions, or wait for results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
