import React from "react";
import MeetTheTeam from "../components/About-components/MeetTheTeam";
import AboutUs from "../components/About-components/AboutUs";
import AboutWhyNot from "../components/About-components/AboutWhyNot";
import OurMainLocation from "../components/About-components/OurMainLocation";
import OurIdentity from "../components/About-components/OurIdentity";

const About: React.FC = () => {
  return (
  <>
      <AboutUs />
      <AboutWhyNot />
      <OurMainLocation />
      <OurIdentity />
      <MeetTheTeam />
    </>
  );
};

export default About;
