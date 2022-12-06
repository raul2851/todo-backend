const mongoose = require("mongoose");

const Note = mongoose.model(
  "Note",
  new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    id_user: String,
  })
);

module.exports = Note;
