const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: Number,
  releaseDate: Date,
  isAvailable: Boolean,
  genre: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
