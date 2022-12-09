import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(taskName, projectName, taskPriority, dateCreated, status) {
  return { taskName, projectName, taskPriority, dateCreated, status };
}

const rows = [
  createData(
    "Build Topic Favorites",
    "Forum App",
    "Medium",
    "12-22-2022",
    "In Progress"
  ),
  createData(
    "Fix search bar drop down",
    "Forum App",
    "Medium",
    "12-22-2022",
    "Backlog"
  ),
  createData(
    "Build Topic Favorites",
    "Fitness App",
    "Medium",
    "12-22-2022",
    "Review"
  ),
];

const UserTasksTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TaskName</TableCell>
            <TableCell align="right">Project Name</TableCell>
            <TableCell align="right">Task Priority</TableCell>
            <TableCell align="right">Date Created</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.taskName}
              </TableCell>
              <TableCell align="right">{row.projectName}</TableCell>
              <TableCell align="right">{row.taskPriority}</TableCell>
              <TableCell align="right">{row.dateCreated}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTasksTable;
