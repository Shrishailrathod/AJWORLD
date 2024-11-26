import React from "react";
import Linear from '../assets/Linear.jpg'
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";
import Navbar from "../layouts/Navbar";

const Profile = () => {
  return (
    <>
    <Navbar />
    <Container sx={{ paddingY: 4 }}>
      
      <Box mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Sheezan's Profile
        </Typography>
        <Typography variant="body1" color="textSecondary">
          You're currently on the Bronze plan. Your next payment is due in 7
          days.
        </Typography>
      </Box>

    
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Subscription
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="body1" fontWeight="bold">
              Bronze Plan
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              The Bronze plan includes blah, blah, blah, blah, blah, blah, blah,
              blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah,
              blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah,
              blah, blah, blah, blah.
            </Typography>
            <Button variant="outlined" size="small" sx={{borderRadius:10}}>
              Manage Plan
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="100"
                image={Linear} 
                alt="Bronze Plan"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

    
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Payment History
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Receipt</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { date: "July 19, 2023", description: "Payment For Bronze Plan", amount: "$10" },
                { date: "June 19, 2023", description: "Payment For Bronze Plan", amount: "$10" },
                { date: "May 19, 2023", description: "Payment For Bronze Plan", amount: "$10" },
              ].map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    <Button variant="text" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

     
      <Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Notifications & Announcements
        </Typography>
        <Stack spacing={2} sx={{borderRadius:10}}>
          {[
            {
              title: "Linear Algebra",
              description: "Added two resources for Mathematics",
              image: Linear, 
            },
            {
              title: "Partnership Firm",
              description: "Added a resource for Book Keeping",
              image: Linear, 
            },
            {
              title: "Grammar",
              description: "Added three resources for English",
              image: Linear, 
            },
          ].map((notification, index) => (
            <Card key={index} variant="outlined" sx={{ display: "flex" }}>
              <CardMedia
                //  component="img"
                sx={{ width: 80 , borderRadius:2}}
                image={notification.image}
                alt={notification.title}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {notification.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {notification.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
    </>
  );
};

export default Profile;
