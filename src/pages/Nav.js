import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Alert } from '@mui/material';

const Nav = () => {
    const navigate = useNavigate();

    // Function to handle logout
    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
    };

    let currentUserRole;
    if (localStorage.getItem("user")) {
        currentUserRole = JSON.parse(localStorage.getItem("user"));
    }

    return (
        <Box sx={{ padding: 3 }}>
            {currentUserRole && (
                <Box sx={{ marginBottom: 3 }}>
                    {/* Alert for displaying current user role */}
                    <Alert severity="info" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                        Logged in as {currentUserRole}
                    </Alert>

                    {/* Navigation buttons */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
                                Home
                            </Button>
                        </Link>
                        <Button variant="outlined" color="secondary" onClick={logout}>
                            Logout
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Nav;
