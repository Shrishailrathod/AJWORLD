import React from "react";
import Navbar from '../layouts/Navbar'
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
} from "@mui/material";

const ContactUs = () => {
  return (
    <>
    <Navbar />
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", p: 4}}>
      <Grid container spacing={4} alignItems="center" sx={{mt:20}}>
     
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Email, call, or complete the form to learn how we can solve your
            problem.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Email:</strong> rshrishail51@gmail.com
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Phone:</strong> +91 9353815319
          </Typography>
          <Link href="#" underline="hover" sx={{ fontWeight: "bold", mt: 2 }}>
            Customer Support
          </Link>
        </Grid>

      
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              p: 4,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="h6"
              color="text.secondary"
              textAlign="center"
              gutterBottom
            >
              You can reach us anytime
            </Typography>
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              gap={3}
              mt={2}
            >
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ textTransform: "none" }}
              >
                Sign in
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default ContactUs;
