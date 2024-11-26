import React from "react";
import Navbar from '../layouts/Navbar'
import Computers from '../assets/Computer.jpg'
import Bookkeepings from '../assets/BookKeeping.jpeg'
import maths from '../assets/maths.jpeg'
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  return (
    <>
    <Navbar />
    <Container maxWidth="lg" sx={{ py: 4 }}>
     
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Accelerate your learning with AJWorld
        </Typography>
        <Typography variant="body1" sx={{ color: "#6c757d", mb: 3 }}>
          Take your career further. Discover 10,000+ courses from top universities and master in-demand skills across marketing, tech, business, cybersecurity, and more.
        </Typography>
      

        <Box
          display="flex"
          justifyContent="center"
          sx={{ mt: 2, mb: 4, maxWidth: "600px", mx: "auto" }}
        >
          <TextField
            fullWidth
            placeholder="Search Courses"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
              },
            }}
          />
        </Box>
      </Box>

      <Typography variant="h5" textAlign="center" sx={{ mb: 2, fontWeight: "bold" }}>
        Choose Your Class
      </Typography>
      <Box display="flex" justifyContent="center" sx={{ mb: 4 }}>
        {["8TH", "9TH", "10TH", "11TH", "12TH"].map((className, index) => (
          <Button
            key={index}
            variant="outlined"
            sx={{
              mx: 1,
              fontSize: "16px",
              fontWeight: "bold",
              borderColor: "#000",
              color: "#000",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            {className}
          </Button>
        ))}
      </Box>

      {/* Recommended Resources Section */}
      <Typography variant="h5" textAlign="center" sx={{ mb: 2, fontWeight: "bold" }}>
        Recommended Resources
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          {
            title: "Computer Applications",
            grade: "10TH",
            teacher: "Prof. Akbar Zaidi",
            image: Computers,
          },
          {
            title: "Book Keeping",
            grade: "11TH",
            teacher: "Prof. Akbar Zaidi",
            image: Bookkeepings,
          },
          {
            title: "Discrete Mathematics",
            grade: "12TH",
            teacher: "Prof. Akbar Zaidi",
            image: maths,
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ boxShadow: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {item.grade}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.teacher}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      
      <Typography variant="h5" textAlign="center" sx={{ mb: 2, fontWeight: "bold" }}>
        What learners are saying
      </Typography>
      <Grid container spacing={3}>
        {new Array(3).fill("").map((_, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  "This course helped me think about the person I want to be. The mental space that
                  it created allowed me to think about my motivations and the opportunities I
                  hadn't considered before."
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ mt: 2, fontWeight: "bold" }}
                >
                  - Maggie B., Parent (10th Class)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
};

export default Home;
