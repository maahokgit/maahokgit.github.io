import { useEffect } from "react";
import { Grid, Slide } from "@material-ui/core";

import Style from "./AboutPage.module.css";

import selfie from "../../../assets/img/selfie.jpg";


const AboutPage = () => {
  useEffect(() => {
    document.title = "About Me | Edward Ma, MStJ";
  }, []);

  return (
    <Grid container className={Style.row}>
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Grid lg={4} className={Style.Picture}>
          <img
            src={selfie}
            alt="i need a better pic"
            className={Style.selfie}
          />
        </Grid>
      </Slide>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Grid lg={8} className={Style.AboutMe}>
          <h2>
            I'm Edward, a web and database developer based out of beautiful Nova
            Scotia, Canada, and the Co-Founder & CTO of{" "}
            <a href="https://Bursity.org" target="_blank" rel="noreferrer">
              Bursity.org
            </a>
            .
          </h2>
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
      </Slide>
    </Grid>
  );
};

export default AboutPage;
