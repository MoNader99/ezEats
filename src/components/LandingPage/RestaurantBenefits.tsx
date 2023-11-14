import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import BasicCard from "./BasicCard";

const useStyles = makeStyles(() => ({
  image: {},
}));

const SecondSection = () => {
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
            fontSize: h1FontSize,
            fontWeight: 800,
            lineHeight: "1.1",
            textTransform: "uppercase",
            margin: "10px 0",
          }}
        >
          RESTAURANT <span style={{ color: "#f13c4f" }}>BENEFITS</span>
        </Typography>
        <Typography
          variant="body1"
          style={{
            minWidth: "101%",
            fontSize: pFontSize,
            fontWeight: 600,
            color: "#333333",
            margin: "0",
          }}
        >
          Why Contactless Ordering Will Become The Secret Weapon For <br />{" "}
          Successful Restaurants?
        </Typography>
      </Grid>
      <Grid container spacing={4}>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          lg={4}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
            spacing={5}
          >
            <Grid item>
              <BasicCard
                Header="Reduce Waiters Cost"
                Body="Contactless ordering reduces the tasks a waiter has to do, which will lead to a significant decrease in Labor Cost."
              />
            </Grid>
            <Grid item>
              <BasicCard
                Header="Increase Average Bill"
                Body="Your digital menu showcases beautiful imagery, encouraging your customers to order more and make better choices."
              />
            </Grid>
            <Grid item>
              <BasicCard
                Header="Increase Table Turnover"
                Body="Customers can order and pay instantly, you'll see your table turnover increasing during your peak times."
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          lg={4}
        >
          <img
            className={classes.image}
            style={{
              width: useMediaQuery(theme.breakpoints.down("md"))
                ? "50%"
                : "100",
              height: "100%",
            }}
            decoding="async"
            src="https://ez-eats.com/wp-content/uploads/2023/09/features-img-e1694510500983.png"
            alt=""
          />
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          lg={4}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
            spacing={4}
          >
            <Grid item>
              <BasicCard
                Header="Customers Feedback"
                Body="By asking your clients for feedback, you can measure their satisfaction, and improve Customer Retention."
              />
            </Grid>
            <Grid item>
              <BasicCard
                Header="Focus on Upselling & CX"
                Body="By reducing the tasks waiters have to do, they now have more time to focus on upselling and customer experience."
              />
            </Grid>
            <Grid item>
              <BasicCard
                Header="Increase Tips"
                Body="Your clients won't wait to order, call waiters, or pay bills. This enhances their dining experience, which will lead to leave more tips"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sm={12}
        sx={{ justifyContent: "center", alignitems: "center", mt: 5 }}
      >
        <Button
          sx={{
            backgroundColor: "#f13c4f",
            color: "#ffffff",
            borderRadius: "5px",
            minWidth: "150px",
            minHeight: "50px",
            fontWeight: 600,
            letterSpacing: " 0.5px",
            transition:
              "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#f13c4f",
              color: "#FFFFFF",
            },
          }}
          variant="contained"
          color="primary"
        >
          View All Benefits
        </Button>
      </Grid>
    </Grid>
  );
};

export default SecondSection;
