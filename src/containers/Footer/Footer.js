import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import Style from "./Footer.module.css";
import { Link } from "react-router-dom";

const footer = () => {
  console.log(window.location.pathname);
  const contactLink =
    window.location.pathname !== "/contact" ? (
      <h3>
        Like what you see? <Link to="/contact">Let's Chat!</Link>
      </h3>
    ) : null;
  return (
    <footer className={Style.Footer}>
      {contactLink}
      <p>
        <FontAwesomeIcon icon={faCopyright} color="white" /> Copyright{" "}
        {new Date().getFullYear()} Edward Ma
      </p>
    </footer>
  );
};

export default footer;
