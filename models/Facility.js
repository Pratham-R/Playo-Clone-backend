const mongoose = require('mongoose');

const FacilitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    },
    availableSlots: {
        type: [Date],
        required: true,
    },
    pricePerHour: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Facility', FacilitySchema);
