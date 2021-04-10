import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import fbavie from "../../../assets/img/fbavie.jpg";
import voltaCohort from "../../../assets/img/Volta-Cohort-.jpg";

import Style from "./LandingPage.module.css";
import {
  faCode,
  faDatabase,
  faDirections,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { Zoom } from "@material-ui/core";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Home | Edward Ma, MStJ";
  }, []);

  return (
    <Zoom in={true} mountOnEnter unmountOnExit>
      <Container>
        <Row>
          <Col lg={2} className={Style.Picture}>
            <img
              src={fbavie}
              alt="fb avatar cause i'm not graphic designer"
              className={Style.fbavie}
            />
          </Col>
          <Col lg={10} className={Style.textCenter}>
            <h1>Hi. I'm Edward.</h1>
            <h1>
              I'm <a href="/about">more</a> than a developer.
            </h1>
          </Col>
        </Row>

        <Row>
          <Col lg={12} className={Style.skillHighlight}>
            <h3>I started my career as a coder...</h3>
            <h4>with a limited set of skills.</h4>
          </Col>
          <Col className={Style.Skills} md={4}>
            <FontAwesomeIcon
              icon={faDatabase}
              size="3x"
              className={Style.Skill}
            />
            <h3>Database</h3>
            <h5>Design & Development</h5>
          </Col>
          <Col className={Style.Skills} md={4}>
            <FontAwesomeIcon
              icon={faGoogle}
              size="3x"
              className={Style.Skill}
            />
            <h3>Google Analytics</h3>
            <h5>Turn Data into Gold</h5>
          </Col>
          <Col className={Style.Skills} md={4}>
            <FontAwesomeIcon icon={faCode} size="3x" className={Style.Skill} />
            <h3>Front End Goodness</h3>
            <h5>Making it pop</h5>
          </Col>
        </Row>
        <Row className={Style.skillHighlight}>
          <Col md={6} className={Style.BusinessSkills}>
            <h3>
              Then I co-founded a{" "}
              <a href="https://bursity.org" target="_blank" rel="noreferrer">
                company
              </a>
            </h3>
            <h4>and gained new ones.</h4>
            <Row style={{ textAlign: "center" }}>
              <Col sm={4}>
                <FontAwesomeIcon
                  icon={faDirections}
                  size="3x"
                  className={Style.BusinessSkill}
                />
                <h5>Business Strategies</h5>
              </Col>
              <Col sm={4}>
                <FontAwesomeIcon
                  icon={faSearchengin}
                  size="3x"
                  className={Style.BusinessSkill}
                />
                <h5>Search Engine Optimization</h5>
              </Col>
              <Col sm={4}>
                <FontAwesomeIcon
                  icon={faHandshake}
                  size="3x"
                  className={Style.BusinessSkill}
                />
                <h5>Lead Generation</h5>
              </Col>
            </Row>
          </Col>
          <Col md={6} className={Style.Picture}>
            <img src={voltaCohort} alt="winning volta cohort" />
          </Col>
        </Row>
        <Row className={Style.skillHighlight}>
          <Col className={Style.Skills}>
            <h3>
              Learn more about me <a href="/about">here</a>.
            </h3>
          </Col>
        </Row>
      </Container>
    </Zoom>
  );
};

export default LandingPage;
