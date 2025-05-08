import { Container, Typography, TextField, Button, Box, Link, Card, CardContent } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { UserDTO } from '../../types/auth.types';
import { loginUser } from '../../api/authApi';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    mode: 'onSubmit'
  });


  const onSubmit = async (data: UserDTO) => {
    try {
      const response = await loginUser(data);
      localStorage.setItem('token', response.data.token);
      navigate('/sms');
    } catch (error: any) {
      const message = error?.response?.data?.message || error.message || 'Login failed';
      alert(message);
    }
  };




  return (

    <Container maxWidth="sm">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome Back!
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            Please sign in to your account
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              {...register('email', { required: 'Email is required' })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              {...register('password', { required: 'Contraseña is required' })}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">Log In</Button>
          </Box>
          <Box mt={2}>
            <Link component="button" onClick={() => navigate('/register')}>
              Don't have an account? Sign up
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginPage;