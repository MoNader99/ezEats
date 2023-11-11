import React from "react";
import MyAppBar from "../../utils/AppBar/AppBar";
import { Container } from "@mui/material";
import FirstSection from "./FirstSection";
import SecondSection from "./RestaurantBenefits";
import ThirdSection from "./FeaturesForClients";
import ForthSection from "./CalculateSavings";
import FifthSection from "./EzEatsCycle";
import SixthSection from "./HowToApply";
import SeventhSection from "./FAQs";

const Parse = require("parse");

const LandingPage: React.FC = () => {
  // const  currentUser = Parse.User.current();
  // console.log(currentUser)

  return (
    <Container sx={{ padding: "0" }}>
      <div className="landing-container">
        {/* <MyAppBar /> */}
        {/* <div>{currentUser.attributes.username}</div> */}
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <ForthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
      </div>
    </Container>
  );
};

export default LandingPage;
