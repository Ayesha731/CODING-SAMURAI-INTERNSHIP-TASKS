import React from "react";
import { useForm } from "react-hook-form";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
const Todo = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8000/api/todos", data)
      .then((res) => {
        console.log(res);

      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        reset();
      });
  };

  const handleAddNewTodoClick = () => {
    // Reset the form fields when clicking the "Add New Todo" button
    reset();
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}> <PlaylistAddCheckIcon/>To-do List</h1>
      <h4 style={{ textAlign: "center" }}>Keep  Track your activities</h4>
      <Card
        sx={{
          minwidth: 273,
          border: "2px solid black",
          backgroundColor: "#ACFADF",
          display: "flex",
          flexDirection: "column",
          margin: "30px",
          color: "white",
          boxShadow:"5px 5px 10px #888888" ,
          borderRadius:"25px"

        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ACFADF",
            color: "white",
            padding:"50px"

          }}
        >
          <TextField
            {...register("title")}
            sx={{
              marginBottom: "20px",
              color: "white",
            }}
            defaultValue=""
            id="outlined-basic"
            label="title"
            variant="outlined"
          />
          <TextField
            {...register("description")}
            id="outlined-basic"
            defaultValue=""
            label="Description"
            variant="outlined"
          />
        </CardContent>
        <CardActions sx={{marginLeft:"40px"}}>
          <Button
            variant="contained"
            type="submit"
            style={{
              color: "white",
              backgroundColor: "#17252A",
              margin: "10px",
            }}
            onClick={handleSubmit(onSubmit)}
          >
            <AddIcon/>
            Add Todo
          </Button>
          
          <Link to="/todo">
            <Button
              variant="contained"
              type="submit"
              style={{
                color: "white",
                backgroundColor: "#17252A",
                margin: "10px",
              }}
            >
              <ChecklistIcon/>
              Go to Todos
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default Todo;

 





