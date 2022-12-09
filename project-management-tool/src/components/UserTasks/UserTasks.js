import React from "react";
import classes from "./UserTasks.module.css";
import UserTasksTable from "./UserTasksTable";

const UserTasks = () => {
  return (
    <div className={classes.column}>
      <h1>Current Tasks</h1>
      <UserTasksTable />
    </div>
  );
};

export default UserTasks;
