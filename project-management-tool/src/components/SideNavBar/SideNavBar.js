import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useNavigate } from "react-router-dom";

const drawerWidth = 180;

const SideNavBar = () => {
  const nav = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {/* {["Fitness App", "Forum App"].map((text, index) => ( */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                nav("/");
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                nav("/usertasks");
              }}
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={"My Tasks"} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                nav("/members");
              }}
            >
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary={"Members"} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Projects</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem
                disablePadding
                onClick={() => {
                  nav("/Projects/forumapplication");
                }}
              >
                <ListItemButton>
                  <ListItemText primary={"Forum Application"} />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                onClick={() => {
                  nav("/Projects/fitnesstracker");
                }}
              >
                <ListItemButton>
                  <ListItemText primary={"Fitness Tracker"} />
                </ListItemButton>
              </ListItem>
            </AccordionDetails>
          </Accordion>

          {/* ))} */}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideNavBar;
