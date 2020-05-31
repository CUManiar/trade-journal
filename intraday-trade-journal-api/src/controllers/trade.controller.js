const TradeSchema = require("../models/trade.model");

const addTrade = async (req, res) => {
  const { date, script, quantity, buy, sell } = req.body;
  const _trade = new TradeSchema(req.body);
  const addTrade = await _trade.save();
  if (addTrade._id) {
    res.json({
      status: 'success',
      data: addTrade
    });
  }
};

const allTrades = async (req, res) => {
  const trade = await TradeSchema.find();
  return res.json(trade);
};

module.exports = { addTrade, allTrades };
