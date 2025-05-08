import { Container, Typography, TextField, Button, Box, Link, Card, CardContent } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/authApi';
import type { UserDTO } from '../../types/auth.types';

interface RegisterFormInputs {
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();


  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({
    mode: 'onSubmit'
  });


  const onSubmit = async (data: UserDTO) => {
    try {
      const response = await registerUser(data);
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
            Welcome!
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            Create your account
          </Typography>
          <Typography variant="h5" gutterBottom>Sign up</Typography>
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
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">Registrarse</Button>
          </Box>

          <Box mt={2}>
            <Link component="button" onClick={() => navigate('/login')}>
              Already have an account? Sign in
            </Link>
          </Box>
        </CardContent>
      </Card>


    </Container>
  );
};

export default RegisterPage;
