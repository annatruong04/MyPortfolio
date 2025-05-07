import React from 'react';
import { motion } from 'framer-motion';

const KeyFindings = () => {
  const findings = [
    {
      icon: '❌',
      title: 'NSW Revenue Anomalies',
      description: 'Revenue data for NSW showed significant deviations from Benford\'s Law, suggesting potential data quality issues or historical anomalies.',
      color: 'bg-red-100 dark:bg-red-900/30'
    },
    {
      icon: '✅',
      title: 'SA Postal Consistency',
      description: 'Posted letters data from South Australia followed Benford\'s Law remarkably well, indicating high data quality and natural distribution.',
      color: 'bg-green-100 dark:bg-green-900/30'
    },
    {
      icon: '🤯',
      title: 'Population Distribution Spikes',
      description: 'Population data revealed unexpected spikes in specific regions, potentially indicating historical migration patterns or data collection methods.',
      color: 'bg-purple-100 dark:bg-purple-900/30'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Key Findings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {findings.map((finding, index) => (
          <motion.div
            key={finding.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`${finding.color} rounded-xl p-6 shadow-lg`}
          >
            <div className="text-4xl mb-4">{finding.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{finding.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{finding.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KeyFindings; 