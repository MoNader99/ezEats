import React from "react";
import MyAppBar from "../../utils/AppBar/AppBar";
import "./HomePage.css";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../../components/LandingPage/LandingPage";
import Footer from "../../utils/AppBar/footer";

const HomePage: React.FC = () => {
  return (
    <div>
      <Container sx={{ maxWidth: "1300px !important" }}>
        <div className="home-container">
          <MyAppBar />

          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
