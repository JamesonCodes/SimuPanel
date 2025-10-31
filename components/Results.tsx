'use client';

import { motion } from 'framer-motion';
import { BarChart3, Clock, Quote, TrendingUp } from 'lucide-react';

const Results = () => {
  // Mock data for visualization
  const likertData = [
    { rating: 1, count: 8, percentage: 8 },
    { rating: 2, count: 12, percentage: 12 },
    { rating: 3, count: 25, percentage: 25 },
    { rating: 4, count: 35, percentage: 35 },
    { rating: 5, count: 20, percentage: 20 },
  ];

  const sampleFeedback = [
    'I\'d probably try this — it sounds useful and fairly priced.',
    'The eco-friendly angle appeals to me.',
    'Seems complex for my workflow; I\'d skip it.',
    'This solves a problem I didn\'t even know I had. Definitely interested.',
    'I\'d need to see more proof before committing, but the concept is solid.',
    'Not sure it\'s worth switching from what I\'m currently using.'
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Example Output
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            See how your ideal customers would react to your product, ad, or campaign — instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Data Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">Mean Purchase Intent</span>
                </div>
                <div className="text-4xl font-bold text-gray-900">4.1</div>
                <div className="text-sm text-gray-500">out of 5</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-600">Reliability vs. Humans</span>
                </div>
                <div className="text-4xl font-bold text-gray-900">≈90%</div>
                <div className="text-sm text-gray-500">test-retest accuracy</div>
              </div>
            </div>

            {/* Likert Distribution Chart */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Purchase Intent Distribution</h3>
              <div className="space-y-3">
                {likertData.map((item) => (
                  <div key={item.rating} className="flex items-center gap-4">
                    <div className="w-8 text-sm font-medium text-gray-600">{item.rating}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full"
                      />
                    </div>
                    <div className="w-12 text-sm font-medium text-gray-600 text-right">{item.percentage}%</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-500 text-center">
                1 = Very Unlikely to Purchase • 5 = Very Likely to Purchase
                <br />
                <span className="text-gray-400">KS-similarity: 0.88</span>
              </div>
            </div>

            {/* Runtime */}
            <div className="flex items-center gap-3 text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-xs">Runtime: ~55 seconds</span>
            </div>
          </motion.div>

          {/* Right side - Sample Feedback */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Top Quotes</h3>
            
            <div className="space-y-3">
              {sampleFeedback.map((feedback, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start gap-3">
                    <Quote className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 italic text-sm">&ldquo;{feedback}&rdquo;</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Results;
