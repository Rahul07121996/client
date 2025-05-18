// pages/LoginPage.js
import { Alert, Avatar, Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from './Login/Login';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
 const redirectPath = location.state?.from?.pathname || '/';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async(e) => {
     e.preventDefault();
      setErrorMsg('');
       if (!username || !password) {
      setErrorMsg('Please enter both username and password.');
      return;
    }
     try {
      await login(username, password);
      toast("loggin succefully");
      navigate(redirectPath, { replace: true });
    } catch (error) {
         toast(" FailedLoggin succefully");
      setErrorMsg('Invalid credentials or server error.');
    }
  };

  return (
        <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
            {errorMsg && (
            <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
              {errorMsg}
            </Alert>
          )}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
