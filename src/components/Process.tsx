import { motion } from 'framer-motion';
import { Lightbulb, FileSearch, Code, Rocket, BarChart3 } from 'lucide-react';

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Understand & Analyze',
    description: 'Deep dive into business requirements, data sources, and existing architecture. Collaborate with stakeholders to define clear objectives.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FileSearch,
    title: 'Design & Model',
    description: 'Design scalable data architecture with proper layering (raw, staged, curated, warehouse). Define data models, security policies, and integration patterns.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code,
    title: 'Build & Automate',
    description: 'Develop serverless pipelines with AWS services. Implement CI/CD, Infrastructure as Code, and automated testing. Build reusable frameworks.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Rocket,
    title: 'Deploy & Monitor',
    description: 'Execute phased rollouts with comprehensive testing. Set up monitoring, logging, and alerting. Ensure data quality and audit trails.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BarChart3,
    title: 'Optimize & Scale',
    description: 'Continuously improve performance, cost efficiency, and reliability. Gather feedback and iterate. Document and share knowledge.',
    color: 'from-indigo-500 to-blue-500'
  }
];

export default function Process() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My Approach
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A systematic methodology for building robust, scalable cloud data platforms
          </p>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-shadow">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl font-bold text-gray-300 dark:text-gray-600">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {idx < processSteps.length - 1 && (
                <div className="hidden md:block absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Core Philosophy</h3>
          <p className="text-lg leading-relaxed mb-4">
            Every data platform should be secure, scalable, and maintainable. I prioritize automation,
            reusability, and comprehensive documentation to ensure long-term success.
          </p>
          <p className="text-lg leading-relaxed">
            With 14+ years across Healthcare, Banking, and Telecom domains, I bring battle-tested
            patterns and deep technical expertise to every project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
