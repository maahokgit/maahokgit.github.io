import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideBarDrawer from "../SideBar/SideBarDrawer/SideBarDrawer";

import Style from "./NavBar.module.css";

const NavBar = (props) => (
  <header className={Style.NavBar}>
    <div>
      <Logo />
      <nav className={Style.DeskTopOnly}>
        <NavigationItems />
      </nav>
      <SideBarDrawer clicked={props.sideBarToggleClicked} />
    </div>
  </header>
);

export default NavBar;
