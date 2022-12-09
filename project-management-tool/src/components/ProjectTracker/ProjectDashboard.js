import React, { Fragment } from "react";
import BacklogColumn from "./TaskColumns/BacklogColumn";
import CompleteColumn from "./TaskColumns/CompleteColumn";
import InProgressColumn from "./TaskColumns/InProgressColumn";
import classes from "./ProjectDashboard.module.css";
import ReviewColumn from "./TaskColumns/ReviewColumn";
import SideNavBar from "../SideNavBar/SideNavBar";
import { useParams } from "react-router-dom";

const ProjectDashboard = () => {
  let { project } = useParams();
  return (
    <Fragment>
      <div className={classes.column}>
        <BacklogColumn project={project} />
        <InProgressColumn />
        <ReviewColumn />
        <CompleteColumn />
      </div>
    </Fragment>
  );
};

export default ProjectDashboard;
