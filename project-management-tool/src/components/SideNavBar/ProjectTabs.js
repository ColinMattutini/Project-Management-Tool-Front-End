import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

const ProjectTabs = (props) => {
  const nav = useNavigate();

  return (
    <ListItem
      disablePadding
      onClick={() => {
        nav("/Projects/" + props.projectName);
      }}
    >
      <ListItemButton>
        <ListItemText primary={props.projectName} />
      </ListItemButton>
    </ListItem>
  );
};

export default ProjectTabs;
