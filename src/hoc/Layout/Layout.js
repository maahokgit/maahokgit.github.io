import React from "react";

import Content from "../../containers/Content/Content";

import Style from "./Layout.module.css";
import Footer from "../../containers/Footer/Footer";
import MailchimpForm from "../../components/MailchimpForm/MailchimpForm";

const Layout = (props) => {
  return (
    <>
      <div className={Style.Layout}>
        <Content />
        <MailchimpForm />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
