import React, { useState } from "react";
import Modal from "../../../UI/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import classes from "./NewTask.module.css";
import { Button } from "@mui/material";
import { json } from "react-router-dom";

const taskPriority = [
  {
    value: "LOW",
    label: "LOW",
  },
  {
    value: "MODERATE",
    label: "MODERATE",
  },
  {
    value: "HIGH",
    label: "HIGH",
  },
  {
    value: "URGENT",
    label: "URGENT",
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
  {
    label: "",
  },
];

const taskCategory = [
  {
    value: "BACKLOG",
    label: "BACKLOG",
  },
  {
    value: "INPROGRESS",
    label: "INPROGRESS",
  },
  {
    value: "REVIEW",
    label: "REVIEW",
  },
  {
    value: "COMPLETE",
    label: "COMPLETE",
  },
];

const NewTask = (props) => {
  const pathName = window.location.pathname.split("/").pop();

  const [priority, setPriority] = useState("LOW");
  const [taskName, setTaskName] = useState();
  const [additionalInfo, setAdditionalInfo] = useState();
  const [assignedTo, setAssignedTo] = useState("");
  const [category, setCategory] = useState("BACKLOG");

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  const taskNameHandler = (e) => {
    setTaskName(e.target.value);
  };

  const additionalInfoHandler = (event) => {
    setAdditionalInfo(event.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitNewTask = (e) => {
    e.preventDefault();
    saveTaskFetch();
    console.log(priority, taskName, assignedTo);
    props.newTaskModalHandler();
  };

  const assignedHandler = (e) => {
    setAssignedTo(e.target.value);
  };

  const saveTaskFetch = async () => {
    const response = await fetch(
      "http://localhost:8080/api/project/" + pathName + "/newtask",
      {
        method: "POST",
        body: JSON.stringify({
          taskName: taskName,
          additionalInfo: additionalInfo,
          priority: priority,
          assignedTo: assignedTo,
          category: category,
        }),
        headers: { "content-type": "application/json" },
      }
    );
  };

  return (
    <Modal>
      <button onClick={props.newTaskModalHandler}>X</button>
      <form className={classes.alignment}>
        <h1>Task Name</h1>
        <input placeholder="Task Name" onChange={taskNameHandler}></input>
        <input
          placeholder="Additional Information"
          onChange={additionalInfoHandler}
        ></input>
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
          value={assignedTo}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          disablePortal
          id="combo-box-demo"
          options={users}
          sx={{ width: 300 }}
          onInputChange={(event, newInputValue) => {
            setAssignedTo(newInputValue);
          }}
          inputValue={assignedTo}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Assigned To"
              onChange={assignedHandler}
              value={assignedTo}
            />
          )}
        />
        <TextField
          id="outlined-select-category"
          select
          value={category}
          onChange={categoryHandler}
        >
          {taskCategory.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className={classes.buttonSizer}>
          <Button variant="contained" color="success" onClick={submitNewTask}>
            Submit Task
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default NewTask;
