const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/modularize", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("CONNECTED TO DB");
  });
