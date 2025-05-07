import React from 'react';
import { motion } from 'framer-motion';

const expectedDistribution = [
  { digit: 1, percentage: 30.1 },
  { digit: 2, percentage: 17.6 },
  { digit: 3, percentage: 12.5 },
  { digit: 4, percentage: 9.7 },
  { digit: 5, percentage: 7.9 },
  { digit: 6, percentage: 6.7 },
  { digit: 7, percentage: 5.8 },
  { digit: 8, percentage: 5.1 },
  { digit: 9, percentage: 4.6 },
];

const BenfordDistribution = ({ actual }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Expected vs. Actual Distribution of First Digits</h2>
      <p className="text-center text-slate-500 mb-8">Comparing Benford's Law prediction with actual leading digit frequencies from the dataset</p>
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center"><span className="w-4 h-4 bg-blue-500 inline-block rounded mr-2" /> Benford's Law (Predicted)</span>
          <span className="inline-flex items-center ml-6"><span className="w-4 h-4 bg-pink-500 inline-block rounded mr-2" /> Actual Data</span>
        </div>
      </div>
      <div className="grid grid-cols-9 gap-2 h-[400px] items-end relative">
        {expectedDistribution.map((item, index) => {
          const actualItem = actual ? actual.find(a => a.digit === item.digit) : null;
          return (
            <div key={item.digit} className="relative flex flex-col items-center justify-end h-full">
              {/* Benford's Law bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${item.percentage * 3}%` }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="w-10 bg-blue-500 dark:bg-blue-400 rounded-t-lg z-10"
                style={{ position: 'absolute', bottom: 0 }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-center">
                  <div className="text-lg font-bold">{item.digit}</div>
                  <div className="text-xs font-mono text-blue-700 dark:text-blue-900 bottom-3">{item.percentage}%</div>
                </div>
              </motion.div>
              {/* Actual Data bar */}
              {actualItem && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${actualItem.percentage * 3}%` }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut"
                  }}
                  className="w-6 bg-pink-500/80 dark:bg-pink-400 rounded-t-lg z-20"
                  style={{ position: 'absolute', bottom: 0, left: '60%' }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-center">
                    <div className="text-xs font-mono text-pink-700 dark:text-pink-900">{actualItem.percentage}%</div>
                  </div>
                </motion.div>
              )}
              {/* X-axis label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-semibold">{item.digit}</div>
            </div>
          );
        })}
        {/* Y-axis label */}
        <div className="absolute left-0 -top-8 text-xs text-slate-500 rotate-0">First Digit</div>
      </div>
    </div>
  );
};

export default BenfordDistribution; 