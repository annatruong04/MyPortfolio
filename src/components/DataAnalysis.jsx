import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DataAnalysis = () => {
  const [activeTab, setActiveTab] = useState('cleaning');

  const tabs = [
    { id: 'cleaning', label: 'Cleaning & Preprocessing' },
    { id: 'testing', label: 'Statistical Testing' },
    { id: 'spikes', label: 'Spike Detection' },
  ];

  const content = {
    cleaning: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">Data Preparation</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Extracted first digits from multiple columns:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Posted_Letters</li>
              <li>Population</li>
              <li>Revenues_Total</li>
            </ul>
          </li>
          <li>Removed non-numeric data and outliers</li>
          <li>Normalized data for consistent analysis</li>
        </ul>
      </div>
    ),
    testing: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">Statistical Analysis</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Performed chi-square tests for goodness of fit</li>
          <li>Calculated expected vs. observed frequencies</li>
          <li>Generated p-values and confidence intervals</li>
        </ul>
      </div>
    ),
    spikes: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">Anomaly Detection</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Calculated z-scores for population data</li>
          <li>Identified significant deviations from expected distribution</li>
          <li>Visualized anomalies in interactive plots</li>
        </ul>
      </div>
    ),
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Data Analysis Process</h2>
      
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          {content[activeTab]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DataAnalysis; 