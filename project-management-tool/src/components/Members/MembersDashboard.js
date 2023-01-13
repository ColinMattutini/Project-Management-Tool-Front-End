import React, { Fragment, useContext, useState } from "react";
import MembersTable from "./MembersTable";
import classes from "./MembersDashBoard.module.css";
import { Button } from "@mui/material";
import NewMemberForm from "./NewMember/NewMemberForm";
import AuthContext from "../../context/AuthContext";

const MembersDashBoard = () => {
  const [showNewMemberModal, setShowNewMemberModal] = useState(false);
  const authCtx = useContext(AuthContext);

  const newMemberModalHandler = () => {
    showNewMemberModal
      ? setShowNewMemberModal(false)
      : setShowNewMemberModal(true);
  };

  return (
    <Fragment>
      {showNewMemberModal && (
        <NewMemberForm newMemberModalHandler={newMemberModalHandler} />
      )}
      <div className={classes.column}>
        {authCtx.isLoggedIn && (
          <Button
            variant="contained"
            color="success"
            onClick={newMemberModalHandler}
          >
            Add Member
          </Button>
        )}
        <MembersTable />
      </div>
    </Fragment>
  );
};

export default MembersDashBoard;
