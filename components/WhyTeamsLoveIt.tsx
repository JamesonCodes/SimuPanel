'use client';

import { motion } from 'framer-motion';
import { Zap, MessageCircle, BookOpen, Plug } from 'lucide-react';

const WhyTeamsLoveIt = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Instant clarity',
      description: 'Know whether your message resonates before spending a dollar on ads.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Human context',
      description: 'Every score includes reasoning in natural language.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BookOpen,
      title: 'Science-backed',
      description: 'Built on published 2025 research validated across 9,000+ participants.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Plug,
      title: 'Plug-and-play',
      description: 'No setup, recruiting, or waiting required.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why Teams Love It
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTeamsLoveIt;

