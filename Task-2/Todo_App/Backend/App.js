const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const todoRoutes = require("./router/todoRoutes.js");
const app = express();
const PORT = 8000;
const LOCALHOST = "localhost";
//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use("/", todoRoutes);
//connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/todo")
  .then(() => {
    console.log("connect to the mongodb successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

//create server
app.listen(PORT, LOCALHOST, (req, res) => {
  console.log(`Server is running at http:${LOCALHOST}:${PORT} successfully!`);
});
