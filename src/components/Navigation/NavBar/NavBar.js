import React  from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideBarDrawer from "../SideBar/SideBarDrawer/SideBarDrawer";

import Style from "./NavBar.module.css";

const NavBar = (props) => (
    <header
      className={Style.NavBar}
    >
      <Logo />
      <nav className={Style.DeskTopOnly}>
        <NavigationItems />
      </nav>
      <SideBarDrawer clicked={props.sideBarToggleClicked}/>
    </header>
  );

export default NavBar;
