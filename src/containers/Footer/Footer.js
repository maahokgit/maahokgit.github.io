import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import Style from './Footer.module.css';

const Footer = () => (
  <footer className={Style.Footer}>
    <p><FontAwesomeIcon icon={faCopyright} color='white'/> Copyright {new Date().getFullYear()} Edward Ma </p> 
    <p><a
          href="https://www.linkedin.com/in/maahokgit"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            // size="2x"
            color="white"
            className={Style.fAHover}
          />
        </a>        <a
          href="https://github.com/maahokgit/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            // size="2x"
            color="white"
            className={Style.fAHover}
          />
        </a></p>
  </footer>
);


export default Footer;