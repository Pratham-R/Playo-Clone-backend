const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const facilityRoutes = require('./routes/facilityRoutes');
const activityRoutes = require('./routes/activityRoutes');

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://prathamrastogi5:QsCMIvd0kkFjroK3@playo.mms5g.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error(err.message);
    process.exit(1);
});

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/facilities', facilityRoutes);
app.use('/api/activities', activityRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
