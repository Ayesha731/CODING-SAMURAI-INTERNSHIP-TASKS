const { Todo } = require("../model/todoSchema.js");

//post the todo
const postTodo = async (req, res) => {
  try {
    //destructuring the elements
    const { title, description } = req.body;
    console.log(title);
    console.log(description);

    const todo = await Todo.create({
      title: req.body.title,
      description: req.body.description,
    });

    await todo.save();
    return res.status(200).json({
      success: true,
      msg: "Todo is posted successfully!",
      data: todo,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      msg: "error is occur",
    });
  }
};

//get todo
const getTodo = async (req, res) => {
  try {
    const todo = await Todo.find();

    return res.status(200).json({
      success: true,
      msg: "todos are fetched",
      data: todo,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      msg: "Error occured",
    });
  }
};

//delete Todo
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    return res.status(201).json({
      success: true,
      msg: "Todo is deleted successfully!",
      data: todo,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      msg: "Error is occured!",
    });
  }
};

//update Todo

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.title = req.body.title;
    todo.description = req.body.description;
    await todo.save();
    return res.status(200).json({
      success: true,
      msg: "todo is updated",
      data: todo,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      msg: "Error is occured!",
    });
  }
};
module.exports = { postTodo, getTodo, deleteTodo, updateTodo };
