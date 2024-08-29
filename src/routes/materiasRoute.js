const express = require("express");
const MateriasController = require("../controllers/materiasController");

const materiasRoute = express.Router();

materiasRoute.get("/", MateriasController.getMaterias);

module.exports = materiasRoute;
