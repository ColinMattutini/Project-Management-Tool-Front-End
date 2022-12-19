import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const NewProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const nav = useNavigate();

  const projectNameHandler = (e) => {
    setProjectName(e.target.value);
  };

  const postProject = async () => {
    const response = await fetch("http://localhost:8080/api/save/project", {
      method: "POST",
      body: JSON.stringify({
        projectName: projectName,
      }),
      headers: { "content-type": "application/json" },
    });
  };

  const saveProject = (e) => {
    e.preventDefault();
    console.log(projectName);
    postProject();
    nav("/Projects/" + projectName);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Project Name"
        variant="filled"
        onChange={projectNameHandler}
      />
      <button onClick={saveProject}>SAVE</button>
    </Box>
  );
};

export default NewProjectForm;
