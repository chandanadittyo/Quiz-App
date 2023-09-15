import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../../Styles/Video.module.css";
import image from "../../images/3.jpg";
const Video = () => {
  return (
    <NavLink to="/quiz">
      <div className={classes.video}>
        <img src={image} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Video;
