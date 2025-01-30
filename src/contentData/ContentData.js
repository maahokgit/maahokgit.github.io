import { useEffect, useState } from "react";
import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";

import Spinner from "../components/UI/Spinner/Spinner";
import Style from "./ContentData.module.css";
// GraphQL Query
const query = `
{
  pageAboutmeCollection {
    items {
      shortDescription {
        json
      }
      professionalDescription {
        json
      }
      otherDescription {
        json
      }
    }
  }
  workExperienceCollection {
    items{
      jobTitle
      employer
      startEndDate
      description{
        json
      }
    }
  }
  footerCollection{
    items{
      footer{
        json
      }
    }
  }
}
`;

const contentSpaceID = process.env.REACT_APP_CONTENTFUL_SPACE;
const contentToken = process.env.REACT_APP_CONTENTFUL_DELIVERY_API;

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node) => {
      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {node.content[0].value}
        </a>
      );
    },
  },
};

const getData = async () =>
  await fetch(
    `https://graphql.contentful.com/content/v1/spaces/` + contentSpaceID,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + contentToken,
      },
      body: JSON.stringify({ query }),
    }
  )
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      }
      // rerender the entire component with new data
      return data;
    });

export const ProfDescription = () => {
  const [profDescription, setProfDescription] = useState(null);
  useEffect(() => {
    getData().then((value) =>
      setProfDescription(
        value.pageAboutmeCollection.items[0].professionalDescription.json
      )
    );
  }, []);
  return <>{documentToReactComponents(profDescription, options)}</>;
};

export const ShortDescription = () => {
  const [shortDescription, setShortDescription] = useState(null);
  useEffect(() => {
    getData().then((value) =>
      setShortDescription(
        value.pageAboutmeCollection.items[0].shortDescription.json
      )
    );
  }, []);
  return <>{documentToReactComponents(shortDescription, options)}</>;
};

export const OtherDescription = () => {
  const [otherDescription, setOtherDescription] = useState(null);
  useEffect(() => {
    getData().then((value) =>
      setOtherDescription(
        value.pageAboutmeCollection.items[0].otherDescription.json
      )
    );
  }, []);
  return <>{documentToReactComponents(otherDescription, options)}</>;
};

export const Footer = () => {
  const [footer, setFooter] = useState(null);
  useEffect(() => {
    getData().then((value) =>
      setFooter(value.footerCollection.items[0].footer.json)
    );
  }, []);
  
  return <>{documentToReactComponents(footer, options)}</>;
};

export const JobExperience = () => {
  const [experience, setExperience] = useState(null);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    getData().then((value) =>
      setExperience(value.workExperienceCollection.items)
    );
  }, []);

  let job = <Spinner />;
  if (experience !== null) {
    job = experience.map((job, index) => (
      <Grid container className={Style.Row}>
        <Accordion
          expanded={expanded === index}
          onChange={handleChange(index)}
          className={Style.Card}
        >
          <AccordionSummary>
            <CardContent className={Style.CardText}>
              <Typography variant="h6">{job.jobTitle}</Typography>
              <Typography variant="subtitle1">
                {documentToReactComponents(job.employer.json, options)}
              </Typography>
              <Typography variant="subtitle1">{job.startEndDate}</Typography>
            </CardContent>
          </AccordionSummary>
          <AccordionDetails>
            <CardContent className={Style.CardText}>
              {documentToReactComponents(job.description.json, options)}
            </CardContent>
          </AccordionDetails>
        </Accordion>
      </Grid>
    ));
  }
  return job;
};
