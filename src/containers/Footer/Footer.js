import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import Style from "./Footer.module.css";

const footer = () => {
  return (
    <footer className={Style.Footer}>
          <p>
            Edward Ma <FontAwesomeIcon icon={faCopyright} color="white" />{" "}
            Copyright {new Date().getFullYear()}
          </p>
          <p>
            This site is built with{" "}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              React
            </a>
            , and{" "}
            <a href="https://material-ui.com/" target="_blank" rel="noreferrer">
              Material UI
            </a>
            , using{" "}
            <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">
              Font Awesome Icons
            </a>
            , written using{" "}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              VS Code
            </a>
            . Version control is handled by{" "}
            <a
              href="https://github.com/maahokgit"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            with{" "}
            <a
              href="https://www.gitkraken.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitKraken
            </a> for GUI. Hosting and deployment by{" "}
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Google Firebase
            </a>
            .
          </p>
    </footer>
  );
};

export default footer;
