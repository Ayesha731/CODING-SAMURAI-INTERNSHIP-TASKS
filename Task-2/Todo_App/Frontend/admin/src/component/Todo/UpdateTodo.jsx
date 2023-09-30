import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import ChecklistIcon from '@mui/icons-material/Checklist';


const UpdateTodo = ({ functionToCall, todo, todoId }) => {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    console.log("Submitting data:", data);
    axios.post(`http://localhost:8000/api/todos/${todoId}`, data)
      .then((res) => {
        console.log("Update response:", res.data);
        functionToCall();
        handleClose();
      })
      .catch((err) => {
        console.error("Update error:", err);
      });
  };
  
  

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          color: "white",
          backgroundColor: "#17252A",
          margin: "10px",
        }}
      >
        <EditIcon/>
        Update Todo
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", flexDirection: "column", margin: "30px" }}
      >
        <Card
          sx={{
            minWidth: 273,
            border: "2px solid black",
            backgroundColor: "#ACFADF",
            display: "flex",
            flexDirection: "column",
            boxShadow:"5px 5px 10px #888888" ,
            margin: "30px",
            borderRadius:"25px"
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#ACFADF",
              padding:"50px"
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                {...register("title")}
                sx={{ marginBottom: "20px" }}
                defaultValue={todo.title}
                id="outlined-basic"
                label="Title"
                variant="outlined"
              />
              <TextField
                {...register("description")}
                id="outlined-basic"
                defaultValue={todo.description}
                label="Description"
                variant="outlined"
              />            
            </form>
          </CardContent>
          <CardActions sx={{marginLeft:"40px"}}>
          <Button
                variant="contained"
                type="submit"
                style={{
                  color: "white",
                  backgroundColor: "#17252A",
                  margin: "10px",
                  width:"100px"
                }}
              >
                <EditIcon/>
                Update
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
      </Modal>
    </div>
  );
};

export default UpdateTodo;
