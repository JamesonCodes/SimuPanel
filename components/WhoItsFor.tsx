'use client';

import { motion } from 'framer-motion';
import { Users, Target, Building2, Microscope, ArrowRight } from 'lucide-react';

const WhoItsFor = () => {
  const personas = [
    {
      icon: Users,
      title: 'Founders',
      description: 'Validate ideas before committing to inventory or ads. Test product-market fit with real consumer data in minutes.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Target,
      title: 'Marketers',
      description: 'Test messaging, packaging, or campaigns in hours, not weeks. Get data-backed insights for your creative concepts.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Building2,
      title: 'Agencies',
      description: 'Pre-screen creative concepts and include data-backed insights in client reports. Impress clients with scientific validation.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Microscope,
      title: 'Researchers',
      description: 'Prototype surveys and prioritize which concepts deserve human panels. Scale your research capabilities with AI.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Who It's For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're building the next big thing or optimizing existing campaigns, SimuPanel gives you the consumer insights you need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={persona.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${persona.bgColor} rounded-lg p-6 border ${persona.borderColor} hover:shadow-md transition-all duration-200 group cursor-pointer`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${persona.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {persona.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {persona.description}
                  </p>

                  <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                    Run a Test →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg p-8 border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Common Use Cases
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Product Launch</h4>
              <p className="text-sm text-gray-600">
                Test new product concepts before manufacturing or marketing investment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Campaign Testing</h4>
              <p className="text-sm text-gray-600">
                Validate ad copy, creative concepts, and messaging before launch.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Research Scaling</h4>
              <p className="text-sm text-gray-600">
                Screen multiple concepts quickly to prioritize human research efforts.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsFor;
