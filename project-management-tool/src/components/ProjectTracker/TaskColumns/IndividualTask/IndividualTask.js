import React, { Fragment, useEffect, useState } from "react";
import Modal from "../../../UI/Modal";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import classes from "./IndividualTask.module.css";
import { Button } from "@mui/material";

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

const users = JSON.parse(localStorage.getItem("users"));

const IndividualTask = (props) => {
  const [priority, setPriority] = useState(props.taskType);
  const [taskName, setTaskName] = useState(props.taskName);
  const [additionalInfo, setAdditionalInfo] = useState(props.additionalInfo);
  const [assignedTo, setAssignedTo] = useState(props.assignedTo);
  const [category, setCategory] = useState(props.category);

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

  const submitUpdateTask = (e) => {
    e.preventDefault();
    console.log(priority, taskName, assignedTo);
    updateTaskFetch();
    props.taskModalHandler();
  };

  const assignedHandler = (e) => {
    setAssignedTo(e.target.value);
  };

  const updateTaskFetch = async () => {
    const response = await fetch(
      "http://localhost:8080/api/project/test/edittask",
      {
        method: "PUT",
        body: JSON.stringify({
          taskId: props.taskId,
          taskName: taskName,
          additionalInfo: additionalInfo,
          priority: priority,
          assignedTo: assignedTo,
          category: category,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <Modal>
      <button onClick={props.taskModalHandler}>X</button>
      <form className={classes.alignment}>
        <h1>Task Name</h1>
        <input value={taskName} onChange={taskNameHandler}></input>
        <input value={additionalInfo} onChange={additionalInfoHandler}></input>
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
          <Button
            variant="contained"
            color="success"
            onClick={submitUpdateTask}
          >
            Update Task
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default IndividualTask;
