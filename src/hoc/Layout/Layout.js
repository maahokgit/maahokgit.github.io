import React from "react";

import Content from "../../containers/Content/Content";

import Spinner from "../../components/UI/Spinner/Spinner";

import Style from "./Layout.module.css";
import Footer from "../../containers/Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <div className={Style.Layout}>
        <Spinner />
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
