const mongoose = require('mongoose');

const pricingConfigSchema = new mongoose.Schema({
  name: String,
  active: { type: Boolean, default: true },
  distanceBase: [
    {
      days: [String],
      price: Number,
      upToKM: Number
    }
  ],
  distanceAdditional: {
    perKmPrice: Number,
    afterKM: Number
  },
  timeMultiplier: [
    {
      from: Number,
      to: Number,
      multiplier: Number
    }
  ],
  waitingCharges: {
    afterMinutes: Number,
    perMinutes: Number,
    charge: Number
  },
  createdBy: String,
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PricingConfig', pricingConfigSchema);
