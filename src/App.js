import React, { Suspense } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router";

import Layout from "./hoc/Layout/Layout";
import Spinner from "./components/UI/Spinner/Spinner";
import LandingPage from "./containers/content/LandingPage/LandingPage";

const AboutPage = React.lazy(() => {
  return import("./containers/content/AboutPage/AboutPage");
});

const ContactPage = React.lazy(() => {
  return import("./containers/content/ContactPage/ContactPage");
});

const WorkPage = React.lazy(() => {
  return import("./containers/content/WorkPage/WorkPage");
});

const App = () => {
  const routes = (
    <Switch>
      <Route path="/work" render={(props) => <WorkPage {...props} />} />
      <Route path="/about" render={(props) => <AboutPage {...props} />} />
      <Route path="/contact" render={(props) => <ContactPage {...props} />} />
      <Route exact path="/" component={LandingPage} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <>
      <Layout>
        <Suspense fallback={<Spinner />}>{routes}</Suspense>
      </Layout>
    </>
  );
};

export default withRouter(App);
