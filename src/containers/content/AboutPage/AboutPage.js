import { useEffect } from "react";
import { Grid, Slide } from "@material-ui/core";

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

import ContactMe from '../../ContactMe/ContactMe';

import Style from "./AboutPage.module.css";

import selfie from "../../../assets/img/irisphoto.webp";
import voltaCohort from "../../../assets/img/Volta-Cohort-.webp";
import MStJ from "../../../assets/img/mstj.webp";

const AboutPage = () => {
  useEffect(() => {
    document.title = "Home | Edward Ma, MStJ";
  }, []);

  return (
    <>
      <Grid container spacing={5}>
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
            <Grid container xs={12} spacing={5} className={Style.skillIcon}>
              <Grid item sm={3} xs={4} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faHtml5} color="white" size="3x" />
                <p>HTML5</p>
              </Grid>
              <Grid item sm={3} xs={4} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faLess} color="white" size="3x" />
                <p>CSS3</p>
              </Grid>
              <Grid item sm={3} xs={4} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faJsSquare} color="white" size="3x" />
                <p>ES7</p>
              </Grid>
              <Grid item sm={3} xs={4} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faReact} color="white" size="3x" />
                <p>ReactJS</p>
              </Grid>
              <Grid item sm={3} xs={4} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faDatabase} color="white" size="3x" />
                <p>SQL</p>
              </Grid>
              <Grid item sm={3} xs={4} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faUbuntu} color="white" size="3x" />
                <p>Ubuntu</p>
              </Grid>
              <Grid item sm={3} xs={6} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faGitSquare} color="white" size="3x" />
                <p>Git</p>
              </Grid>
              <Grid item sm={3} xs={6} className={Style.iconCenter}>
                <FontAwesomeIcon icon={faSearchengin} color="white" size="3x" />
                <p>SEO</p>
              </Grid>
            </Grid>
          </Grid>
        </Slide>
      </Grid>
      <Grid container spacing={5} className={Style.Container}>
        <Grid item md={6} xs={12} className={Style.MoreAboutMe}>
          <h2>But I am more than a Developer.</h2>
          <h3>
            I am also the Co-Founder of{" "}
            <a href="https://Bursity.org" target="_blank" rel="noreferrer">
              Bursity.org
            </a>
            .
          </h3>
          <p>
            Where I am responsible for setting out which technological resources
            meet the company's short and long-term business goals and staying in
            touch with technology trends and development that would benefit the
            company.
          </p>
        </Grid>
        <Grid item md={6} xs={12} className={Style.Picture}>
          <figure>
            <img
              src={voltaCohort}
              alt="winning volta cohort"
              className={Style.MoreAboutMePic}
            />
            <figcaption>
              Bursity winning{" "}
              <a
                href="https://voltaeffect.com/five-%E2%80%8Batlantic%E2%80%8B-%E2%80%8Bcanadian%E2%80%8B-%E2%80%8Bstartups%E2%80%8B-receive%E2%80%8B-%E2%80%8B25000%E2%80%8B-%E2%80%8Binvestment%E2%80%8B-%E2%80%8Bfrom%E2%80%8B-%E2%80%8Bvolta-coho/"
                target="_blank"
                rel="noreferrer"
              >
                Volta Cohort
              </a>{" "}
              in 2019
            </figcaption>
          </figure>
        </Grid>
      </Grid>
      <Grid container spacing={5} className={Style.Container}>
        <Grid item md={6} xs={12} className={Style.MoreAboutMe}>
          <p>
            I spend my time expanding my knowledge of web and database
            development or anything tech related.
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
            as a Volunteer First Responder and with the{" "}
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
        <Grid item md={6} xs={12} className={Style.Picture}>
          <figure>
            <img
              src={MStJ}
              alt="acceptance into the order of st. john"
              className={Style.MoreAboutMePic}
            />
            <figcaption>
              Acceptance to the{" "}
              <a
                href="https://www.gg.ca/en/honours/canadian-honours/directory-honours/order-st-john"
                target="_blank"
                rel="noreferrer"
              >
                Order of St. John
              </a>
              , Priory Of Canada
            </figcaption>
          </figure>
        </Grid>
      </Grid>
      <ContactMe />
    </>
  );
};

export default AboutPage;
