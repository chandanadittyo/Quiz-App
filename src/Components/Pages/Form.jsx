import React from "react";
import classes from "../../Styles/Form.module.css";

// eslint-disable-next-line react/prop-types
const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
};

export default Form;
