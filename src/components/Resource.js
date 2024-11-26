import React from "react";
import BookKeeping from '../assets/BookKeeping.jpeg';
import Computers from '../assets/Computer.jpg';
import maths from '../assets/maths.jpeg';

import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";
import Navbar from "../layouts/Navbar";

const resources = [
  {
    id: 1,
    class: "10th",
    subject: "Science",
    title: "Computer Applications",
    professor: "Prof. Akbar Zaidi",
    image: Computers,
  },
  {
    id: 2,
    class: "11th",
    subject: "Commerce",
    title: "Book Keeping",
    professor: "Prof. Akbar Zaidi",
    image: BookKeeping,
  },
  {
    id: 3,
    class: "12th",
    subject: "Mathematics",
    title: "Discrete Mathematics",
    professor: "Prof. Akbar Zaidi",
    image: maths,
  },
  {
    id: 4,
    class: "10th",
    subject: "Science",
    title: "Computer Applications",
    professor: "Prof. Akbar Zaidi",
    image: Computers,
  },
  {
    id: 5,
    class: "11th",
    subject: "Commerce",
    title: "Book Keeping",
    professor: "Prof. Akbar Zaidi",
    image: BookKeeping,
  },
  {
    id: 6,
    class: "12th",
    subject: "Mathematics",
    title: "Discrete Mathematics",
    professor: "Prof. Akbar Zaidi",
    image: maths,
  },
];

const Resource = () => {
  return (
    <>
    <Navbar />
    <Box p={4} bgcolor="#f5f5f5" minHeight="100vh">
      
      <Box
        display="flex"
        alignItems="center"
        gap="10px"
        mb={3}
      >
        <Typography variant="h6" fontWeight="bold">
          Filter By Classes:
        </Typography>
        <Box display="flex" gap="5px">
          <Button variant="contained" color="primary">
            9th
          </Button>
          <Button variant="outlined" color="primary">
            10th
          </Button>
          <Button variant="contained" color="secondary">
            11th
          </Button>
          <Button variant="outlined" color="secondary">
            12th
          </Button>
        </Box>
      </Box>

      
      <Box
        display="flex"
        alignItems="center"
        gap="10px"
        mb={4} 
      >
        <Typography variant="h6" fontWeight="bold">
          Filter By Subjects:
        </Typography>
        <Box display="flex" gap="5px">
          <Button variant="contained" color="success">
            Science
          </Button>
          <Button variant="outlined" color="success">
            Commerce
          </Button>
          <Button variant="contained" color="error">
            Mathematics
          </Button>
          <Button variant="outlined" color="error">
            Demo Subject
          </Button>
        </Box>
      </Box>

  
      <Grid container spacing={3}>
        {resources.map((resource) => (
          <Grid item xs={12} sm={6} md={4} key={resource.id}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                height="200"
                image={resource.image}
                alt={resource.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  {resource.professor}
                </Typography>
                <Chip label={resource.subject} variant="outlined" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default Resource;
