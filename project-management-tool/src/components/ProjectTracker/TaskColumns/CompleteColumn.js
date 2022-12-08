import React from "react";
import TaskCard from "../TaskCard";
import classes from "./CompleteColumn.module.css";

const CompleteColumn = () => {
  return (
    <div className={classes.column}>
      <h1>Complete</h1>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default CompleteColumn;
