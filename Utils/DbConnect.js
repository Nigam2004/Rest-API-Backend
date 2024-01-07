const mongoose = require("mongoose");

const connection = async () => {
  try {
    dbconnect = await mongoose.connect(
      `mongodb://127.0.0.1:27017/${process.env.DATA_BASE_NAME}`
    );
    console.log("db connected....");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connection;
