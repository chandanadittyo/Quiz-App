import React from "react";
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
            <a href="index.html" className={classes.brand}>
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </a>
          </li>
        </ul>
        <Account />
      </nav>
    </div>
  );
};

export default Nav;
