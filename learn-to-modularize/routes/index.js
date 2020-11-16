const express = require("express");
const Book = require("../models/Book.model");

const router = express.Router();
// POST -> Create something new / Sends a request, WITH some data     -          C(reate)
// GET -> Gets all Our Stuff / Makes a request for SOMETHING                     R(ead)
// PUT  -> Update something existing / Sends a request, WITH some data ->        U(pdate)
// DELETE -> Delete something that already exists / Sends a request to delete -> D(elete)
const user = {
  name: "André",
};

router.get("/", (req, res) => {
  console.log(req.dimitri);
  console.log("GET REQUEST, VISITNG HOME PAGE");
  Book.find().then((allTheBooks) => {
    console.log("allTheBooks:", allTheBooks);
    //  console.log("allTheBooks:", allTheBooks);
    res.render("index", { user, books: allTheBooks });
  });
});

router.get("/new", (req, res) => {
  console.log("GET REQUEST, VISITNG NEW BOOK PAGE");

  res.render("new");
});

router.post("/new-book", (req, res) => {
  console.log("POST REQUEST, TO NEW BOOK");
  const isAvailable = true;
  const { author: marcel, genre, pages, releaseDate } = req.body;
  // you would check the property here
  //   yoiu can check manually if it obeys specific orders

  //   console.log(req.body);
  Book.create({
    author: marcel,
    genre,
    releaseDate,
    pages,
    isAvailable,
  })
    .then((bookCreated) => {
      console.log("bookCreated:", bookCreated);
      // 123avsagdf57hgdf56h4gfd65h47fgd65h47
      res.redirect(`/${bookCreated._id}`);
    })
    .catch((err) => {
      console.log("err:");
    });
});

router.get("/new-book", (req, res) => {
  console.log(req.query);
  res.render("index");
});

// /one-slash

router.get("/:username", (req, res) => {
  const { username } = req.params;
  console.log("req.params:", req.params);
  //   5fae6ef3dc8d55ef83e24fe0

  Book.findById(username)
    .then((bookInfo) => {
      console.log("bookInfo:", bookInfo);
      res.render("bookInfo", { bookInfo });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
});

module.exports = router;
