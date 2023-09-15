import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../../Styles/Login.module.css";
import Button from "./Button";
import Form from "./Form";
import Illustration from "./Illustration";
import TextInput from "./TextInput";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.login} form`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Don't have an account? <NavLink to="/signup">Signup</NavLink>{" "}
            instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
