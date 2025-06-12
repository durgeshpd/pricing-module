import React from 'react';
import { FaCarSide, FaClock, FaStopwatch, FaCalendarAlt, FaCalculator } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PriceForm = ({ form, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label className="label text-gray-700">
          <FaCarSide className="inline-block mr-2" /> Distance (KM)
        </label>
        <input
          type="number"
          name="distanceKM"
          value={form.distanceKM}
          onChange={handleChange}
          required
          className="input input-bordered w-full bg-white text-black placeholder-gray-400"
          placeholder="Enter distance in KM"
        />
      </div>

      <div className="form-control">
        <label className="label text-gray-700">
          <FaClock className="inline-block mr-2" /> Time (Minutes)
        </label>
        <input
          type="number"
          name="timeMin"
          value={form.timeMin}
          onChange={handleChange}
          required
          className="input input-bordered w-full bg-white text-black placeholder-gray-400"
          placeholder="Enter trip duration"
        />
      </div>

      <div className="form-control">
        <label className="label text-gray-700">
          <FaStopwatch className="inline-block mr-2" /> Waiting Time (Minutes)
        </label>
        <input
          type="number"
          name="waitMin"
          value={form.waitMin}
          onChange={handleChange}
          required
          className="input input-bordered w-full bg-white text-black placeholder-gray-400"
          placeholder="Enter wait time"
        />
      </div>

      <div className="form-control">
        <label className="label text-gray-700">
          <FaCalendarAlt className="inline-block mr-2" /> Day
        </label>
        <select
          name="day"
          value={form.day}
          onChange={handleChange}
          required
          className="select select-bordered w-full bg-white text-black"
        >
          <option value="">Select Day</option>
          <option>Mon</option>
          <option>Tue</option>
          <option>Wed</option>
          <option>Thu</option>
          <option>Fri</option>
          <option>Sat</option>
          <option>Sun</option>
        </select>
      </div>

      <motion.button whileTap={{ scale: 0.95 }} type="submit" className="btn btn-primary w-full mt-4">
        <FaCalculator className="mr-2" /> Calculate
      </motion.button>
    </form>
  );
};

export default PriceForm;
