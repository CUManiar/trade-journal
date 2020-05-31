const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const morgan = require('morgan');
const mongoose = require('mongoose');

// Config imports
const dbConfig = require('./config/database.config');

// Router imports
const authRoutes = require('./routes/auth.routes');
const tradeRoutes = require('./routes/trade.routes');

// Controller imports


const app = express();

// Request Logger
app.use(morgan('combined'));

// Give CORS support
app.use(cors());

// parse requests of content type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content type - application/json
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/trx', tradeRoutes);

app.get("/", (req, res) => res.json("It's working"));

app.listen(process.env.PORT || 8000, (data, err) => {
    if (err) console.log("Something went wrong! ", err);
    console.log(`Server started on PORT  ${process.env.PORT || 8000}`);
});

// connect to db
mongoose
    .connect(dbConfig.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connected to DB!");
    })
    .catch(err => {
        console.log("Can not connect to db dut to ", err);
        process.exit();
    });