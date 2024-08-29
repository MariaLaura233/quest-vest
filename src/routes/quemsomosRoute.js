const express = require("express");
const QuemsomosController = require("../controllers/quemsomosController");

const quemsomosRoute = express.Router();

quemsomosRoute.get("/", QuemsomosController.getQuemsomos);

module.exports = quemsomosRoute;