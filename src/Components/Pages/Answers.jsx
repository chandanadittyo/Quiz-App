import React from "react";
import classes from "../../Styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="test Question" />
    </div>
  );
};

export default Answers;
