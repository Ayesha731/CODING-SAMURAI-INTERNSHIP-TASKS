import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";
import axios from "axios";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const GetTodo = (props) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  //get call
  const getCallApi = () => {
    axios
      .get("http://localhost:8000/api/todos")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //for rerendering
  useEffect(() => {
    getCallApi();
  }, []);

  return (
    <div>
      <div
        style={{
          margin: "40px",
          
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          
          }}
        >
          {!loading && Array.isArray(todos) ? (
            todos.map((todo) => (
              <div
                key={todo._id}
                style={{
                  border: "2px solid black",
                  marginBottom: "20px",
                  backgroundColor: "#ACFADF",
                  padding:"20px",
                  borderRadius:"25px",

                }}
              >
                <h2>Title:{todo.title}</h2>
                <p>Description:{todo.description}</p>
                {/* <Button
                  style={{
                    backgroundColor: "purple",
                    color: "white",
                    margin: "10px",
                  }}
                >
                  Edit
                </Button> */}
                <div style={{display:"flex"}}> 


                <UpdateTodo
                  functionToCall={getCallApi}
                  todo={todo}
                  todoId={todo._id}
                />
                {/* <Button
                  style={{
                    backgroundColor: "purple",
                    color: "white",
                    margin: "10px",
                  }}
                  onClick={() => handleDelete(todo._id)}
                >
                  Delete
                </Button> */}
                <DeleteTodo functionToCall={getCallApi} todoId={todo._id} />
              </div>
              </div>
            ))
          ) : (
            <p>Loading....</p>
          )}
        </div>
        <div>
          <Link to="/">
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "#17252A",
                color: "white",
                margin: "10px",
                
              }}
            >
              <AddIcon/>
              Add New Todo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetTodo;
