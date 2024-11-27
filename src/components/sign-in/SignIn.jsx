import React, { useState } from 'react';
import { Typography, Box, Button, TextField, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';

const signinSchema = yup.object({
    email: yup.string().email('Enter a valid email address').required('Email is required'),
    password: yup.string().required('Password is required')
});

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(signinSchema),
    });

    console.log(errors, 'errors');

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
                <Typography variant="h5">Sign In</Typography>
                <form onSubmit={handleSubmit((data) => {
                    console.log(data);
                })}>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <TextField
                                error={!!errors?.email}
                                fullWidth
                                size="small"
                                type="email"
                                placeholder="Enter your Email"
                                {...field}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                helperText={errors?.email?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <TextField
                                className='my-4'
                                error={!!errors?.password}
                                fullWidth
                                size="small"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                {...field}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </InputAdornment>
                                    ),
                                }}
                                helperText={errors?.password?.message}
                            />
                        )}
                    />
                    <Button type="submit" variant="contained" fullWidth>
                        Sign In
                    </Button>
                </form>
                <Typography>
                    Create an account
                    <Link
                        to="/sign-up"
                        style={{
                            textDecoration: 'none',
                            color: '#1976d2',
                            marginLeft: '4px',
                            fontWeight: 'bold',
                        }}
                    >
                        Sign Up
                    </Link>
                </Typography>
            </Box>
        </div>
    );
};

export default SignIn;
