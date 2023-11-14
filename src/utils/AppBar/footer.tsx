import React from "react";
import Container from "@mui/material/Container";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#F13C4F",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "14px",
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <div style={{ textAlign: "center" }}>
          Copyright © 2023 - Ez Eats
          <br />
          <a style={{ color: "white" }} href="#">
            Terms & Conditions
          </a>{" "}
          /{" "}
          <a style={{ color: "white" }} href="#">
            Privacy Policy
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
