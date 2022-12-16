import React, { Fragment, useEffect, useState } from "react";
import BacklogColumn from "./TaskColumns/BacklogColumn";
import CompleteColumn from "./TaskColumns/CompleteColumn";
import InProgressColumn from "./TaskColumns/InProgressColumn";
import classes from "./ProjectDashboard.module.css";
import ReviewColumn from "./TaskColumns/ReviewColumn";
import SideNavBar from "../SideNavBar/SideNavBar";
import { useLocation, useParams } from "react-router-dom";

const ProjectDashboard = () => {
  const [backlogTasks, setBacklogTasks] = useState([]);
  const [inProgressTasks, setInProgressTaks] = useState([]);
  const [reviewTasks, setReviewTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);
  const location = useLocation();
  const pathName = window.location.pathname.split("/").pop();

  const fetchAllTasks = async () => {
    console.log(pathName);
    const response = await fetch(
      "http://localhost:8080/api/project/" + pathName + "/tasks",
      {
        method: "GET",
      }
    );
    const data = await response.json();

    var complete = data.filter((e) => e.category === "COMPLETE");
    var review = data.filter((e) => e.category === "REVIEW");
    var backlog = data.filter((e) => e.category === "BACKLOG");
    var inProgress = data.filter((e) => e.category === "INPROGRESS");

    setBacklogTasks(backlog);
    setInProgressTaks(inProgress);
    setReviewTasks(review);
    setCompleteTasks(complete);
  };

  let { project } = useParams();

  useEffect(() => {
    fetchAllTasks();
    console.log(pathName);
  }, [pathName]);
  return (
    <Fragment>
      <div className={classes.column}>
        <BacklogColumn project={project} backlogTasks={backlogTasks} />
        <InProgressColumn project={project} inProgressTasks={inProgressTasks} />
        <ReviewColumn project={project} reviewTasks={reviewTasks} />
        <CompleteColumn project={project} completeTasks={completeTasks} />
      </div>
    </Fragment>
  );
};

export default ProjectDashboard;
