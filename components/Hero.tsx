'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWaitlistClick = () => {
    setIsModalOpen(true);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden pt-20">
      {/* Subtle depth background */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-50/30 to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight"
          >
            Validate your product ideas{' '}
            <span className="gradient-text">overnight</span>
            <br />
            — for the price of lunch.
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-3"
          >
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Get human-level purchase intent data in minutes, powered by peer-reviewed AI that replicates real focus groups with{' '}
              <span className="font-semibold text-gray-900">90% accuracy</span>.
            </p>
            <p className="text-base text-gray-400 font-medium max-w-3xl mx-auto">
              No surveys. No panels. No delays.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
          >
            <button
              onClick={handleWaitlistClick}
              className="group bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-800 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('results')}
              className="group text-gray-600 hover:text-gray-900 px-8 py-4 text-lg font-medium transition-all duration-200 flex items-center gap-2 border border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md"
            >
              View Example Results
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

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

export default Hero;
