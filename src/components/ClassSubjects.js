import React from "react";
import {  Container, Typography, Grid, Card, CardContent } from "@mui/material";

const Subjects = () => {
  const subjects = [
    { title: "BOOK KEEPING", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", resources: "20+ Resources" },
    { title: "BOOK KEEPING", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", resources: "20+ Resources" },
    { title: "BOOK KEEPING", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", resources: "20+ Resources" },
    { title: "BOOK KEEPING", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", resources: "20+ Resources" },
    { title: "BOOK KEEPING", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", resources: "20+ Resources" },
    { title: "BOOK KEEPING", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", resources: "20+ Resources" },
    { title: "BOOK KEEPING", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", resources: "20+ Resources" },
    { title: "BOOK KEEPING", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", resources: "20+ Resources" },
  ];

  return (
    <Container sx={{ paddingY: 4 }}>
    
      <Typography variant="h6" color="blac" mb={2}>
        Classes / 12th
      </Typography>

    
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Subjects in 12th
      </Typography>

     
      <Grid container spacing={3}>
        {subjects.map((subject, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ borderRadius: 2, boxShadow: "0 4px 6px rgba(156, 148, 152, 0.8)" }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {subject.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" mb={2}>
                  {subject.description}
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {subject.resources}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Subjects;
