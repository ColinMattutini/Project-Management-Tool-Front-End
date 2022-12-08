import React from "react";
import TaskCard from "../TaskCard";
import classes from "./InProgressColumn.module.css";

const InProgressColumn = () => {
  return (
    <div className={classes.column}>
      <h1>In-Progress</h1>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default InProgressColumn;
