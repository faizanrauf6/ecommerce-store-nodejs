const mongoose = require("mongoose");
const consoleLogger = require("../config/logging");

// ! starting the DataBase
const dataBaseConnect = function () {
  const URI = process.env.DB_URL;
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      // useUnifiedTopology: true
    })
    .then(() => {
      consoleLogger.info("Connected to MongoDB Atlas");
    });
};

module.exports = dataBaseConnect;
