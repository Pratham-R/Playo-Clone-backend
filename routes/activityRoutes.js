const express = require('express');
const router = express.Router();
const {
    createActivity,
    getActivities,
    getActivityById,
    joinActivity,
    leaveActivity,
    deleteActivity
} = require('../controllers/activityController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getActivities);
router.get('/:id', getActivityById);

// Protected routes
router.post('/', protect, createActivity);
router.post('/:id/join', protect, joinActivity);
router.post('/:id/leave', protect, leaveActivity);
router.delete('/:id', protect, deleteActivity);

module.exports = router;
