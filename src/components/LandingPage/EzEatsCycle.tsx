import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: "350px",
    maxHeight: "350px",
  },
}));

const FifthSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const h1FontSize = isSmallScreen ? "1.8rem" : "2.2rem";
  const pFontSize = isSmallScreen ? "16px" : "16px";
  return (
    <Grid container sx={{ mt: 15 }}>
      <Grid item sm={12} sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h1"
          style={{
            minWidth: "101%",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "1.1",
            textTransform: "uppercase",
            margin: "10px 0",
          }}
        >
          THE EZ EATS CYCLE
        </Typography>
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
          A NEW WAY <span style={{ color: "#f13c4f" }}>TO OPERATE</span>
        </Typography>
      </Grid>

      <Grid container spacing={5} sx={{ justifyContent: "center" }}>
        <Grid item md={4}>
          <div style={{ display: "felx", justifyContent: "center" }}>
            <img
              className={classes.image}
              style={{ maxHeight: "250px", justifyContent: "center" }}
              src={process.env.PUBLIC_URL + "/svgs/svg1.svg"}
              alt="mySvgImage"
            />
          </div>
          <Typography
            variant="h1"
            style={{
              textAlign: "center",
              minWidth: "101%",
              fontSize: "19px",
              fontWeight: 700,
              lineHeight: "1.1",
              textTransform: "uppercase",
              margin: "10px 0",
            }}
          >
            Increase Average Spend
          </Typography>
        </Grid>
        <Grid item md={4}>
          <img
            className={classes.image}
            src={process.env.PUBLIC_URL + "/svgs/svg2.svg"}
            alt="mySvgImage"
          />
          <Typography
            variant="h1"
            style={{
              textAlign: "center",
              minWidth: "101%",
              fontSize: "19px",
              fontWeight: 700,
              lineHeight: "1.1",
              textTransform: "uppercase",
              margin: "10px 0",
            }}
          >
            Turn Tables Quicker
          </Typography>
        </Grid>
        <Grid item md={4}>
          <img
            className={classes.image}
            src={process.env.PUBLIC_URL + "/svgs/svg3.svg"}
            alt="mySvgImage"
          />
          <Typography
            variant="h1"
            style={{
              textAlign: "center",
              minWidth: "101%",
              fontSize: "19px",
              fontWeight: 700,
              lineHeight: "1.1",
              textTransform: "uppercase",
              margin: "10px 0",
            }}
          >
            Save Time, Save Money
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FifthSection;
