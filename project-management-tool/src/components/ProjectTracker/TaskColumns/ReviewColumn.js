import React from "react";
import TaskCard from "../TaskCard";
import classes from "./ReviewColumn.module.css";

const ReviewColumn = (props) => {
  const reviewTasks = props.reviewTasks.map((reviewItems) => (
    <TaskCard
      key={reviewItems.taskId}
      taskId={reviewItems.taskId}
      projectId={reviewItems.projectId}
      taskName={reviewItems.taskName}
      additionalInfo={reviewItems.additionalInfo}
      taskType={reviewItems.priority}
      dateCreated={reviewItems.dateCreated}
      assignedTo={reviewItems.assignedTo}
      status={reviewItems.category}
    />
  ));
  return (
    <div className={classes.column}>
      <h1>Review</h1>
      {reviewTasks}
    </div>
  );
};

export default ReviewColumn;
