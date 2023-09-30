import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
const DeleteTodo = ({ functionToCall, todoId }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/todos/${todoId}`)
      .then((res) => {
        console.log(res.data);
        functionToCall();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Button
        style={{
          backgroundColor: "darkred",
          color: "white",
          margin: "10px",
        }}
        onClick={handleDelete}
      >
       <DeleteIcon/> 
        Delete
      </Button>
    </div>
  );
};

export default DeleteTodo;
