import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Card, CardContent, Divider } from '@mui/material';

const PayLoanPage = () => {
    const [loanAmount] = useState(10000); // Initial loan amount (for demonstration purposes)
    const [paymentAmount, setPaymentAmount] = useState('');
    const [remainingBalance, setRemainingBalance] = useState(loanAmount);
    const [paymentStatus, setPaymentStatus] = useState(null);

    const handlePayment = (e) => {
        e.preventDefault();

        // Convert the payment amount to a number
        const payment = parseFloat(paymentAmount);

        // Check if the payment is valid
        if (isNaN(payment) || payment <= 0) {
            setPaymentStatus('Invalid payment amount.');
            return;
        }

        // Deduct the payment from the remaining balance
        const newBalance = remainingBalance - payment;

        if (newBalance < 0) {
            setPaymentStatus('Payment exceeds remaining balance.');
        } else {
            setRemainingBalance(newBalance);
            setPaymentStatus(`Payment of ₹${payment} successful!`);
        }

        // Clear payment input field
        setPaymentAmount('');
    };

    return (
        <Box sx={{ padding: 4, backgroundColor: '#f4f6f8' }}>
            <Paper sx={{ padding: 3, marginBottom: 4, textAlign: 'center', backgroundColor: '#1976d2', color: 'white' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    Pay Your Loan
                </Typography>
                <Typography variant="h6" sx={{ marginTop: 1 }}>
                    Enter the amount you'd like to pay.
                </Typography>
            </Paper>

            <form onSubmit={handlePayment}>
                <TextField
                    fullWidth
                    label="Payment Amount"
                    variant="outlined"
                    type="number"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    required
                    sx={{
                        marginBottom: 3,
                        backgroundColor: '#ffffff',
                    }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        sx={{
                            width: 200,
                            backgroundColor: '#28a745',
                            '&:hover': { backgroundColor: '#218838' },
                        }}
                    >
                        Make Payment
                    </Button>
                </Box>
            </form>

            {/* Displaying Payment Status */}
            {paymentStatus && (
                <Typography variant="h6" sx={{ marginTop: 2, textAlign: 'center', color: paymentStatus.includes('successful') ? 'green' : 'red' }}>
                    {paymentStatus}
                </Typography>
            )}

            {/* Display Remaining Loan Balance */}
            <Box sx={{ marginTop: 4 }}>
                <Card sx={{ backgroundColor: '#ffffff', padding: 3 }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                            Remaining Loan Balance
                        </Typography>
                        <Divider sx={{ marginY: 2 }} />
                        <Typography variant="body1" sx={{ fontSize: 20, color: '#444' }}>
                            <strong>Remaining Balance:</strong> ₹{remainingBalance.toFixed(2)}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default PayLoanPage;
