const express = require("express");
const VestibularesController = require("../controllers/vestibularesController");

const vestibularesRoute = express.Router();

vestibularesRoute.get("/", VestibularesController.getVestibulares);

module.exports = vestibularesRoute;