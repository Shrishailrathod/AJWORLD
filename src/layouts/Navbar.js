import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#000" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          AJ WORLD
        </Typography>

       
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton edge="end" color="inherit" onClick={handleMenuToggle}>
            <MenuIcon />
          </IconButton>
        </Box>

       
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Button component={Link} to="/" color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
            Home
          </Button>
          <Button component={Link} to="/Resources" color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
            Resources
          </Button>
          <Button component={Link} to="/Classes" color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
            Classes
          </Button>
          <Button component={Link} to="/aboutus" color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
            About Us
          </Button>
          <Button component={Link} to="/contactus" color="inherit" sx={{ textTransform: "none", fontSize: "16px" }}>
            Contact Us
          </Button>
        </Box>
      </Toolbar>

      
      <Drawer anchor="right" open={open} onClose={handleMenuToggle}>
        <Box sx={{ width: 250 }} role="presentation" onClick={handleMenuToggle} onKeyDown={handleMenuToggle}>
          <List>
            <ListItem button component={Link} to="/" color="inherit">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/Resources" color="inherit">
              <ListItemText primary="Resources" />
            </ListItem>
            <ListItem button component={Link} to="/Classes" color="inherit">
              <ListItemText primary="Classes" />
            </ListItem>
            <ListItem button component={Link} to="/aboutus" color="inherit">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={Link} to="/contactus" color="inherit">
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
