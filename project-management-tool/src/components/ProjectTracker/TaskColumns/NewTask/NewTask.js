import React, { useState } from "react";
import Modal from "../../../UI/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import classes from "./NewTask.module.css";
import { Button } from "@mui/material";

const taskPriority = [
  {
    value: "Low",
    label: "Low",
  },
  {
    value: "Moderate",
    label: "Moderate",
  },
  {
    value: "High",
    label: "High",
  },
  {
    value: "Urgent",
    label: "Urgent",
  },
];

const users = [
  {
    label: "Colin",
  },
  {
    label: "Test User",
  },
  {
    label: "Jack Sparrow",
  },
  {
    label: "Luke Skywalker",
  },
  {
    label: "Mahogany Teakwood",
  },
];

const NewTask = (props) => {
  const [priority, setPriority] = useState("Low");

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <Modal>
      <button onClick={props.newTaskModalHandler}>X</button>
      <form className={classes.alignment}>
        <h1>Task Name</h1>
        <input placeholder="Task Name"></input>
        <input placeholder="Additional Information"></input>
        <TextField
          id="outlined-select-priority"
          select
          value={priority}
          onChange={handleChange}
          helperText="Task Priority"
        >
          {taskPriority.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={users}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Assigned To" />
          )}
        />
        <div className={classes.buttonSizer}>
          <Button variant="contained" color="success">
            Submit Task
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default NewTask;
