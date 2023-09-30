const mongoose = require("mongoose");

//make schema
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
});

//make model
const Todo = mongoose.model("Todo", todoSchema);

//export the module of Todo
module.exports.Todo = Todo;
