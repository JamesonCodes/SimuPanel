'use client';

import { motion } from 'framer-motion';
import { Users, Brain, BarChart3 } from 'lucide-react';

const WhatMakesItDifferent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            What Makes It Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real buyer insight — without real buyers.
          </p>
          
          {/* 3-line pillar layout */}
          <div className="max-w-4xl mx-auto space-y-4 mb-8">
            <div className="flex items-start justify-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg font-semibold text-gray-900 text-left">
                <span className="text-blue-600">Lifelike Digital Twins</span> – Simulate real buyer reactions and reasoning.
              </p>
            </div>
            <div className="flex items-start justify-center gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg font-semibold text-gray-900 text-left">
                <span className="text-green-600">Natural Language Insight</span> – Understand the "why," not just the score.
              </p>
            </div>
            <div className="flex items-start justify-center gap-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg font-semibold text-gray-900 text-left">
                <span className="text-purple-600">Proven Accuracy</span> – Built on SSR, validated across 9,000+ human comparisons.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            SimuPanel builds lifelike digital twins of your customers to test campaigns, messaging, and product ideas. Each twin reacts like a real person — explaining why they'd buy (or not) and rating their intent automatically using a proven semantic-similarity model.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8 border border-gray-200"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Lifelike Digital Twins
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Each twin reacts like a real person, producing authentic responses that mirror real consumer language and reasoning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8 border border-gray-200"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Natural Language Reasoning
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every reaction includes qualitative feedback explaining the "why" behind purchase decisions — not just numbers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8 border border-gray-200"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Automatic Intent Scoring
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Semantic similarity scoring automatically converts reactions into Likert-style intent distributions with proven accuracy.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-lg p-8 border border-blue-200 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Built on Semantic Similarity Rating (SSR)
          </h3>
          <p className="text-gray-700 text-center leading-relaxed">
            SSR — a peer-reviewed method for mapping natural language reactions to human-like intent scores. Achieves{' '}
            <span className="font-semibold text-gray-900">90% accuracy</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatMakesItDifferent;

