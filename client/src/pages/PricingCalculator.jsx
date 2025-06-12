import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaCalculator } from 'react-icons/fa';
import PriceForm from '../components/PriceForm';
import ResultCard from '../components/ResultCard';

const PricingCalculator = () => {
  const [form, setForm] = useState({
    distanceKM: '',
    timeMin: '',
    waitMin: '',
    day: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/pricing/calculate', form);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to calculate price. Check inputs.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-2 mb-6">
          <FaCalculator /> Price Calculator
        </h1>
        <PriceForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
        {result && <ResultCard result={result} />}
      </motion.div>
    </div>
  );
};

export default PricingCalculator;
