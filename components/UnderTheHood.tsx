'use client';

import { motion } from 'framer-motion';
import { Cpu, Database, BarChart3, Shield, CheckCircle } from 'lucide-react';

const UnderTheHood = () => {
  const steps = [
    {
      number: '1',
      title: 'Generate Realistic Reactions',
      description: 'Persona-conditioned prompting creates diverse, natural language responses.',
      icon: Cpu,
      details: [
        'Persona-conditioned prompting',
        'Natural language generation',
        'Diverse response patterns'
      ]
    },
    {
      number: '2',
      title: 'Encode Semantic Meaning',
      description: 'High-dimensional embeddings capture emotional nuance and reasoning.',
      icon: Database,
      details: [
        'High-dimensional embeddings',
        'Semantic similarity calculations',
        'Context-aware encoding'
      ]
    },
    {
      number: '3',
      title: 'Map to Likert Scale',
      description: 'Responses are compared to five anchors for consistent scoring.',
      icon: BarChart3,
      details: [
        'Calibrated anchor statements',
        'Cosine similarity scoring',
        'Statistical variance preservation'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-100/30 to-transparent"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Under the Hood
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every SimuPanel result follows a transparent, research-validated pipeline.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const bgColors = ['bg-white', 'bg-gray-50', 'bg-white'];
            const borderColors = ['border-gray-200', 'border-gray-300', 'border-gray-200'];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`${bgColors[index]} rounded-lg p-8 border ${borderColors[index]} shadow-sm hover:shadow-md transition-all duration-300 relative`}
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-4 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                )}
                
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Step Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg flex items-center justify-center text-lg font-bold shadow-lg">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Technical Details */}
                  <div className="lg:col-span-2">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                      Implementation Details
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust & Transparency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 shadow-xl relative overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="relative">
          <p className="text-center text-gray-300 mb-6">
            Every step of the process follows three core principles:
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparent</h3>
              <p className="text-gray-300 text-sm">
                Open methodology with published research papers and validation studies.
              </p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors duration-300">
                <Database className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Reproducible</h3>
              <p className="text-gray-300 text-sm">
                Consistent results across runs with documented parameters and settings.
              </p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors duration-300">
                <CheckCircle className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Responsible</h3>
              <p className="text-gray-300 text-sm">
                Built and tested with strict data-privacy and ethical-AI practices — no personal data collection, ever.
              </p>
            </div>
          </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default UnderTheHood;
