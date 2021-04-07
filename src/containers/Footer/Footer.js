import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import Style from "./Footer.module.css";

const footer = () => {

  return (
    <footer className={Style.Footer}>
      <p>
        <FontAwesomeIcon icon={faCopyright} color="white" /> Copyright{" "}
        {new Date().getFullYear()} Edward Ma
      </p>
    </footer>
  );
};

export default footer;
