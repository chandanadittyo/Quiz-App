import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../../Styles/ProgressBar.module.css";
import Button from "./Button";

const ProgressBar = () => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>24% Complete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <NavLink to="/result">
        <Button className={classes.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </NavLink>
    </div>
  );
};

export default ProgressBar;
