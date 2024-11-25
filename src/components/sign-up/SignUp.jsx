import React, { useState } from 'react';
import { Typography, Box, Button, TextField, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
                <Typography variant="h5" gutterBottom>
                    Sign Up
                </Typography>

                <TextField
                    placeholder="First Name"
                    fullWidth
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                />


                <TextField
                    placeholder="Last Name"
                    fullWidth
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                />

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
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    size="small"
                />

                <Button variant="contained" fullWidth>
                    Sign Up
                </Button>

                <Typography>
                    Already have an account{' '}
                    <Link
                        to="/sign-in"
                        style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}
                    >
                        Sign In
                    </Link>
                </Typography>
            </Box>
        </div>
    );
};

export default SignUp;
