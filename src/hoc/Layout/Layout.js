import React, { useState } from "react";

import NavBar from "../../components/Navigation/NavBar/NavBar";
import SideBar from "../../components/Navigation/SideBar/SideBar";

const Layout = (props) => {

  const [showSideBar, setShowSideBar] = useState(false);

  const SideBarClosedHandler = () => {
    setShowSideBar(false);
  };

  const SideBarToggleHandler = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div>
      <NavBar sideBarToggleClicked={SideBarToggleHandler}/>
      <SideBar open={showSideBar} closed={SideBarClosedHandler} />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;