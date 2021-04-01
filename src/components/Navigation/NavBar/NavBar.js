import React, { useState } from "react";
import NavigationItems from "../NavigationItems/NavigationItems";

import Style from "./NavBar.module.css";

const NavBar = (props) => {
  const [scrolling, SetScrolling] = useState(false);

  const checkOnScrollHandler = () => {
    if (window.scrollY < 50) {
      SetScrolling(false);
    } else if (window.scrollY > 50) {
      SetScrolling(true);
    }
  };
  window.addEventListener("scroll", checkOnScrollHandler);

  return (
    <header
      className={[Style.NavBar, scrolling ? Style.onScroll : ""].join(" ")}
    >
      <nav className={Style.DeskTopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default NavBar;
