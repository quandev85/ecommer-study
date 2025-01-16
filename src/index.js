require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const router = require('./routes');

// middleware
app.use(morgan('dev')); // Logging
app.use(helmet()); // Security
app.use(compression()); // Compression
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api', router);

module.exports = app;
