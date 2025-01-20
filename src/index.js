const express = require('express');
const app = express();

const morgan = require('morgan');
const compression = require('compression');
const { default: helmet } = require('helmet');
const routes = require('./routes');

// dotenv
require('dotenv').config();

// db
require('./db/init.mongo');

// middleware
app.use(morgan('dev'));
app.use(compression());
app.use(helmet());

// route
app.use('/api', routes);

module.exports = app;
