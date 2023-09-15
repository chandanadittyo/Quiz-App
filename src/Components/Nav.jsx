import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Nav.module.css";
import classes from "../Styles/Nav.module.css";
import logo from "../images/logo-bg.png";
import Account from "./Account";

const Nav = () => {
  return (
    <div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" className={classes.brand}>
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </NavLink>
          </li>
        </ul>
        <Account />
      </nav>
    </div>
  );
};

export default Nav;
