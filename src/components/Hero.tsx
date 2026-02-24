import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { SkillNode, NodeConnection } from '../types';

const skillNodes: SkillNode[] = [
  { id: 'spark', label: 'Spark', x: 15, y: 25, category: 'big-data', details: ['PySpark', 'Spark SQL', 'Data Processing', 'ETL Workflows'] },
  { id: 'hive', label: 'Hive', x: 20, y: 35, category: 'big-data', details: ['HiveQL', 'Data Warehousing', 'Partitioning', 'Complex Joins'] },
  { id: 'kafka', label: 'Kafka', x: 25, y: 45, category: 'big-data', details: ['Real-time Streaming', 'Event Processing', 'Message Queues'] },
  { id: 'hdfs', label: 'HDFS', x: 18, y: 55, category: 'big-data', details: ['Distributed Storage', 'Data Lake', 'Sqoop', 'HBase'] },

  { id: 'lambda', label: 'Lambda', x: 65, y: 20, category: 'aws-devops', details: ['Serverless', 'Event-driven', 'Python/Node.js'] },
  { id: 'glue', label: 'Glue', x: 70, y: 30, category: 'aws-devops', details: ['ETL Jobs', 'Data Catalog', 'Crawlers'] },
  { id: 's3', label: 'S3', x: 75, y: 40, category: 'aws-devops', details: ['Object Storage', 'Data Lakes', 'Event Notifications'] },
  { id: 'redshift', label: 'Redshift', x: 68, y: 50, category: 'aws-devops', details: ['Data Warehouse', 'Type-2 SCD', 'DBT Integration'] },
  { id: 'airflow', label: 'Airflow', x: 72, y: 60, category: 'aws-devops', details: ['MWAA', 'Orchestration', 'DAGs', 'Workflow Management'] },

  { id: 'python', label: 'Python', x: 82, y: 70, category: 'languages', details: ['PySpark', 'Lambda Functions', 'Data Processing'] },
  { id: 'sql', label: 'SQL', x: 77, y: 80, category: 'languages', details: ['Redshift', 'Hive', 'Complex Queries'] },
  { id: 'groovy', label: 'Groovy', x: 85, y: 85, category: 'languages', details: ['Jenkins Pipelines', 'CI/CD Automation'] },

  { id: 'jenkins', label: 'Jenkins', x: 40, y: 70, category: 'testing-qa', details: ['CI/CD Pipelines', 'Automation', 'Deployment'] },
  { id: 'cloudformation', label: 'CloudFormation', x: 45, y: 80, category: 'testing-qa', details: ['IaC', 'Infrastructure Automation', 'Stack Management'] },

  { id: 'healthcare', label: 'Healthcare', x: 30, y: 15, category: 'domain', details: ['Horizon BCBS', 'NovaWell', 'Behavioral Health'] },
  { id: 'banking', label: 'Banking', x: 50, y: 20, category: 'domain', details: ['Bank of America', 'Fraud Analytics', 'Financial Data'] },
];

const connections: NodeConnection[] = [
  { from: 'spark', to: 'hive' },
  { from: 'hive', to: 'kafka' },
  { from: 'kafka', to: 'hdfs' },
  { from: 'lambda', to: 'glue' },
  { from: 'glue', to: 's3' },
  { from: 's3', to: 'redshift' },
  { from: 'redshift', to: 'airflow' },
  { from: 'python', to: 'sql' },
  { from: 'sql', to: 'groovy' },
  { from: 'spark', to: 'lambda' },
  { from: 'airflow', to: 'python' },
  { from: 'healthcare', to: 'banking' },
];

const categoryDetails = {
  'big-data': {
    title: 'Big Data Engineering',
    description: 'Expertise in building scalable data processing pipelines using Hadoop ecosystem',
    skills: ['Spark', 'Hive', 'Kafka', 'HDFS', 'Sqoop', 'HBase', 'Impala']
  },
  'aws-devops': {
    title: 'AWS & DevOps',
    description: 'Serverless architecture and cloud-native data platform development',
    skills: ['Lambda', 'Glue', 'S3', 'Redshift', 'Athena', 'EventBridge', 'MWAA', 'CloudFormation', 'Lake Formation', 'API Gateway', 'DynamoDB']
  },
  'languages': {
    title: 'Languages & Frameworks',
    description: 'Proficient in multiple programming languages and data frameworks',
    skills: ['Python', 'PySpark', 'SQL', 'Groovy', 'Java', 'Shell Script', 'DBT (Jinja)']
  },
  'testing-qa': {
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing and automation expertise',
    skills: ['Jenkins', 'CI/CD Pipelines', 'CloudFormation', 'Infrastructure as Code', 'Unit Testing', 'Integration Testing', 'ISTQB Certified']
  },
  'domain': {
    title: 'Domain Expertise',
    description: '14+ years across multiple industries',
    skills: ['Healthcare (Horizon BCBS, NovaWell)', 'Banking (Bank of America)', 'Telecom (Ericsson)', 'Multi-tenant Architecture']
  }
};

export default function Hero() {
  const [selectedNode, setSelectedNode] = useState<SkillNode | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedNode(null);
        setSelectedCategory(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {connections.map((conn, idx) => {
          const fromNode = skillNodes.find(n => n.id === conn.from);
          const toNode = skillNodes.find(n => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          return (
            <motion.line
              key={idx}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2, delay: idx * 0.1 }}
            />
          );
        })}
      </svg>

      {skillNodes.map((node) => (
        <motion.div
          key={node.id}
          className={`absolute cursor-pointer group ${
            hoveredNode === node.id ? 'z-30' : 'z-10'
          }`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
          whileHover={{ scale: 1.15 }}
          onClick={() => setSelectedNode(node)}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-500 dark:bg-blue-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative px-4 py-2 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full shadow-lg">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">
                {node.label}
              </span>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Santosh Dandin
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
            Cloud Data Engineer
          </p>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Architecting serverless data platforms and scalable cloud solutions with 14+ years of expertise
          </p>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {Object.entries(categoryDetails).map(([key, value]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {value.title}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4"
            onClick={() => setSelectedNode(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {selectedNode.label}
                </h3>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
              <div className="space-y-3">
                {selectedNode.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <p className="text-gray-700 dark:text-gray-300">{detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {categoryDetails[selectedCategory as keyof typeof categoryDetails].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {categoryDetails[selectedCategory as keyof typeof categoryDetails].description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {categoryDetails[selectedCategory as keyof typeof categoryDetails].skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
