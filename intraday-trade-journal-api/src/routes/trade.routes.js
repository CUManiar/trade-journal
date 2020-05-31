// defining required imports
const express = require("express");
const routes = express.Router();

// controller import
const tradeCtrl = require("../controllers/trade.controller");

routes.post("/add", tradeCtrl.addTrade);
routes.get("/all-trades", tradeCtrl.allTrades);

module.exports = routes;
