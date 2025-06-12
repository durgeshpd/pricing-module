import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ResultCard = ({ result }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h2 className="text-xl font-semibold text-blue-700 mb-2 flex items-center">
        <FaRupeeSign className="mr-2" /> Total: ₹{result.total}
      </h2>
      <ul className="text-sm text-gray-700">
        <li>📦 Base Price (DBP): ₹{result.breakdown.dbp}</li>
        <li>🚗 Additional Distance (DAP): ₹{result.breakdown.dap}</li>
        <li>🕒 Time Multiplier (x{result.breakdown.tmf})</li>
        <li>⏳ Waiting Charges: ₹{result.breakdown.wc}</li>
      </ul>
    </motion.div>
  );
};

export default ResultCard;
