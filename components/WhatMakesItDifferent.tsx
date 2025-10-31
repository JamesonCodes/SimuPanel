'use client';

import { motion } from 'framer-motion';

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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Real buyer insight — without real buyers.
          </p>
          
          {/* 3-line pillar layout */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg font-semibold text-gray-900">
              <strong className="text-gray-900">Lifelike Digital Twins</strong> – Simulate real buyer reactions and reasoning.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              <strong className="text-gray-900">Natural Language Insight</strong> – Understand the "why," not just the score.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              <strong className="text-gray-900">Proven Accuracy</strong> – Powered by peer-reviewed AI with 90% human reliability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatMakesItDifferent;

