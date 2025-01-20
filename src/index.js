require('dotenv').config();

const express = require('express');
const app = express();

const morgan = require('morgan');
const compression = require('compression');
const { default: helmet } = require('helmet');

const routes = require('./routes');

// middleware
app.use(morgan('dev'));
app.use(compression());
app.use(helmet());

// route
app.use('/api', routes);

module.exports = app;
