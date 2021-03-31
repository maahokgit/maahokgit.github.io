import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";

import Style from './NavBar.module.css';

const navBar = (props) => (
  <header className={Style.NavBar}>
    <nav className={Style.DeskTopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default navBar;
