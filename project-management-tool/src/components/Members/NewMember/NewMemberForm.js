import React, { useRef } from "react";
import Modal from "../../UI/Modal.js";
import { Button, TextField } from "@mui/material";
import classes from "./NewMemberForm.module.css";
import { json } from "react-router-dom";

const NewMemberForm = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const jobTitle = useRef();

  const fetchPostUser = async (firstName, lastName, email, jobTitle) => {
    const response = await fetch("http://localhost:8080/api/save/user", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        jobTitle: jobTitle,
      }),
      headers: { "content-type": "application/json" },
    });
  };

  const submitUser = (e) => {
    e.preventDefault();
    fetchPostUser(
      firstName.current.value,
      lastName.current.value,
      email.current.value,
      jobTitle.current.value
    );
    props.newMemberModalHandler();
  };

  return (
    <Modal>
      <button onClick={props.newMemberModalHandler}>X</button>
      <form className={classes.column}>
        <h1>Add Member</h1>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          inputRef={firstName}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          inputRef={lastName}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          inputRef={email}
        />
        <TextField
          id="outlined-basic"
          label="Job Title"
          variant="outlined"
          inputRef={jobTitle}
        />
        <Button variant="contained" color="success" onClick={submitUser}>
          Add Member
        </Button>
      </form>
    </Modal>
  );
};

export default NewMemberForm;
