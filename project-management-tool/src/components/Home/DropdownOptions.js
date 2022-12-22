import React, { useEffect, useRef, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const projects = JSON.parse(localStorage.getItem("projects"));

const DropdownOptions = (props) => {
  const [project, setProject] = useState();

  const logger = () => {
    console.log(project);
    props.projectNameHandler(project);
  };

  const projectHandler = (e) => {
    setProject(e.target.value);
  };

  useEffect(() => {
    logger();
  }, [project]);

  return (
    <div>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue={projects[0].projectName}
        helperText="Please select your currency"
        // inputRef={project}
        onChange={projectHandler}
      >
        {projects.map((option) => (
          <MenuItem key={option.projectName} value={option.projectName}>
            {option.projectName}
          </MenuItem>
        ))}
      </TextField>
      <button onClick={logger}></button>
    </div>
  );
};

export default DropdownOptions;
