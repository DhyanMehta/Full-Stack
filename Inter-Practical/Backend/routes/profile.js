const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// GET /api/profile - Get user profile
router.get('/', auth, async (req, res) => {
    try {
        // req.user is already populated by auth middleware
        const user = await User.findById(req.user._id).select('-password');
        res.json(user);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// PUT /api/profile - Update user profile
router.put('/', auth, async (req, res) => {
    try {
        const { firstName, lastName, email, username, bio } = req.body;

        // Check if email is being changed and if it's already in use
        if (email !== req.user.email) {
            const emailExists = await User.findOne({ email });
            if (emailExists) {
                return res.status(400).json({ message: 'Email already in use' });
            }
        }

        // Check if username is being changed and if it's already in use
        if (username !== req.user.username) {
            const usernameExists = await User.findOne({ username });
            if (usernameExists) {
                return res.status(400).json({ message: 'Username already in use' });
            }
        }

        // Update user profile
        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            {
                $set: {
                    firstName,
                    lastName,
                    email,
                    username,
                    bio
                }
            },
            { new: true, runValidators: true }
        ).select('-password');

        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating profile:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;