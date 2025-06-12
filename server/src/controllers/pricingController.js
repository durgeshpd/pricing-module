const PricingConfig = require('../models/PricingConfig');

const calculatePrice = async (req, res) => {
  try {
    const { distanceKM, timeMin, waitMin, day } = req.body;

    const config = await PricingConfig.findOne({ active: true });
    if (!config) return res.status(400).json({ msg: 'No active pricing config found' });

    const dbpObj = config.distanceBase.find(d => d.days.includes(day));
    const dbp = dbpObj?.price || 0;
    const thresholdKM = dbpObj?.upToKM || 0;

    const extraKM = Math.max(0, distanceKM - thresholdKM);
    const dap = extraKM * config.distanceAdditional.perKmPrice;

    let tmf = 1;
    for (let t of config.timeMultiplier) {
      if (timeMin > t.from && timeMin <= t.to) {
        tmf = t.multiplier;
        break;
      }
    }

    const wcEligible = Math.max(0, waitMin - config.waitingCharges.afterMinutes);
    const wc = Math.ceil(wcEligible / config.waitingCharges.perMinutes) * config.waitingCharges.charge;

    const total = (dbp + dap) * tmf + wc;

    res.json({
      total: total.toFixed(2),
      breakdown: { dbp, dap, tmf, wc }
    });
  } catch (err) {
    console.error("⚠️ Error calculating price:", err);
    res.status(500).json({ error: err.message });
  }
};

const createOrUpdatePricingConfig = async (req, res) => {
  try {
    await PricingConfig.updateMany({}, { active: false });

    const newConfig = new PricingConfig(req.body);
    const saved = await newConfig.save();

    res.status(201).json({
      message: "✅ New pricing config saved",
      config: saved
    });
  } catch (err) {
    console.error("❌ Error saving pricing config:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  calculatePrice,
  createOrUpdatePricingConfig
};
