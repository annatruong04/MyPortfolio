import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import BenfordDistribution from '../components/BenfordDistribution';
import DataAnalysis from '../components/DataAnalysis';
import KeyFindings from '../components/KeyFindings';

// Example actual data (replace with your real dataset)
const actualDistribution = [
  { digit: 1, percentage: 28.5 },
  { digit: 2, percentage: 18.2 },
  { digit: 3, percentage: 13.0 },
  { digit: 4, percentage: 10.1 },
  { digit: 5, percentage: 8.2 },
  { digit: 6, percentage: 7.0 },
  { digit: 7, percentage: 6.0 },
  { digit: 8, percentage: 5.0 },
  { digit: 9, percentage: 4.0 },
];

const BenfordLawResearch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  return (
    <section className='max-container'>
      {/* <div className={`min-h-screen ${isDarkMode ? 'dark text-white' : ' text-gray-900'}`}> */}
      {/* Hero Section */}
        <h1 className='head-text'>
          📬 Letters, Numbers & Lies:{" "}
          <span className='blue-gradient_text drop-shadow font-semibold'>
            A Benford's Law Journey
          </span>
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl mb-8">
            Exploring the fascinating intersection of mathematics and historical data through Benford's Law.{" "}
            <span 
              data-tooltip-id="benford-tooltip"
              className="cursor-help text-blue-500 dark:text-blue-400"
            >
               What is Benford's Law?
            </span>
          </p>
        </div>

      {/* Tooltip for Benford's Law explanation */}
      <Tooltip id="benford-tooltip" place="right">
        <div className="max-w-xs p-2">
          <p>Benford's Law states that in many naturally occurring collections of numbers, the leading digit is likely to be small. For example, the number 1 appears as the leading digit about 30.1% of the time, while 9 appears only about 4.6% of the time.</p>
        </div>
      </Tooltip>

      {/* Benford Distribution Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <BenfordDistribution actual={actualDistribution} />
      </section>

      {/* Research Notes Section */}
      <section className="container mx-auto px-4 py-8 max-w-3xl">
        <h3 className="text-2xl font-bold mb-4">Research Notes</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Predicted leading digit probabilities are based on Benford's Law.</li>
          <li>Actual probabilities are calculated from the historical Australian postal dataset (1906 & 1913).</li>
          <li>Compare the two distributions to spot anomalies or patterns in the data.</li>
        </ul>
      </section>

      {/* Data Analysis Section */}
      <section className="py-16">
        <DataAnalysis />
      </section>

      {/* Key Findings Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <KeyFindings />
      </section>
    
    {/* </div> */}
    </section>
    
  );
};

export default BenfordLawResearch; 