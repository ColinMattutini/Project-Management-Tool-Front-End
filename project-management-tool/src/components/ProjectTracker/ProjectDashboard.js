import React, { Fragment, useState } from "react";
import BacklogColumn from "./TaskColumns/BacklogColumn";
import CompleteColumn from "./TaskColumns/CompleteColumn";
import InProgressColumn from "./TaskColumns/InProgressColumn";
import classes from "./ProjectDashboard.module.css";
import ReviewColumn from "./TaskColumns/ReviewColumn";
import SideNavBar from "../SideNavBar/SideNavBar";
import { useParams } from "react-router-dom";

const ProjectDashboard = () => {
  const [backlogTasks, setBacklogTasks] = useState([]);

  const fetchAllTasks = async () => {
    const response = await fetch("http://localhost:8080/api/project/2/tasks", {
      method: "GET",
    });
    const data = await response.json();
    var backlog = data.filter((e) => (e.category = "BACKLOG"));
    setBacklogTasks(backlog);
  };

  let { project } = useParams();
  return (
    <Fragment>
      <div className={classes.column}>
        <BacklogColumn project={project} backlogTasks={backlogTasks} />
        <InProgressColumn />
        <ReviewColumn />
        <CompleteColumn />
        <button onClick={fetchAllTasks}>FEtch</button>
      </div>
    </Fragment>
  );
};

export default ProjectDashboard;
