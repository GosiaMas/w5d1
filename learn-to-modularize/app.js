const express = require("express");
const hbs = require("hbs");

require("./db");
// require("./db/index");
// require("./db/index.js");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "hbs");

app.use((req, res, next) => {
  console.log("HELLO FROM THE MAIN MIDDLEWARE");
  // res.render("index");
  req.dimitri = {
    name: "DImitri",
  };
  next();
});

const indexRoute = require("./routes/index");
app.use("/", indexRoute);

app.use((req, res, next) => {
  console.log("THERE ARE NO MORE ROUTES DEFINED");
  res.render("index");
});

app.listen(3000, () => {
  console.log("SERVER RUNNING ON PORT 3000");
});
// http://localhost:3000/new-book?bookSearch=hello+world
// req.query = { bookSearch: "hello+world" }
// router.get("/:username")
// req.params = {username: }
// facebook.com/vincenzo
// req.params = {username: "vincenzo"}
// facebook.com/pauline
// req.params = {username: "pauline"}
