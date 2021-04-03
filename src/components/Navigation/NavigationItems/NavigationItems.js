import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import Style from "./NavigationItems.module.css";

const navigationItems = (props) => (
  <ul className={Style.NavigationItems}>
    <li className={Style.Items}>Work</li>
    <li className={Style.Items}>About</li>
    <li className={Style.Items}>Contact</li>
    <ul className={Style.FontAwesomeIcon}>
      <li>
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="white" />
      </li>
      <li>
        <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
      </li>
    </ul>
  </ul>
);

export default navigationItems;
