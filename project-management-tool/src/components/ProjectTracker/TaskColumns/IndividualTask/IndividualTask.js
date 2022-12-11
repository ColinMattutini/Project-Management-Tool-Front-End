import React, { Fragment, useState } from "react";
import Modal from "../../../UI/Modal";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import classes from "./IndividualTask.module.css";
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

const IndividualTask = (props) => {
  const [priority, setPriority] = useState(props.taskType);
  const [taskName, setTaskName] = useState(props.taskName);
  const [assignedTo, setAssignedTo] = useState(props.assignedTo);

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  const taskNameHandler = (e) => {
    setTaskName(e.target.value);
  };

  const submitUpdateTask = (e) => {
    e.preventDefault();
    console.log(priority, taskName, assignedTo);
  };

  const assignedHandler = (e) => {
    setAssignedTo(e.target.value);
  };
  return (
    <Modal>
      <button onClick={props.taskModalHandler}>X</button>
      <form className={classes.alignment}>
        <h1>Task Name</h1>
        <input value={taskName} onChange={taskNameHandler}></input>
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
        <div className={classes.buttonSizer}>
          <Button
            variant="contained"
            color="success"
            onClick={submitUpdateTask}
          >
            Save Task
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default IndividualTask;
