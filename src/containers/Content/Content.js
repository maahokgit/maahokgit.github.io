import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import Style from "./Content.module.css";

const Content = () => (
  <div className={Style.Content}>
    <h1>Under Construction</h1>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/maahokgit"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="2x"
            color="white"
            className={Style.fAHover}
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/maahokgit/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            color="white"
            className={Style.fAHover}
          />
        </a>
      </li>
    </ul>
  </div>
);

export default Content;
