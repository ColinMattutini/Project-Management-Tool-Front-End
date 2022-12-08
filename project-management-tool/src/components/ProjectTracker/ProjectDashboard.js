import * as React from "react";
import BacklogColumn from "./TaskColumns/BacklogColumn";
import CompleteColumn from "./TaskColumns/CompleteColumn";
import InProgressColumn from "./TaskColumns/InProgressColumn";
import classes from "./ProjectDashboard.module.css";
import ReviewColumn from "./TaskColumns/ReviewColumn";

const ProjectDashboard = () => {
  return (
    <div className={classes.column}>
      <BacklogColumn />
      <InProgressColumn />
      <ReviewColumn />
      <CompleteColumn />
    </div>
  );
};

export default ProjectDashboard;
