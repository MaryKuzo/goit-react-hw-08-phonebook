import loginBG from '../../../images/Login.jpg';
import * as React from 'react';
import { StyledButton } from 'GlobalStyles.styled';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../../redux/auth/auth-operations';
import { useState } from 'react';
import { toast } from 'react-toastify';


function Copyright(props) {
  return (
    <Typography
      align="center"
       style={{
        position: 'fixed',
        bottom: '0',
         width: '100%',
        right: '50px',
      }}
      {...props}
    >
        {'Copyright © '}
        <Link color="inherit" href="https://" fontFamily={'Ephesis'}>
          PhoneBook📱
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}

    </Typography>
  );
}

const theme = createTheme();

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default: return;
    }
  };

const handleSubmit = e => {
  e.preventDefault();

  if (!email.trim() || !password.trim()) {
    toast.error("Please enter both email and password.");
    return;
  }

  dispatch(authOperations.logIn({ email, password }));
  setEmail('');
  setPassword('');
};

  return (
    <ThemeProvider theme={theme} >
      <div
        style={{
          backgroundImage: `url(${loginBG})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'revert',
          backgroundPosition: 'bottom right',
          minHeight: '100vh',
          backgroundColor: '#e7cb09',
        }}

      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              paddingTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              fontFamily={'Ephesis'}
              style={{ fontSize: '36px' }}>
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate

            >
              <TextField

            
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                value={email}
                InputLabelProps={{
                  style: {
                    fontFamily: 'Ephesis',
                    color: 'rgb(131, 109, 10)',
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={password}
                InputLabelProps={{
                  style: {
                    fontFamily: 'Ephesis',
                    color: 'rgb(131, 109, 10)',
                  },
                }}
              />

              <StyledButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </StyledButton>
              <Grid container>
                <Grid item>
                  <Link
                    href="/goit-react-hw-08-phonebook/register"
                    color="#000000"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default LoginView;
