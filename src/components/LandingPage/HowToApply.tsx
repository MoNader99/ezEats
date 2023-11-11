import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MyAccordion from "./Accordion";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
    height: "100%",
  },
}));

const accordionData = [
  {
    title: "Get in touch with our sales department",
    content:
      "An account manager will follow up with your enquiries and set meeting for a demo.",
  },
  {
    title: "Send us your menu and floor plan",
    content:
      "Once received production for QR codes will begin. (Side note, we offer photoshoots in case of any missing items on the menu)",
  },
  {
    title: "Set training period for staff",
    content:
      "Once the QR codes and the menu are ready, we offer a 3 days training to staff.",
  },
  {
    title: "Ready to go",
    content:
      "You can now start the adventure with EzEats – Make your life easier than ever and give your customers a whole new way to Dine Out while increasing your profit!",
  },
];
const SixthSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const h1FontSize = isSmallScreen ? "1.8rem" : "2.2rem";

  return (
    <Grid container sx={{ mt: 15, justifyContent: "center" }}>
      <Grid item sm={12} sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          style={{
            minWidth: "101%",
            fontSize: h1FontSize,
            fontWeight: 800,
            lineHeight: "1.1",
            textTransform: "uppercase",
            margin: "10px 0",
          }}
        >
          HOW TO <span style={{ color: "#f13c4f" }}>APPLY?</span>
        </Typography>
      </Grid>

      <Grid
        container
        spacing={15}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item md={6}>
          <MyAccordion data={accordionData} />
        </Grid>
        <Grid item md={6}>
          <img
            className={classes.image}
            decoding="async"
            src="https://ez-eats.com/wp-content/uploads/2023/09/how-to-img-e1694510235608.png"
            alt=""
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SixthSection;
