const express = require("express");
const RegisterController = require("../controllers/registerController");
const RegisterUserMiddleware = require("../middlewares/registerUserMiddleware");

const loginRegisterRoute = express.Router();

loginRegisterRoute.get('/', RegisterController.getRegister);

loginRegisterRoute.post('/login', RegisterController.postLogin);
loginRegisterRoute.post('/register', RegisterUserMiddleware.verifyFields, RegisterController.postRegister);

module.exports = loginRegisterRoute;