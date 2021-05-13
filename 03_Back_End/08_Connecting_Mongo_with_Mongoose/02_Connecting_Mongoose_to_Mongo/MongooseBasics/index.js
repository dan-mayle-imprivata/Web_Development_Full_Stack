const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/movieApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection open!");
  })
  .catch((err) => {
    console.log("Oh no error!!!");
    console.log(err);
  });
