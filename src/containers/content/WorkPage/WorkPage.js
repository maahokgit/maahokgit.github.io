import { useEffect, useState } from "react";

import Slide from "@material-ui/core/Slide";

import {
  Grid,
  Typography,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

import ContactMe from "../../ContactMe/ContactMe";

import Style from "./WorkPage.module.css";
const WorkPage = () => {
  useEffect(() => {
    document.title = "My Experience | Edward Ma, MStJ";
  }, []);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Grid container className={Style.Row}>
          <Grid md={4} xs={12} className={Style.collg4}>
            <h1>Experience</h1>
          </Grid>
          <Grid md={8} xs={12} className={Style.collg8}>
            <Grid container className={Style.Row}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                className={Style.Card}
              >
                <AccordionSummary>
                  <CardContent className={Style.CardText}>
                    <Typography variant="h6">Co-Founder & CTO</Typography>
                    <Typography variant="subtitle1">
                      <a
                        href="https://Bursity.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Bursity.org
                      </a>{" "}
                      - Halifax, Nova Scotia
                    </Typography>
                    <Typography variant="subtitle1">
                      August 2018 - Present
                    </Typography>
                  </CardContent>
                </AccordionSummary>
                <AccordionDetails className={Style.CardT}>
                  <CardContent className={Style.CardText}>
                    <ul>
                      <li>
                        Co-developing in the creation of System Analysis and
                        Design with Co-Founder and CEO
                      </li>
                      <li>
                        Design, develop and documenting System Flow Diagram,
                        Development timeline, Entity Relation Diagram, and Data
                        Dictionary
                      </li>
                      <li>
                        Design and Prototype product UI, UX, and creation of
                        product demo
                      </li>
                      <li>
                        Perform AWS administration and DevOps. Ex: Amazon
                        Workspace, RDS with MariaDB, CodeCommit, CodePipeline
                        and WP with LightSail
                      </li>
                      <li>
                        Overseeing and managing the development of MVP with a
                        team of 3 summer students
                      </li>
                      <li>
                        Successfully launched student-facing MVP of over 49k
                        financial awards valued at over $450M, leading to
                        helping over 300 marginalized students across Canada and
                        the US
                      </li>
                    </ul>
                  </CardContent>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid container className={Style.Row}>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                className={Style.Card}
              >
                <AccordionSummary>
                  <CardContent className={Style.CardText}>
                    <Typography variant="h6">Software Developer</Typography>
                    <Typography variant="subtitle1">
                      <a
                        href="https://www.vmo.aero/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        VMO Solution
                      </a>{" "}
                      - Halifax, Nova Scotia
                    </Typography>
                    <Typography variant="subtitle1">
                      Nov 2019 - Jan 2020
                    </Typography>
                  </CardContent>
                </AccordionSummary>
                <AccordionDetails className={Style.CardT}>
                  <CardContent className={Style.CardText}>
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
                  </CardContent>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid container className={Style.Row}>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                className={Style.Card}
              >
                <AccordionSummary>
                  <CardContent className={Style.CardText}>
                    <Typography variant="h6">Analytic Developer</Typography>
                    <Typography variant="subtitle1">
                      <a
                        href="https://www.verbinteractive.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        VERB Interactive
                      </a>{" "}
                      - Halifax, Nova Scotia
                    </Typography>
                    <Typography variant="subtitle1">
                      Mar 2019 - Jul 2020
                    </Typography>
                  </CardContent>
                </AccordionSummary>
                <AccordionDetails className={Style.CardT}>
                  <CardContent className={Style.CardText}>
                    <ul>
                      <li>
                        Set up full analytics tracking (Page Data, eCommerce,
                        UX) using Google Tag Manager and Google Analytics
                      </li>
                      <li>
                        Partnered with Analytics Reporters and Account Managers
                        to troubleshoot and develop analytics requirements
                      </li>
                      <li>
                        Utilized JavaScript and jQuery to monitor DOM
                        interaction and react to them for analytic purposes
                      </li>
                      <li>
                        Used Google Optimize for A/B testing to change elements
                        on a page
                      </li>
                      <li>
                        Implemented third-party tracking requirements and
                        platforms, such as Facebook Pixel, to measure Facebook
                        Ads results
                      </li>
                      <li>
                        Communicated technical needs with internal and external
                        stakeholders
                      </li>
                    </ul>
                  </CardContent>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid container className={Style.Row}>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                className={Style.Card}
              >
                <AccordionSummary>
                  <CardContent className={Style.CardText}>
                    <Typography variant="h6">Application Developer</Typography>
                    <Typography variant="subtitle1">
                      <a
                        href="https://getguild.co/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Guild Software Inc.
                      </a>{" "}
                      - Halifax, Nova Scotia
                    </Typography>
                    <Typography variant="subtitle1">
                      Jun 2018 - Mar 2019
                    </Typography>
                  </CardContent>
                </AccordionSummary>
                <AccordionDetails className={Style.CardT}>
                  <CardContent className={Style.CardText}>
                    <ul>
                      <li>
                        Utilized MySQL Stored Procedures for ETL and Data
                        Migration
                      </li>
                      <li>
                        Designed and implemented specialized reporting modules
                        with Laravel, Eloquent, and PHP based on the client’s
                        business and technical requirements
                      </li>
                      <li>
                        Developed Front-End Web Application with Joomla,
                        JavaScript(jQuery), HTML5, CSS3 (LESS), and Bootstrap
                      </li>
                      <li>
                        Partnered with a graphic designer and completed an
                        e-commerce website using LemonStand while simultaneously
                        learning the ZURB Foundation Framework
                      </li>
                      <li>
                        Continuingly implemented new features, improvements and
                        provided support to existing web applications
                      </li>
                    </ul>
                  </CardContent>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid container className={Style.Row}>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                className={Style.Card}
              >
                <AccordionSummary>
                  <CardContent className={Style.CardText}>
                    <Typography variant="h6">
                      Business Analyst Intern
                    </Typography>
                    <Typography variant="subtitle1">
                      <a
                        href="https://novascotia.ca/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Government of Nova Scotia
                      </a>{" "}
                      - Halifax, Nova Scotia
                    </Typography>
                    <Typography variant="subtitle1">
                      May 2017 - Aug 2017
                    </Typography>
                  </CardContent>
                </AccordionSummary>
                <AccordionDetails className={Style.CardT}>
                  <CardContent className={Style.CardText}>
                    <ul>
                      <li>
                        Collaborated with a Sr. Business Analyst and Information
                        Architect to develop a Business Case for the Corporate
                        Data as a Service Project by analyzing the business
                        process
                      </li>
                      <li>
                        Contributed to the development of Conceptual Data
                        Analytic Reference Architecture, Data & Analytics
                        Service Model, and Organizational Structure
                      </li>
                      <li>
                        Investigated and attained an understanding of Master
                        Data Management, Metadata Management, Data Quality, and
                        Data Governance
                      </li>
                      <li>
                        Achieved basic knowledge of Kimball Methodology for
                        Dimensional Modeling, Data Integration, Data
                        Virtualization, Data Lake, and Kimball & Inmon Data
                        Warehouse Architecture
                      </li>
                    </ul>
                  </CardContent>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </Slide>
      <ContactMe />
    </>
  );
};

export default WorkPage;
