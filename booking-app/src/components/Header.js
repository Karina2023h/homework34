// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import {
  appBarStyles,
  toolbarStyles,
  buttonStyles,
  boxStyles,
} from "./HeaderStyles";

const Header = () => {
  return (
    <AppBar position="static" sx={appBarStyles}>
      <Toolbar>
        <Typography variant="h6" sx={toolbarStyles}>
          Booking App
        </Typography>
        <Box sx={boxStyles}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            startIcon={<span>🏠</span>}
            sx={buttonStyles}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            startIcon={<span>ℹ️</span>}
            sx={buttonStyles}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/hotels"
            startIcon={<span>🏨</span>}
          >
            Hotels
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
