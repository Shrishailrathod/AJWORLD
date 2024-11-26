import React from "react";
import Computers from '../assets/Computer.jpg'
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import Navbar from "../layouts/Navbar";

const App = () => {
  return (
    <>
    <Navbar />
    <Container
      sx={{
        padding: { xs: 2, md: 4 },
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Box>
     
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: 1 }}
        >
          Resources / Science / Computer Applications
        </Typography>

      
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 3,
          }}
        >
          Computer Applications
        </Typography>

        <Grid container spacing={4} alignItems="center">
         
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              This course is aimed at people interested in UI/UX Design. We’ll
              start from the very beginning and work all the way through, step
              by step. If you already have some UI/UX Design experience but
              want to get up to speed using Adobe XD then this course is perfect
              for you too!
            </Typography>
            <Typography variant="body1" paragraph>
              First, we will go over the differences between UX and UI Design.
              We will look at what our brief for this real-world project is,
              then we will learn about low-fidelity wireframes and how to make
              use of existing UI design kits.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: 2,
                fontWeight: "bold",
              }}
            >
              Enroll Now
            </Button>
          </Grid>

         
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardMedia
                component="img"
                image={Computers}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );
};

export default App;
