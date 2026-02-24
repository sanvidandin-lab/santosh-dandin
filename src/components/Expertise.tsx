import { motion } from 'framer-motion';
import { Award, Briefcase, Cloud, Database, GitBranch, Shield } from 'lucide-react';

const expertiseData = [
  {
    icon: Cloud,
    title: 'Cloud & Data Engineering',
    skills: [
      'AWS Lambda, Glue, Athena, S3, EventBridge, Redshift',
      'Lake Formation, CloudFormation, Appflow, MWAA, API Gateway',
      'QuickSight, DynamoDB, IAM, DBT'
    ]
  },
  {
    icon: Database,
    title: 'Big Data Processing',
    skills: [
      'Apache Spark, Hive, HDFS, Kafka',
      'HBase, Sqoop, Impala',
      'Multi-layered data architecture design'
    ]
  },
  {
    icon: GitBranch,
    title: 'DevOps & Automation',
    skills: [
      'Jenkins, Groovy, CI/CD Pipelines',
      'Git, Bitbucket',
      'Infrastructure as Code with CloudFormation'
    ]
  },
  {
    icon: Shield,
    title: 'API Development & Integration',
    skills: [
      'Apigee, Imperva, API Gateway',
      'DynamoDB, Postman',
      'RESTful API Design'
    ]
  }
];

const certifications = [
  'Snowpro Core Certified',
  'AWS Certified Cloud Practitioner',
  'Microsoft Certified Professional - Azure',
  'Big Data Hadoop & Spark Foundation',
  'Oracle Certified Professional Java SE 6',
  'ISTQB Certified'
];

const experience = [
  {
    company: 'IBM Corp, USA',
    role: 'Cloud Data Engineer',
    highlights: [
      'Built serverless data platforms using AWS services',
      'Designed multi-layered data architecture with Type-2 SCD',
      'Developed 6+ CI/CD master pipelines',
      'Integrated Salesforce, MFT, and analytics systems'
    ]
  },
  {
    company: 'IBM Corp, USA',
    role: 'Big Data Engineer',
    highlights: [
      'Developed Spark applications for Hadoop Data Lake',
      'Built reusable frameworks for data ingestion and quality',
      'Optimized data models for business reporting',
      'Enhanced Hadoop framework with new Big Data tools'
    ]
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Hadoop Developer',
    highlights: [
      'Migrated fraud analytics from mainframe to Hadoop',
      'Built scalable data pipelines with Spark and Hive',
      'Delivered analytics workflows for Bank of America'
    ]
  }
];

export default function Expertise() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-16 text-center"
        >
          My Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {expertiseData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <item.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.skills.map((skill, skillIdx) => (
                  <li
                    key={skillIdx}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <Award className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Certifications
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-6 py-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-800 dark:text-gray-200 font-medium text-center">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Professional Experience
            </h3>
          </div>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.company}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  {exp.role}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
