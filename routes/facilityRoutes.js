const express = require('express');
const { createFacility, getFacilities, getFacilityById } = require('../controllers/facilityController');

const router = express.Router();

// Create a new facility (admin only, protected route)
router.post('/', createFacility);

// Get all facilities
router.get('/', getFacilities);

// Get a single facility by ID
router.get('/:id', getFacilityById);

module.exports = router;
