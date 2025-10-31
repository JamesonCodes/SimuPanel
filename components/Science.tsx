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
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Scientific Foundation
          </h2>
          
          {/* Single consolidated proof block */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-8 border border-blue-200 shadow-sm">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Powered by Semantic Similarity Rating (SSR)
            </p>
            <p className="text-lg text-gray-700 mb-3">
              Developed by PyMC Labs and Colgate-Palmolive.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Validated across 9,000+ participants with ≈90% test–retest reliability.
            </p>
            <p className="text-base text-gray-600 mb-6">
              Published: Maier et al., 2025.
            </p>
            <a 
              href="https://arxiv.org/pdf/2510.08338v1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors border-b border-transparent hover:border-blue-600"
            >
              <BookOpen className="w-4 h-4" />
              Read the Research
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Science;
