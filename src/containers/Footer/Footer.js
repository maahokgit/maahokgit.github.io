import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import Style from "./Footer.module.css";
import { Grid } from "@material-ui/core";

const footer = () => {
  return (
    <footer className={Style.Footer}>
      <Grid container>
        <Grid item>
          <p>
            Edward Ma <FontAwesomeIcon icon={faCopyright} color="white" />{" "}
            Copyright {new Date().getFullYear()}
          </p>
          <p>
            This site is built with{" "}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              React
            </a>
            ,{" "}
            <a href="https://material-ui.com/" target="_blank" rel="noreferrer">
              Material UI
            </a>
            , and{" "}
            <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">
              Font Awesome
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
            </a>
            . Hosting and deployment by{" "}
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Google Firebase
            </a>
            .
          </p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default footer;
