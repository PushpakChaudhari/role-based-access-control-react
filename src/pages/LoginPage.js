import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Box, Paper, CircularProgress } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LoginPage = () => {
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    // Simulate login logic
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(userRole));
      navigate("/home");
      setLoading(false); // Stop loading after some time
    }, 1000);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e3f2fd' }}>
      <Paper elevation={6} sx={{ padding: 4, width: '100%', maxWidth: 450, backgroundColor: '#ffffff', borderRadius: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: 2, textAlign: 'center' }}>
          Login to Bank
        </Typography>

        <form onSubmit={submitLogin}>
          <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'center', color: '#4caf50' }}>
            Select your role to proceed with login
          </Typography>

          <TextField
            select
            label="Select User Role"
            required
            fullWidth
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            sx={{ marginBottom: 3 }}
            SelectProps={{
              native: true,
            }}
            InputProps={{
              startAdornment: <AccountCircleIcon sx={{ color: 'primary.main', marginRight: 1 }} />,
            }}
          >
            <option value="" disabled>Select Role</option>
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
          </TextField>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              padding: '12px',
              fontSize: '16px',
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="secondary" /> : 'Login'}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
