import { useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

import Style from "./AboutPage.module.css";

import selfie from "../../../assets/img/selfie.jpg";

const AboutPage = () => {
  useEffect(() => {
    console.log("[useEffect] - /about");
    document.title = "About Me - Edward Ma";
  }, []);
  return (
    <Container className={Style.Container}>
      <Row>
        <Col lg={4} className={Style.Picture}>
          <img
            src={selfie}
            alt="i need a better pic"
            className={Style.selfie}
          />
        </Col>
        <Col lg={8} className={Style.AboutMe}>
          <h2>
            My name is Edward, a web and database developer based out of
            beautiful Nova Scotia, Canada, and the Co-Founder & CTO of{" "}
            <Card.Link href="https://Bursity.org" target="_blank">
              Bursity.org
            </Card.Link>
            .
          </h2>
          <p>
            These days I spent my time expanding my knowledge of web and
            database development or anything tech and startup related.
          </p>
          <p>
            Outside of that, you will find me serving my community with{" "}
            <Card.Link href="http://www.ns.sjaresponder.ca/" target="_blank">
              St. John Ambulance NS/PEI
            </Card.Link>{" "}
            as a Volunteer First Responder and other non-profit organizations,
            such as the{" "}
            <Card.Link href="https://www.mentalhealthns.ca/" target="_blank">
              Mental Health Foundation of Nova Scotia
            </Card.Link>
            .
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutPage;
