const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    name: String,
    surname: String,
    email: String,
    password: String,
  })
);

module.exports = User;
