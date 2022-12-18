import React from "react";
import TaskCard from "../TaskCard";
import classes from "./InProgressColumn.module.css";

const InProgressColumn = (props) => {
  const inProgressTasks = props.inProgressTasks.map((inProgressItems) => (
    <TaskCard
      key={inProgressItems.taskId}
      taskId={inProgressItems.taskId}
      projectId={inProgressItems.projectId}
      taskName={inProgressItems.taskName}
      additionalInfo={inProgressItems.additionalInfo}
      taskType={inProgressItems.priority}
      dateCreated={inProgressItems.dateCreated}
      assignedTo={inProgressItems.assignedTo}
      status={inProgressItems.category}
    />
  ));
  return (
    <div className={classes.column}>
      <h1>In-Progress</h1>
      {inProgressTasks}
    </div>
  );
};

export default InProgressColumn;
