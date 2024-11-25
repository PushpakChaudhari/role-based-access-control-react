import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Container, Box } from '@mui/material';

const LoanSchemePage = () => {
  const [loanSchemes, setLoanSchemes] = useState([]);

  useEffect(() => {
    // Retrieve loan schemes from localStorage (or backend API)
    const schemes = JSON.parse(localStorage.getItem('loanSchemes')) || [];
    setLoanSchemes(schemes);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Available Loan Schemes
      </Typography>
      {loanSchemes.length > 0 ? (
        <Grid container spacing={3}>
          {loanSchemes.map((scheme, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: index % 2 === 0 ? '#f3f4f6' : '#e1f5fe', // Alternating background colors
                  '&:hover': {
                    transform: 'scale(1.05)', // Add hover effect for better interaction
                    boxShadow: 4, // Adds a nice shadow on hover
                  },
                  transition: 'all 0.3s ease', // Smooth transition for hover effect
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="h5" sx={{ mb: 2, color: '#1976d2' }}>
                    {scheme.loanName}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }}>
                    <span style={{ color: '#d32f2f' }}>Interest Rate:</span> {scheme.interestRate}%
                  </Typography>
                  <Typography variant="body1">
                    <span style={{ color: '#388e3c' }}>Duration:</span> {scheme.duration} years
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="h6" color="textSecondary">
            No loan schemes available
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default LoanSchemePage;
