const Activity = require('../models/Activity');

// Create a new activity
exports.createActivity = async (req, res) => {
    try {
        const activity = new Activity(req.body);
        await activity.save();
        res.status(201).json(activity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all activities
exports.getActivities = async (req, res) => {
    try {
        const activities = await Activity.find().populate('participants');
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single activity by ID
exports.getActivityById = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id).populate('participants');
        if (!activity) return res.status(404).json({ message: 'Activity not found' });
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Join an activity
exports.joinActivity = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) return res.status(404).json({ message: 'Activity not found' });

        if (activity.participants.length >= activity.maxParticipants) {
            return res.status(400).json({ message: 'Activity is full' });
        }

        activity.participants.push(req.user._id);
        await activity.save();
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Leave an activity
exports.leaveActivity = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) return res.status(404).json({ message: 'Activity not found' });

        activity.participants.pull(req.user._id);
        await activity.save();
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an activity
exports.deleteActivity = async (req, res) => {
    try {
        const activity = await Activity.findByIdAndDelete(req.params.id);
        if (!activity) return res.status(404).json({ message: 'Activity not found' });
        res.status(200).json({ message: 'Activity deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
