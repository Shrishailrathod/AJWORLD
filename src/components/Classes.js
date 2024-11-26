import React from "react";
import Navbar from '../layouts/Navbar'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const classes = [
  { id: 1, grade: "10TH", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem", subjects: "50+ Subjects" },
  { id: 2, grade: "10TH", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem", subjects: "50+ Subjects" },
  { id: 3, grade: "10TH", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem", subjects: "50+ Subjects" },
  { id: 4, grade: "10TH", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem", subjects: "50+ Subjects" },
  { id: 5, grade: "10TH", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem", subjects: "50+ Subjects" },
  { id: 6, grade: "10TH", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lororem ipsum lorem ipsum lorem ipsum lorem", subjects: "50+ Subjects" },
  { id: 7, grade: "10TH", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem", subjects: "50+ Subjects" },
  { id: 8, grade: "10TH", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem", subjects: "50+ Subjects" },
  { id: 9, grade: "10TH", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem", subjects: "50+ Subjects" },
 
];

const GradesClasses = () => {
  return (
    <>
    <Navbar />
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Grades / Classes
      </Typography>

    
      <Grid container spacing={3}>
        {classes.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <Card
              elevation={2}
              sx={{
                borderRadius: "8px",
                minHeight: "200px", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.grade}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  {item.description}
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {item.subjects}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default GradesClasses;
