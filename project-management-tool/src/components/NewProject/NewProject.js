import React from "react";
import classes from "./NewProject.module.css";
import NewProjectForm from "./NewProjectForm";

const NewProject = () => {
  return (
    <div className={classes.column}>
      <NewProjectForm />
    </div>
  );
};

export default NewProject;
