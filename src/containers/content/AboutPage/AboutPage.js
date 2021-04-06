import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Style from "./AboutPage.module.css";

import selfie from "../../../assets/img/selfie.jpg";
import { Slide } from "@material-ui/core";

const AboutPage = () => {
  useEffect(() => {
    console.log("[useEffect] - /about");
    document.title = "About Me - Edward Ma";
  }, []);
  return (
    <Container className={Style.Container}>
      <Row className={Style.row}>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Col lg={4} className={Style.Picture}>
            <img
              src={selfie}
              alt="i need a better pic"
              className={Style.selfie}
            />
          </Col>
        </Slide>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Col lg={8} className={Style.AboutMe}>
            <h2>
              My name is Edward, a web and database developer based out of
              beautiful Nova Scotia, Canada, and the Co-Founder & CTO of{" "}
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
          </Col>
        </Slide>
      </Row>
    </Container>
  );
};
export default AboutPage;
