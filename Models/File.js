const mongoose = require("mongoose");
const file = new mongoose.Schema({
  link: {
    type: String,
    require: true,
  },
});

const files = mongoose.model("file", file);
module.exports = files;
