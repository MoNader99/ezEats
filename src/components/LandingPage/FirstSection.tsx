import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
    height: "100%",
  },
}));

const FirstSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const h1FontSize = isSmallScreen ? "2rem" : "3rem";
  const pFontSize = isSmallScreen ? "1.2rem" : "2rem";
  return (
    <Grid
      container
      alignItems="center"
      justifyContent={isSmallScreen ? "center" : "flex-start"}
      sx={{ textAlign: isSmallScreen ? "center" : "start" }}
    >
      <Grid
        item
        sx={{ textAlign: isSmallScreen ? "center" : "start" }}
        sm={12}
        md={6}
      >
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
          Make your Life Easier with{" "}
          <span style={{ color: "#f13c4f" }}>Ez Eats</span>
        </Typography>
        <Typography
          variant="body1"
          style={{
            minWidth: "101%",
            fontSize: pFontSize,
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#f13c4f",
            margin: "0",
          }}
        >
          Introducing the New World of Dining System
        </Typography>

        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent={isSmallScreen ? "center" : "flex-start"}
          sx={{ textAlign: isSmallScreen ? "center" : "start", mt: 2 }}
        >
          <Grid sx={{ maxHeight: "50px" }} item sm={6}>
            <TextField
              sx={{ maxHeight: "50px" }}
              id="Email"
              label="Enter Your Email Here"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item sm={6}>
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
                  backgroundColor: "#ffffff",
                  color: "#f13c4f",
                },
                mt: 2,
              }}
              variant="contained"
              color="primary"
            >
              Request a Demo
            </Button>
          </Grid>
        </Grid>
        <Grid
          justifyContent={isSmallScreen ? "center" : "flex-start"}
          sx={{ textAlign: isSmallScreen ? "center" : "start", mt: 1, mb: 2 }}
          spacing={1}
          container
        >
          <Grid item>
            <SocialIcon
              style={{ height: 40, width: 40 }}
              bgColor="#000000"
              network="facebook"
              url="https://www.facebook.com/ezeats.co"
            />
          </Grid>
          <Grid item>
            <SocialIcon
              style={{ height: 40, width: 40 }}
              bgColor="#000000"
              network="instagram"
              url="https://www.instagram.com/ezeatsofficial"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{ pl: 3 }} item sm={12} md={6}>
        <img
          className={classes.image}
          decoding="async"
          src="https://ez-eats.com/wp-content/uploads/2023/09/header-img-e1694510553695.png"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default FirstSection;
