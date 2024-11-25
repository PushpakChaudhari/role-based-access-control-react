import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from '@mui/material';

const AddLoanSchemePage = () => {
  const [loanName, setLoanName] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  const handleAddLoanScheme = (e) => {
    e.preventDefault();

    // Validate empty fields
    if (!loanName || !interestRate || !duration) {
      Swal.fire('Please fill in all the fields!', '', 'warning');
      return;
    }

    // Store the new loan scheme in the local DB (or backend API)
    const loanScheme = { loanName, interestRate, duration };
    const existingLoanSchemes = JSON.parse(localStorage.getItem('loanSchemes')) || [];
    existingLoanSchemes.push(loanScheme);
    localStorage.setItem('loanSchemes', JSON.stringify(existingLoanSchemes));

    Swal.fire('Loan Scheme Added!', '', 'success');
    navigate('/loan-schemes');
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Add New Loan Scheme
        </Typography>
        <Box
          component="form"
          onSubmit={handleAddLoanScheme}
          noValidate
          sx={{ mt: 2 }}
        >
          <TextField
            fullWidth
            label="Loan Name"
            variant="outlined"
            margin="normal"
            value={loanName}
            onChange={(e) => setLoanName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Interest Rate (%)"
            type="number"
            variant="outlined"
            margin="normal"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Duration (years)"
            type="number"
            variant="outlined"
            margin="normal"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Add Loan Scheme
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddLoanSchemePage;
