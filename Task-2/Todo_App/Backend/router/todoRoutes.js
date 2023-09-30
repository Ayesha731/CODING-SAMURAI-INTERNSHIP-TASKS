const express = require("express");
const {
  postTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} = require("../controller/todoController.js");

const todoRoutes = express.Router();
todoRoutes.route("/api/todos").post(postTodo);
todoRoutes.route("/api/todos").get(getTodo);
todoRoutes.route("/api/todos/:id").delete(deleteTodo);
todoRoutes.route("/api/todos/:id").post(updateTodo);
module.exports = todoRoutes;
