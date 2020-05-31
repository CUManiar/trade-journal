// defining required imports
const express = require("express");
const routes = express.Router();

// controller import
const auth_ctrl = require("../controllers/auth.controller");

routes.post("/register", auth_ctrl.register);
routes.post("/login", auth_ctrl.login);
routes.post('/authenticate', auth_ctrl.authenticate)

module.exports = routes;
