'use client';

import { motion } from 'framer-motion';
import { FileText, Users, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      number: '01',
      title: 'Describe your concept',
      description: 'Paste your product description or upload a mockup. Optionally choose a target persona such as "Gen Z budget shopper" or "eco-conscious parent."',
      icon: FileText,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'Simulate realistic consumers',
      description: 'SimuPanel prompts AI personas to respond naturally — producing hundreds of purchase-intent statements as if you ran a real focus group.',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      number: '03',
      title: 'Quantify intent with SSR',
      description: 'Each response is converted to an embedding vector and compared against calibrated anchor statements. The result: a realistic Likert-style distribution that mirrors human survey data.',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      output: 'Output: statistically representative purchase-intent distribution + text rationales in under 60 seconds.'
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
            Get statistically representative consumer data in three simple steps — no recruiting, no panels, no waiting.
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
                    <div className="flex items-center gap-2 text-xs font-medium text-blue-600 bg-blue-50 px-4 py-3 rounded-lg">
                      <span>⚡</span>
                      <span>{step.output}</span>
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
            Consumer data, without consumers.
          </h3>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Get the insights you need in minutes, not weeks. No need to find participants, schedule sessions, or wait for results.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => scrollToSection('science')}
              className="text-gray-600 hover:text-gray-900 px-6 py-3 font-medium transition-colors border-b border-transparent hover:border-gray-400"
            >
              Learn More About SSR
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
