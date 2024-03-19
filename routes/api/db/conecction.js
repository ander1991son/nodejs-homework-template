const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

require("dotenv").config();

const { DB_HOST } = process.env;

const connectionPromise = mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { connectionPromise };
