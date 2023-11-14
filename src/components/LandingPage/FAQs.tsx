import React from "react";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MyAccordion from "./Accordion";
import MyForm from "./FAQsForm";

const accordionData = [
  {
    title: "What is Ez Eats?",
    content:
      "EzEats is the future of dinning out. Customers scan our QR codes with their phone so they can view the menu, order, pay, and review all in one seamless, connected experience. No app download, no account sign-up and no additional labor is required. We’re laser focused on providing the best in class tech to help restaurants remove all the friction that gets in the way of great hospitality.",
  },
  {
    title: "What is a digital menu?",
    content:
      "It’s just like a traditional paper menu but on a guest’s phone. It saves restaurant operators cleaning physical menus after each use or helps them avoid single-use menus which can be costly and wasteful. Upon viewing the restaurant’s digital menu, guests have the option to order through the digital menu and pay with either Apple Pay, credit card or cash.",
  },
  {
    title: "What is the Impact of EzEats on Your profit?",
    content: `Our technology reduces your waiters’ tasks by 70%, this will let you lower considerably your staffing cost while having you waiters focus on what really matters, your customers satisfaction.
      Furthermore, our digital menu will help you upsell by offering a dynamic interface, pictures of your plates, smart propositions and much more. Many studies show that mobile ordering increases sales by at least 20%.`,
  },
];
const SeventhSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const h1FontSize = isSmallScreen ? "1.5rem" : "1.7rem";

  return (
    <Grid
      container
      spacing={15}
      sx={{ justifyContent: "center", alignItems: "center", mt: 5, mb: 15 }}
    >
      <Grid item md={6}>
        <Typography
          variant="h1"
          style={{
            minWidth: "101%",
            fontSize: h1FontSize,
            fontWeight: 800,
            lineHeight: "1.1",
            textTransform: "uppercase",
            margin: "15px 0",
            textAlign: "start",
            paddingLeft: "24px",
          }}
        >
          GET IN <span style={{ color: "#f13c4f" }}>TOUCH!</span>
        </Typography>

        <MyForm />
      </Grid>
      <Grid item md={6}>
        <Typography
          variant="h1"
          style={{
            minWidth: "101%",
            fontSize: h1FontSize,
            fontWeight: 800,
            lineHeight: "1.1",
            textTransform: "uppercase",
            margin: "15px 0",
            textAlign: "center",
          }}
        >
          FREQUENTLY ASKED <span style={{ color: "#f13c4f" }}>QUESTIONS</span>
        </Typography>
        <MyAccordion data={accordionData} />
      </Grid>
    </Grid>
  );
};

export default SeventhSection;
