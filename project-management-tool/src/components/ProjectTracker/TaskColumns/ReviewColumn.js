import React from "react";
import TaskCard from "../TaskCard";
import classes from "./ReviewColumn.module.css";

const ReviewColumn = () => {
  return (
    <div className={classes.column}>
      <h1>Review</h1>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default ReviewColumn;
