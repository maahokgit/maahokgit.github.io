import { useEffect } from "react";

import Slide from "@material-ui/core/Slide";

import {
  Grid
} from "@material-ui/core";

import ContactMe from "../../ContactMe/ContactMe";

import { JobExperience } from '../../../contentData/ContentData'

import Style from "./WorkPage.module.css";
const WorkPage = () => {
  useEffect(() => {
    document.title = "My Experience | Edward Ma, MStJ";
  }, []);

  return (
    <>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Grid container className={Style.Row}>
          <Grid md={4} xs={12} className={Style.collg4}>
            <h1>Experience</h1>
          </Grid>
          <Grid md={8} xs={12} className={Style.collg8}>
            <JobExperience />
          </Grid>
        </Grid>
      </Slide>
      <ContactMe />
    </>
  );
};

export default WorkPage;
