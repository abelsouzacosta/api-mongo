require("dotenv").config();
const mongoose = require("mongoose");

const dbPath = process.env.DB_PATH;

mongoose.connect(dbPath, {
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
