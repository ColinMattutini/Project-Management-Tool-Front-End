import React from "react";
import MembersTable from "./MembersTable";
import classes from "./MembersDashBoard.module.css";

const MembersDashBoard = () => {
  return (
    <div className={classes.column}>
      <MembersTable />
    </div>
  );
};

export default MembersDashBoard;
