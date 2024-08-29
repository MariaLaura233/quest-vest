const express = require('express');
const AdminController = require('../controllers/admin/adminController');

const adminRoute = express.Router();

adminRoute.get('/', AdminController.getAdmin);

adminRoute.post('/', AdminController.postAdmin);

module.exports = adminRoute;
