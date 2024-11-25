import React, { useState } from 'react';
import { Typography, Box, Button, TextField, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    width: '300px',
                }}
            >
                <Typography variant="h5">
                    Sign In
                </Typography>

                <TextField
                    placeholder="Email"
                    fullWidth
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }}
                    type="email"
                />

                <TextField
                    placeholder="Password"
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="start" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </InputAdornment>
                            ),
                        },
                    }}
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    size="small"
                />

                <Button variant="contained" fullWidth>
                    Sign In
                </Button>

                <Typography>
                    Create an account
                    <Link
                        to="/sign-up"
                        style={{ textDecoration: 'none', color: '#1976d2', marginLeft: '4px', fontWeight: 'bold' }}
                    >
                        Sign Up
                    </Link>
                </Typography>
            </Box>
        </div>
    );
};

export default SignIn;
