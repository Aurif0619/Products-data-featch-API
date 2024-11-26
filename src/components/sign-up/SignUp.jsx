import React, { useState } from 'react';
import { Typography, Box, Button, TextField, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { Password } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const signupSchema = yup.object({
    firstName: yup.string().required("Enter Your First Name"),
    secondName: yup.string().required("Enter Your Second Name"),
    email: yup.string().required("Enter Your Valid Email"),
    password: yup.string().min(5).max(8).required("Enter Your Password"),
})
const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            firstName: "",
            secondName: "",
            email: "",
            Password: ""
        },
        resolver: yupResolver(signupSchema),
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
            <form onSubmit={handleSubmit((data) => {
                console.log(data);

            })}>
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
                    <Controller
                        control={control}
                        name="firstName"
                        render={({ field }) => (
                            <TextField error ={errors?.firstName? true : false }
                                placeholder="First Name"
                                fullWidth
                                size="small"
                                {...field}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}

                            />
                        )}
                    />
                    <Typography className='text-danger mt-0'>{errors?.firstName?.message}</Typography>
                    <Controller
                        control={control}
                        name="secondName"
                        render={({ field }) => (
                            <TextField error ={errors?.secondName? true : false }
                                placeholder="Second Name"
                                fullWidth
                                size="small"
                                {...field}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}

                            />
                        )}
                    />
                    <Typography className='text-danger mt-0'>{errors?.secondName?.message}</Typography>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <TextField error ={errors?.email? true : false }
                                fullWidth
                                size="small"
                                type='email'
                                placeholder='Enter your Email'
                                {...field}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                }}

                            />
                        )}
                    />
                    <Typography className='text-danger mt-0'>{errors?.email?.message}</Typography>
                    <Controller
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <TextField error ={errors?.password? true : false }
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
                                {...field}
                                type={showPassword ? 'text' : 'password'}
                                fullWidth
                                size="small"
                            />
                        )}
                    />
                    <Typography className='text-danger mt-0'>{errors?.password?.message}</Typography>
                    <Button type='submit' variant="contained" fullWidth>
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
            </form>
        </div>

    );
};

export default SignUp;
