const Facility = require('../models/Facility');

// Create a new facility
exports.createFacility = async (req, res) => {
    const { name, location, sport, availableSlots, pricePerHour } = req.body;

    try {
        const facility = new Facility({
            name,
            location,
            sport,
            availableSlots,
            pricePerHour,
        });

        await facility.save();
        res.status(201).json(facility);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get all facilities
exports.getFacilities = async (req, res) => {
    try {
        const facilities = await Facility.find();
        res.json(facilities);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get a single facility by ID
exports.getFacilityById = async (req, res) => {
    try {
        const facility = await Facility.findById(req.params.id);
        if (!facility) {
            return res.status(404).json({ msg: 'Facility not found' });
        }
        res.json(facility);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
