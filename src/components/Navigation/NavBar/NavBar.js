import React  from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideBarDrawer from "../SideBar/SideBarDrawer/SideBarDrawer";

import Style from "./NavBar.module.css";

const NavBar = (props) => {
  // const [scrolling, SetScrolling] = useState(false);

  // const checkOnScrollHandler = () => {
  //   if (window.scrollY < 50) {
  //     SetScrolling(false);
  //   } else if (window.scrollY > 50) {
  //     SetScrolling(true);
  //   }
  // };
  // window.addEventListener("scroll", checkOnScrollHandler);

  return (
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
};

export default NavBar;
