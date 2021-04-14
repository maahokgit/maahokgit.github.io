import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import NavigationItem from "./NavigationItem/NavigationItem";

import Style from "./NavigationItems.module.css";

const navigationItems = () => (
  <ul className={Style.NavigationItems}>
    <NavigationItem link="/experience">Experience</NavigationItem>
    {/* <NavigationItem link="/about">About</NavigationItem> */}
    <NavigationItem link="/contact">Contact</NavigationItem>
    <ul className={Style.FontAwesomeIcon}>
      <li>
        <a
          href="https://www.linkedin.com/in/maahokgit"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="white" />
        </a>
      </li>
      <li>
        <a href="https://github.com/maahokgit" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
        </a>
      </li>
    </ul>
  </ul>
);

export default navigationItems;
