import React, { Fragment, useState } from "react";
import classes from "./BacklogColumn.module.css";
import TaskCard from "../TaskCard";
import NewTask from "./NewTask/NewTask";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

const BacklogColumn = () => {
  const [newTaskModal, setNewTaskModal] = useState(false);

  const newTaskModalHandler = () => {
    newTaskModal ? setNewTaskModal(false) : setNewTaskModal(true);
  };

  return (
    <Fragment>
      {newTaskModal && <NewTask newTaskModalHandler={newTaskModalHandler} />}
      <div className={classes.column}>
        <div className={classes.textbox}>
          <h1>Backlog</h1>
          <IconButton
            size="large"
            color="secondary"
            aria-label="add"
            onClick={newTaskModalHandler}
          >
            <AddIcon />
          </IconButton>
        </div>
        <TaskCard />
      </div>
    </Fragment>
  );
};

export default BacklogColumn;
