import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Grid, Card, CardContent, Divider } from '@mui/material';

const ApplyLoanPage = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [appliedLoan, setAppliedLoan] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert input values to numbers
        const principal = parseFloat(loanAmount);
        const years = parseFloat(loanTerm);
        const rate = parseFloat(interestRate);

        // Calculate total amount after applying compound interest
        const amount = principal * Math.pow(1 + (rate / 100), years);
        const roundedAmount = amount.toFixed(2);

        // Create a new loan object
        const newLoan = {
            loanAmount,
            loanTerm,
            interestRate,
        };

        // Set the applied loan details and total amount in the state
        setAppliedLoan(newLoan);
        setTotalAmount(roundedAmount);

        // Optionally, you can clear the form fields after submission
        setLoanAmount('');
        setLoanTerm('');
        setInterestRate('');
    };

    return (
        <Box sx={{ padding: 4, backgroundColor: '#f4f6f8' }}>
            <Paper sx={{ padding: 3, marginBottom: 4, textAlign: 'center', backgroundColor: '#1976d2', color: 'white' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    Apply for a Loan
                </Typography>
                <Typography variant="h6" sx={{ marginTop: 1 }}>
                    Fill in the details below to apply for your loan.
                </Typography>
            </Paper>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={3} sx={{ marginBottom: 3 }}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Loan Amount"
                            variant="outlined"
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                            required
                            sx={{ backgroundColor: '#ffffff' }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Loan Term (Years)"
                            variant="outlined"
                            type="number"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(e.target.value)}
                            required
                            sx={{ backgroundColor: '#ffffff' }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Interest Rate (%)"
                            variant="outlined"
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                            required
                            sx={{ backgroundColor: '#ffffff' }}
                        />
                    </Grid>
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{
                            width: 200,
                            backgroundColor: '#28a745',
                            '&:hover': { backgroundColor: '#218838' },
                        }}
                    >
                        Submit Application
                    </Button>
                </Box>
            </form>

            {appliedLoan && (
                <Box sx={{ marginTop: 4 }}>
                    <Paper sx={{ padding: 3, backgroundColor: '#e3f2fd' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                            Applied Loan Details
                        </Typography>
                        <Card sx={{ marginTop: 2, backgroundColor: '#ffffff' }}>
                            <CardContent>
                                <Typography variant="body1" sx={{ marginBottom: 1, color: '#444' }}>
                                    <strong>Loan Amount:</strong> ₹{appliedLoan.loanAmount}
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 1, color: '#444' }}>
                                    <strong>Loan Term:</strong> {appliedLoan.loanTerm} years
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 1, color: '#444' }}>
                                    <strong>Interest Rate:</strong> {appliedLoan.interestRate}%
                                </Typography>
                                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                                    <strong>Total Amount after {appliedLoan.loanTerm} years:</strong> ₹{totalAmount}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Box>
            )}
        </Box>
    );
};

export default ApplyLoanPage;
