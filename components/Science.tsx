'use client';

import { motion } from 'framer-motion';
import { CheckCircle, BarChart3, BookOpen } from 'lucide-react';

const Science = () => {
  return (
    <section id="science" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Science, Not Hype
          </h2>
          <p className="text-lg text-gray-500 mb-4">
            Built on research that's actually been published — not "AI magic."
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powered by <span className="font-semibold text-gray-900">Semantic Similarity Rating (SSR)</span>, a peer-reviewed method developed by PyMC Labs and Colgate-Palmolive in 2025.
          </p>
        </motion.div>

        <div className="relative">
          {/* Subtle connective background */}
          <div className="absolute inset-0 bg-blue-50/20 rounded-2xl -m-4"></div>
          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8">
          {/* Left side - Methodology */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                SSR Methodology
              </h3>
              <p className="text-gray-700 leading-relaxed">
                SSR allows large language models to replicate human purchase-intent ratings by analyzing open-ended responses and mapping them to a 5-point Likert scale — with proven statistical precision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Peer-Reviewed Research</h4>
                  <p className="text-gray-600 text-sm">Published methodology with academic validation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Enterprise Tested</h4>
                  <p className="text-gray-600 text-sm">Developed with Colgate-Palmolive research teams</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Statistically Rigorous</h4>
                  <p className="text-gray-600 text-sm">Validated across 9,000+ survey participants</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats and Citation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Accuracy Stat */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">≈ 90%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">of human test–retest reliability</div>
                <div className="text-sm text-gray-600">across 9,000 survey participants</div>
              </div>
            </div>

            {/* Citation */}
            <div className="bg-gray-900 text-white rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-3 mb-4">
                <BarChart3 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <h4 className="font-semibold">Research Citation</h4>
              </div>
              <blockquote className="text-sm leading-relaxed text-gray-300 italic">
                "LLMs Reproduce Human Purchase Intent via Semantic Similarity Elicitation of Likert Ratings."
              </blockquote>
              <cite className="text-xs text-gray-400 block mt-3">
                Maier et al., 2025 — Published October 9 2025.
              </cite>
            </div>

            {/* Supporting Metrics */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">9,000+</div>
                  <div className="text-sm text-gray-600">Participants</div>
                </div>
                <div className="text-center border-l border-gray-200 pl-6">
                  <div className="text-2xl font-bold text-gray-900 mb-1">2025</div>
                  <div className="text-sm text-gray-600">Published</div>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;
