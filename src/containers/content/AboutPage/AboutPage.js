import { useEffect } from "react";
import { Grid, Slide } from "@material-ui/core";
import Style from "./AboutPage.module.css";

import selfie from "../../../assets/img/selfie.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faHtml5,
  faReact,
  faLess,
  faSearchengin,
  faGitSquare,
  faUbuntu,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import voltaCohort from "../../../assets/img/Volta-Cohort-.jpg";
import MStJ from '../../../assets/img/mstj.jpeg'

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Me | Edward Ma, MStJ";
  }, []);

  return (
    <>
      <Grid container spacing={5} className={Style.row}>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Grid item md={4} xs={12} className={Style.Picture}>
            <img
              src={selfie}
              alt="i need a better pic"
              className={Style.selfie}
            />
          </Grid>
        </Slide>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Grid item md={8} xs={12} className={Style.AboutMe}>
            <h1>
              Hi. I'm Edward, a web and database developer based out of
              beautiful{" "}
              <a
                href="https://www.google.ca/maps/place/Nova+Scotia/"
                target="_blank"
                rel="noreferrer"
              >
                Nova Scotia, Canada
              </a>
              .
            </h1>
            <h2>I am more than a Developer.</h2>
            <Grid container xs={12} spacing={5} style={{ marginTop: 20 }}>
              <Grid item xs={3} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faHtml5} color="white" size="3x" />
                <p>HTML5</p>
              </Grid>
              <Grid item xs={3} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faLess} color="white" size="3x" />
                <p>LESS/CSS3</p>
              </Grid>
              <Grid item xs={3} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faJsSquare} color="white" size="3x" />
                <p>JavaScrip/ES7</p>
              </Grid>
              <Grid item xs={3} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faReact} color="white" size="3x" />
                <p>ReactJS</p>
              </Grid>
              <Grid item xs={3} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faDatabase} color="white" size="3x" />
                <p>SQL</p>
              </Grid>
              <Grid item xs={3} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faUbuntu} color="white" size="3x" />
                <p>Linux/Ubuntu</p>
              </Grid>
              <Grid item xs={3} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faGitSquare} color="white" size="3x" />
                <p>Git</p>
              </Grid>
              <Grid item xs={3} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faSearchengin} color="white" size="3x" />
                <p>SEO</p>
              </Grid>
            </Grid>
          </Grid>
        </Slide>
        <Grid container spacing={5} className={Style.Container}>
          <Grid item md={6} xs={12} className={Style.MoreAboutMe}>
            <h3>I am the Co-Founder & CTO of <a href="https://Bursity.org" target="_blank" rel="noreferrer">
              Bursity.org
            </a>.</h3>
            <p>
              Where I am responsible for setting out which technological resources
              meet the company's short and long-term business goals and staying
              in touch with technology trends and development that would benefit
              the company.
            </p>
          </Grid>
          <Grid item md={6} xs={12} className={Style.Picture}>
            <img src={voltaCohort} alt="winning volta cohort" className={Style.MoreAboutMePic} />
          </Grid>
        </Grid>
        <Grid container spacing={5} className={Style.Container}>
          <Grid item md={6} xs={12} className={Style.Picture}>
            <img src={MStJ} alt='acceptance into the order of st. john' className={Style.MoreAboutMePic} />
          </Grid>
          <Grid item md={6} xs={12} className={Style.MoreAboutMe}>
            <p>
            These days I spent my time expanding my knowledge of web and
            database development or anything tech and startup related.
          </p>
          <p>
            Outside of that, you will find me serving my community with{" "}
            <a
              href="http://www.ns.sjaresponder.ca/"
              target="_blank"
              rel="noreferrer"
            >
              St. John Ambulance NS/PEI
            </a>{" "}
            as a Volunteer First Responder and other non-profit organizations,
            such as the{" "}
            <a
              href="https://www.mentalhealthns.ca/"
              target="_blank"
              rel="noreferrer"
            >
              Mental Health Foundation of Nova Scotia
            </a>
            .
          </p>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutPage;
