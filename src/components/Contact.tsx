import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Youtube, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/santosh-dandin',
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/santoshdandin',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: 'https://www.youtube.com/@santoshdandin',
    color: 'hover:text-red-600 dark:hover:text-red-400'
  }
];

export default function Contact() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Open to discussing cloud data engineering opportunities and collaborations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
            <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
            <a
              href="mailto:sadandin@in.ibm.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              sadandin@in.ibm.com
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
            <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
            <a
              href="tel:+19084179255"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              +1-908-417-9255
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
            <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">New Jersey, USA</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8 mb-12"
        >
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 bg-white dark:bg-gray-900 rounded-full shadow-md transition-colors ${link.color}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="w-6 h-6" />
              <span className="sr-only">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-400"
        >
          <p className="mb-2">
            Cloud Data Engineer specializing in AWS, Big Data, and DevOps
          </p>
          <p className="text-sm">
            14+ years of experience | Healthcare, Banking & Telecom domains
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
