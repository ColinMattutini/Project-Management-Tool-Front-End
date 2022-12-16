import React, { Fragment, useState } from "react";
import classes from "./BacklogColumn.module.css";
import TaskCard from "../TaskCard";
import NewTask from "./NewTask/NewTask";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

const backlogItems = [
  {
    postId: 1,
    projectId: "fitnesstracker",
    taskName: "test",
    taskType: "Moderate",
    dateCreated: "12/07/2022",
    assignedTo: "Test User",
    status: "Backlog",
  },
  {
    postId: 2,
    projectId: "forumapplication",
    taskName: "Luke Skywalker",
    taskType: "Low",
    dateCreated: "12/07/2022",
    assignedTo: "Test User",
    status: "Backlog",
  },
  {
    postId: 3,
    projectId: "forumapplication",
    taskName: "Add favorite topics section",
    taskType: "Low",
    dateCreated: "12/07/2022",
    assignedTo: "Jack Sparrow",
    status: "Backlog",
  },
  {
    postId: 4,
    projectId: "forumapplication",
    taskName: "Fix search bar dropdowns",
    taskType: "Low",
    dateCreated: "12/07/2022",
    assignedTo: "Test User",
    status: "Backlog",
  },
];

const BacklogColumn = (props) => {
  const [newTaskModal, setNewTaskModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const newTaskModalHandler = () => {
    newTaskModal ? setNewTaskModal(false) : setNewTaskModal(true);
    console.log(props.project);
  };

  // const newBackLogItems = backlogItems.filter((e) =>
  //   e.projectId.includes(props.project)
  // );
  const backlogTasks = props.backlogTasks.map((backlogItems) => (
    <TaskCard
      key={backlogItems.taskId}
      projectId={backlogItems.projectId}
      taskName={backlogItems.taskName}
      additionalInfo={backlogItems.additionalInfo}
      taskType={backlogItems.priority}
      dateCreated={backlogItems.dateCreated}
      assignedTo={backlogItems.assignedTo}
      status={backlogItems.category}
    />
  ));

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
        {backlogTasks}
      </div>
    </Fragment>
  );
};

export default BacklogColumn;
