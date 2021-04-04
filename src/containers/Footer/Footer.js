import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import Style from "./Footer.module.css";
import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";

const footer = () => (
  <footer className={Style.Footer}>
    <nav>
      <NavigationItems />
    </nav>
    <p>
      <FontAwesomeIcon icon={faCopyright} color="white" /> Copyright{" "}
      {new Date().getFullYear()} Edward Ma
    </p>
  </footer>
);

export default footer;
