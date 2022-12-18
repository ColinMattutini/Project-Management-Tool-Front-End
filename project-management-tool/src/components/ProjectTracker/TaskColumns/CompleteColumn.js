import React from "react";
import TaskCard from "../TaskCard";
import classes from "./CompleteColumn.module.css";

const CompleteColumn = (props) => {
  const completeTasks = props.completeTasks.map((completeItems) => (
    <TaskCard
      key={completeItems.taskId}
      taskId={completeItems.taskId}
      projectId={completeItems.projectId}
      taskName={completeItems.taskName}
      additionalInfo={completeItems.additionalInfo}
      taskType={completeItems.priority}
      dateCreated={completeItems.dateCreated}
      assignedTo={completeItems.assignedTo}
      status={completeItems.category}
    />
  ));

  return (
    <div className={classes.column}>
      <h1>Complete</h1>
      {completeTasks}
    </div>
  );
};

export default CompleteColumn;
