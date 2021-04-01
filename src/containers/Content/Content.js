import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import Style from './Content.module.css';

const Content = () => (
  <div className={Style.Content}>
    <h1>Under Construction</h1>
    <ul>
      <li>
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="white" />
      </li>
      <li>
        <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
      </li>
    </ul>
  </div>
);

export default Content;
