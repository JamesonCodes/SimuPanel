'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Microscope, ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const WhoItsFor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const personas = [
    {
      icon: Users,
      title: 'Founders',
      description: 'Validate product-market fit before spending on ads or manufacturing.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Target,
      title: 'Marketers',
      description: 'Test campaigns, positioning, and creative assets — and understand the why behind every response.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Microscope,
      title: 'Researchers',
      description: 'Prototype surveys and scale qualitative testing without panels or recruiting.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Who It's For
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Whether you're validating a new product, testing creative, or scaling research — SimuPanel gives founders, marketers, and researchers human insight at machine speed.
          </p>
        </motion.div>

        {/* Audiences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {personas.map((persona, index) => {
              const Icon = persona.icon;
              return (
                <motion.div
                  key={persona.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${persona.bgColor} rounded-lg p-6 border-2 ${persona.borderColor} hover:shadow-lg transition-all duration-200 group`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${persona.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200 shadow-sm`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {persona.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {persona.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Unified CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
          >
            Join the Waitlist
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTier="general"
      />
    </section>
  );
};

export default WhoItsFor;
