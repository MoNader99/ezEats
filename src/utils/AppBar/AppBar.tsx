import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex !important",
    justifyContent: "space-between !important",
    minHeight: "100px !important",
  },
  logo: {
    maxWidth: "10% !important",
  },
  appBarTransparent: {
    backgroundColor: "rgba(255, 255, 255, 0) !important",
    transition: "background-color 0.3s ease-in-out !important",
  },
  appBarSolid: {
    backgroundColor: "rgba(255, 255, 255) !important",
    color: "black !important",
    transition: "background-color 0.3s ease-in-out !important",
  },
  barLink: {
    fontFamily: "Montserrat, sans-serif !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
  },
  solidColor: {
    color: "#5a5a5a !important",
  },
}));

export default function MyAppBar() {
  const classes = useStyles();
  const [isSolid, setIsSolid] = useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);

  const handleLanguageClick = (event: any) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const isScreenSizeSmall = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position="fixed"
        className={isSolid ? classes.appBarSolid : classes.appBarTransparent}
      >
        <Container sx={{ maxWidth: "1300px !important" }}>
          <Toolbar className={classes.toolbar}>
            <img
              src={process.env.PUBLIC_URL + "/Images/Ez-Eats.png"}
              alt="Logo"
              className={classes.logo}
            />
            {isScreenSizeSmall ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={handleLanguageClick}
                  edge="end"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={languageAnchorEl}
                  keepMounted
                  open={Boolean(languageAnchorEl)}
                  onClose={handleLanguageClose}
                >
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Features</MenuItem>
                  <MenuItem>Careers</MenuItem>
                  <MenuItem>FAQs</MenuItem>
                  <MenuItem>Contact</MenuItem>
                  <MenuItem>English 🇺🇸</MenuItem>
                  <MenuItem>Arabic 🇦🇪</MenuItem>
                  <MenuItem>Français 🇫🇷</MenuItem>
                </Menu>
              </>
            ) : (
              <div>
                <Button
                  color="inherit"
                  className={`${classes.barLink} ${
                    isSolid ? classes.solidColor : ""
                  }`}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  className={`${classes.barLink} ${
                    isSolid ? classes.solidColor : ""
                  }`}
                >
                  Features
                </Button>
                <Button
                  color="inherit"
                  className={`${classes.barLink} ${
                    isSolid ? classes.solidColor : ""
                  }`}
                >
                  Careers
                </Button>
                <Button
                  color="inherit"
                  className={`${classes.barLink} ${
                    isSolid ? classes.solidColor : ""
                  }`}
                >
                  FAQs
                </Button>
                <Button
                  color="inherit"
                  className={`${classes.barLink} ${
                    isSolid ? classes.solidColor : ""
                  }`}
                >
                  Contact
                </Button>
                <Button color="inherit" onClick={handleLanguageClick}>
                  Language
                </Button>
                <Menu
                  anchorEl={languageAnchorEl}
                  keepMounted
                  open={Boolean(languageAnchorEl)}
                  onClose={handleLanguageClose}
                >
                  <MenuItem>English 🇺🇸</MenuItem>
                  <MenuItem>Arabic 🇦🇪</MenuItem>
                  <MenuItem>Français 🇫🇷</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
