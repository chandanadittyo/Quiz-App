import React from "react";
import classes from "../../Styles/SignupForm.module.css";

// eslint-disable-next-line react/prop-types
const SignupFrom = ({ children, className, ...rest }) => {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
};

export default SignupFrom;
