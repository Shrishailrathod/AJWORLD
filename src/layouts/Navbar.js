import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#000" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          AJ WORLD
        </Typography>
        <Box>
          <Button  component={Link} to="/" color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
            Home
          </Button>
          <Button component={Link}  to="/Resources"  color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
            Resources
          </Button>
          <Button component={Link}  to="/Classes"   color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
            Classes
          </Button>
          <Button  component={Link}  to="/aboutus"    color="inherit"   sx={{ textTransform: "none", fontSize: "16px" }}>
            About Us
          </Button>
          <Button component={Link} to="/contactus"   color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
