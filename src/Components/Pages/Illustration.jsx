import React from "react";
import classes from "../../Styles/Illustrations.module.css";
import signupImage from "../../images/signup.svg";
const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
};

export default Illustration;
