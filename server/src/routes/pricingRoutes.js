const express = require('express');
const router = express.Router();
const {
  calculatePrice,
  createOrUpdatePricingConfig
} = require('../controllers/pricingController');

router.post('/calculate', calculatePrice);
router.post('/config', createOrUpdatePricingConfig);

module.exports = router;
