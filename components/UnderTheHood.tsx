'use client';

import { motion } from 'framer-motion';
import { Cpu, Database, BarChart3, Shield, CheckCircle } from 'lucide-react';

const UnderTheHood = () => {
  const steps = [
    {
      number: '1',
      title: 'Response Generation',
      description: 'GPT-4o produces free-text consumer statements conditioned on demographic personas.',
      icon: Cpu,
      details: [
        'Trained on diverse consumer language patterns',
        'Persona-specific response generation',
        'Natural language processing for authenticity'
      ]
    },
    {
      number: '2',
      title: 'Embedding Representation',
      description: 'Each response is encoded into a high-dimensional semantic vector using OpenAI\'s text-embedding-3-small model.',
      icon: Database,
      details: [
        '1536-dimensional vector space captures subtle meaning shifts in consumer language',
        'Semantic similarity calculations',
        'Context-aware embeddings'
      ]
    },
    {
      number: '3',
      title: 'Likert Mapping',
      description: 'Cosine similarity to five calibrated anchor statements yields probability distributions across the 1–5 scale — generating statistically realistic variance instead of AI "averages."',
      icon: BarChart3,
      details: [
        'Calibrated anchor statements',
        'Probability distribution modeling',
        'Calibrated anchors preserve statistical variance — avoiding AI "averaging"'
      ]
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
            Under the Hood
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For teams who care how the data's made — not just what it says.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Step Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center text-lg font-bold">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
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
                      Technical Implementation
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
          className="mt-16 bg-gray-900 text-white rounded-lg p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Transparent</h3>
              <p className="text-gray-300 text-sm">
                Open methodology with published research papers and validation studies.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Database className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Reproducible</h3>
              <p className="text-gray-300 text-sm">
                Consistent results across runs with documented parameters and settings.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Trustworthy</h3>
              <p className="text-gray-300 text-sm">
                SOC 2-compliant data privacy and enterprise-grade security.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-950 rounded-lg p-6 border border-gray-800"
        >
          <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">
            Example Implementation
          </h4>
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`// Semantic Similarity Rating (SSR) Implementation
const calculateLikertScore = (response, anchorStatements) => {
  const embedding = await getEmbedding(response);
  const similarities = anchorStatements.map(anchor => 
    cosineSimilarity(embedding, anchor.embedding)
  );
  return softmax(similarities).map(p => p * 5);
};

// Generate realistic distribution
const distribution = responses.map(r => 
  calculateLikertScore(r.text, calibratedAnchors)
).reduce((acc, scores) => acc + scores, [0,0,0,0,0]);`}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default UnderTheHood;
