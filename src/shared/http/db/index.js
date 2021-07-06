require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.DB_PATH;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once("open", () =>
  console.log(`MongoDB database connection has estabilished sucessfully`)
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
