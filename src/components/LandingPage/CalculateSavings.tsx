import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SavingCalculatorCard from "./SavingsCard";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
    height: "100%",
  },
}));

const ForthSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const h1FontSize = isSmallScreen ? "1.8rem" : "2.2rem";
  return (
    <Grid container sx={{ mt: 15 }}>
      <Grid item sm={12} sx={{ textAlign: "center", mb: 5 }}>
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
          CALCULATE <span style={{ color: "#f13c4f" }}>YOUR SAVINGS</span>
        </Typography>
      </Grid>
      <Grid
        container
        spacing={10}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item md={7}>
          <img
            className={classes.image}
            decoding="async"
            src="https://ez-eats.com/wp-content/uploads/2023/09/saving-img-e1694510444154.png"
            alt=""
          />
        </Grid>
        <Grid item md={5}>
          <SavingCalculatorCard />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ForthSection;
