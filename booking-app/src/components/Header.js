import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2", boxShadow: 3 }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Booking App
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            startIcon={<span>🏠</span>}
            sx={{ marginRight: 3 }} // Додає відступ справа
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            startIcon={<span>ℹ️</span>}
            sx={{ marginRight: 3 }} // Додає відступ справа
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
