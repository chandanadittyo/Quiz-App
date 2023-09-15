import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Styles/Account.module.css";

const Account = () => {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
    </div>
  );
};

export default Account;
