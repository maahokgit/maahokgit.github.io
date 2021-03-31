import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

import Style from "./NavigationItems.module.css";

const navigationItems = (props) => (
  <ul className={Style.NavigationItems}>
    <li>Work</li>
    <li>About</li>
    <li>Contact</li>
    <li><FontAwesomeIcon icon={faLinkedinIn} size='lg'/></li>
    <li><FontAwesomeIcon icon={faTwitter} size='lg'/></li>
  </ul>
);

export default navigationItems;
