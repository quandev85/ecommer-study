const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth');

// Route middlewares
router.use('/auth', authRoutes);

module.exports = router;
