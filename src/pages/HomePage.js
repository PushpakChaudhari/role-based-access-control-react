import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Paper, Grid } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f4f6f8' }}>
      {/* Header Section */}
      <Paper sx={{ padding: 3, marginBottom: 4, textAlign: 'center', backgroundColor: '#1976d2', color: 'white', borderRadius: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'inherit' }}>
          Welcome to Loan Management System
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 1 }}>
          Select an action below based on your role.
        </Typography>
      </Paper>

      {/* Customer Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" sx={{ color: 'primary.main', marginBottom: 2, textAlign: 'center', fontWeight: 'bold' }}>
          For Customers
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/pay-loan" style={{ textDecoration: 'none' }}>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ width: '100%', padding: '20px', borderRadius: 2, '&:hover': { backgroundColor: '#1565c0' } }}
              >
                Pay Loan
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/apply-loan" style={{ textDecoration: 'none' }}>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ width: '100%', padding: '20px', borderRadius: 2, '&:hover': { backgroundColor: '#1565c0' } }}
              >
                Apply Loan
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>

      {/* Admin Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" sx={{ color: 'secondary.main', marginBottom: 2, textAlign: 'center', fontWeight: 'bold' }}>
          For Admin
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/staff-details" style={{ textDecoration: 'none' }}>
              <Button 
                variant="contained" 
                color="secondary" 
                sx={{ width: '100%', padding: '20px', borderRadius: 2, '&:hover': { backgroundColor: '#0288d1' } }}
              >
                Staff Details
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/add-loan-scheme" style={{ textDecoration: 'none' }}>
              <Button 
                variant="contained" 
                color="secondary" 
                sx={{ width: '100%', padding: '20px', borderRadius: 2, '&:hover': { backgroundColor: '#0288d1' } }}
              >
                Add Loan Scheme
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>

      {/* Shared Features Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" sx={{ color: 'success.main', marginBottom: 2, textAlign: 'center', fontWeight: 'bold' }}>
          Shared Features
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/loan-schemes" style={{ textDecoration: 'none' }}>
              <Button 
                variant="contained" 
                color="success" 
                sx={{ width: '100%', padding: '20px', borderRadius: 2, '&:hover': { backgroundColor: '#388e3c' } }}
              >
                Loan Schemes
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
