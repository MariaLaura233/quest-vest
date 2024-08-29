const express = require('express');
const DashboardController = require('../controllers/admin/dashboardController');

const dashboardRoute = express.Router();

dashboardRoute.get('/', DashboardController.getDashboard);

module.exports = dashboardRoute;