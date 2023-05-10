import React, { lazy, Suspense } from "react";
import Loader from "../shared/Loader/Loader";
import MeetTheTeam from "../components/About-components/MeetTheTeam";
const AboutUs = lazy(() => import("../components/About-components/AboutUs"));
const AboutWhyNot = lazy(() => import("../components/About-components/AboutWhyNot"));
const OurMainLocation = lazy(() => import("../components/About-components/OurMainLocation"));
const OurIdentity = lazy(() => import("../components/About-components/OurIdentity/index"));
const About: React.FC = () => {
  return (
    <Suspense
      fallback={
        <Loader />
      }
    >
      <AboutUs />
      <AboutWhyNot />
      <OurMainLocation />
      <OurIdentity />
      <MeetTheTeam />
    </Suspense>
  );
};

export default About;
