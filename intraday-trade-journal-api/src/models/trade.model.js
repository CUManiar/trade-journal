const mongoose = require("mongoose");

const TradeSchema = new mongoose.Schema({
  date: {
    type: Number,
    required: true,
  },
  script: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  buy: {
    type: Number,
    required: true,
  },
  sell: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Trade", TradeSchema);
