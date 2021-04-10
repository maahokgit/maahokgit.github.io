import { useEffect } from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import Slide from "@material-ui/core/Slide";
import Style from "./WorkPage.module.css";
import { Link } from "react-router-dom";

const WorkPage = () => {
  useEffect(() => {
    document.title = "My Experience | Edward Ma, MStJ";
  }, []);

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Container className={Style.Container}>
        <Row className={Style.Row}>
          <Col lg={4} className={Style.collg4}>
            <h1>Experience</h1>
          </Col>
          <Col lg={8} className={Style.collg8}>
            <Accordion className={Style.Accordion}>
              <Row className={Style.Row}>
                <Card className={Style.Card}>
                  <Card.Body>
                    <Card.Title>Co-Founder & CTO</Card.Title>
                    <Card.Subtitle className={Style.CardSubtitle}>
                      <Card.Link href="https://Bursity.org" target="_blank">
                        Bursity.org
                      </Card.Link>{" "}
                      - Halifax, Nova Scotia
                    </Card.Subtitle>
                    <Card.Subtitle className={Style.CardSubtitle}>
                      August 2018 - Present
                    </Card.Subtitle>
                    <Accordion.Toggle as={Link} eventKey="0">
                      Details
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Text className={Style.CardText}>
                        <ul>
                          <li>
                            Co-developing in the creation of System Analysis and
                            Design with Co-Founder and CEO
                          </li>
                          <li>
                            Design, develop and documenting System Flow Diagram,
                            Development timeline, Entity Relation Diagram, and
                            Data Dictionary
                          </li>
                          <li>
                            Design and Prototype product UI, UX, and creation of
                            product demo
                          </li>
                          <li>
                            Perform AWS administration and DevOps. Ex: Amazon
                            Workspace, RDS with MariaDB, CodeCommit,
                            CodePipeline and WP with LightSail
                          </li>
                          <li>
                            Overseeing and managing the development of MVP with
                            a team of 3 summer students
                          </li>
                          <li>
                            Successfully launched student-facing MVP of over 49k
                            financial awards valued at over $450M, leading to
                            helping over 300 marginalized students across Canada
                            and the US
                          </li>
                        </ul>
                      </Card.Text>
                    </Accordion.Collapse>
                  </Card.Body>
                </Card>
              </Row>
              <Row className={Style.Row}>
                <Card className={Style.Card}>
                  <Card.Body>
                    <Card.Title>Software Developer</Card.Title>
                    <Card.Subtitle className={Style.CardSubtitle}>
                      <Card.Link href="https://www.vmo.aero/" target="_blank">
                        VMO Solution
                      </Card.Link>{" "}
                      - Halifax, Nova Scotia
                    </Card.Subtitle>
                    <Card.Subtitle className={Style.CardSubtitle}>
                      Nov 2019 - Jan 2020
                    </Card.Subtitle>
                    <Accordion.Toggle as={Link} eventKey="1">
                      Details
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Text className={Style.CardText}>
                        <ul>
                          <li>
                            Built RESTful API within React to connect to MongoDB
                            using AWS Serverless and Lambda Functions
                          </li>
                          <li>
                            Developing specialized module using React, utilizing
                            Formik for form building, Material-UI Framework
                          </li>
                        </ul>
                      </Card.Text>
                    </Accordion.Collapse>
                  </Card.Body>
                </Card>
              </Row>
              <Row className={Style.Row}>
                <Card className={Style.Card}>
                  <Card.Body>
                    <Card.Title>Analytic Developer</Card.Title>
                    <Card.Subtitle className={Style.CardSubtitle}>
                      <Card.Link
                        href="https://www.verbinteractive.com/"
                        target="_blank"
                      >
                        VERB Interactive
                      </Card.Link>{" "}
                      - Halifax, Nova Scotia
                    </Card.Subtitle>
                    <Card.Subtitle className={Style.CardSubtitle}>
                      Mar 2019 - Jul 2020
                    </Card.Subtitle>
                    <Accordion.Toggle as={Link} eventKey="2">
                      Details
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Text className={Style.CardText}>
                        <ul>
                          <li>
                            Set up full analytics tracking (Page Data,
                            eCommerce, UX) using Google Tag Manager and Google
                            Analytics
                          </li>
                          <li>
                            Partnered with Analytics Reporters and Account
                            Managers to troubleshoot and develop analytics
                            requirements
                          </li>
                          <li>
                            Utilized JavaScript and jQuery to monitor DOM
                            interaction and react to them for analytic purposes
                          </li>
                          <li>
                            Used Google Optimize for A/B testing to change
                            elements on a page
                          </li>
                          <li>
                            Implemented third-party tracking requirements and
                            platforms, such as Facebook Pixel, to measure
                            Facebook Ads results
                          </li>
                          <li>
                            Communicated technical needs with internal and
                            external stakeholders
                          </li>
                        </ul>
                      </Card.Text>
                    </Accordion.Collapse>
                  </Card.Body>
                </Card>
              </Row>
              <Row className={Style.Row}>
                <Card className={Style.Card}>
                  <Card.Body>
                    <Card.Title>Application Developer</Card.Title>
                    <Card.Subtitle className={Style.CardSubtitle}>
                      <Card.Link href="https://getguild.co/" target="_blank">
                        Guild Software Inc.
                      </Card.Link>{" "}
                      - Bedford, Nova Scotia
                    </Card.Subtitle>
                    <Card.Subtitle className={Style.CardSubtitle}>
                      Jun 2018 - Mar 2019
                    </Card.Subtitle>
                    <Accordion.Toggle as={Link} eventKey="3">
                      Details
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Text className={Style.CardText}>
                        <ul>
                          <li>
                            Utilized MySQL Stored Procedures for ETL and Data
                            Migration
                          </li>
                          <li>
                            Designed and implemented specialized reporting
                            modules with Laravel, Eloquent, and PHP based on the
                            client’s business and technical requirements
                          </li>
                          <li>
                            Developed Front-End Web Application with Joomla,
                            JavaScript(jQuery), HTML5, CSS3 (LESS), and
                            Bootstrap
                          </li>
                          <li>
                            Partnered with a graphic designer and completed an
                            e-commerce website using LemonStand while
                            simultaneously learning the ZURB Foundation
                            Framework
                          </li>
                          <li>
                            Continuingly implemented new features, improvements
                            and provided support to existing web applications
                          </li>
                        </ul>
                      </Card.Text>
                    </Accordion.Collapse>
                  </Card.Body>
                </Card>
              </Row>
              <Row className={Style.Row}>
                <Card className={Style.Card}>
                  <Card.Body>
                    <Card.Title>Business Analyst Intern</Card.Title>
                    <Card.Subtitle className={Style.CardSubtitle}>
                      <Card.Link href="https://novascotia.ca/" target="_blank">
                        Government of Nova Scotia
                      </Card.Link>{" "}
                      - Halifax, Nova Scotia
                    </Card.Subtitle>
                    <Card.Subtitle className={Style.CardSubtitle}>
                      May 2017 - Aug 2017
                    </Card.Subtitle>
                    <Accordion.Toggle as={Link} eventKey="4">
                      Details
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Text className={Style.CardText}>
                        <ul>
                          <li>
                            Collaborated with a Sr. Business Analyst and
                            Information Architect to develop a Business Case for
                            the Corporate Data as a Service Project by analyzing
                            the business process
                          </li>
                          <li>
                            Contributed to the development of Conceptual Data
                            Analytic Reference Architecture, Data & Analytics
                            Service Model, and Organizational Structure
                          </li>
                          <li>
                            Investigated and attained an understanding of Master
                            Data Management, Metadata Management, Data Quality,
                            and Data Governance
                          </li>
                          <li>
                            Achieved basic knowledge of Kimball Methodology for
                            Dimensional Modeling, Data Integration, Data
                            Virtualization, Data Lake, and Kimball & Inmon Data
                            Warehouse Architecture
                          </li>
                        </ul>
                      </Card.Text>
                    </Accordion.Collapse>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Slide>
  );
};

export default WorkPage;
