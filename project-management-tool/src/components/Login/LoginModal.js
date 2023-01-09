import React from "react";
import Modal from "../UI/Modal";
import LoginForm from "./LoginForm";

const LoginModal = (props) => {
  return (
    <Modal>
      <button onClick={props.loginModalHandler}>X</button>
      <LoginForm loginModalHandler={props.loginModalHandler} />
    </Modal>
  );
};

export default LoginModal;
