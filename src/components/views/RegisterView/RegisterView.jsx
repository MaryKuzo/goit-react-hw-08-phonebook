import { useState } from "react";
import { useDispatch } from "react-redux";
import * as authOperations from '../../../redux/auth/auth-operations';
import {
  Typography,
  Link,
  CssBaseline,
  Grid,
  TextField,

} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import registrationBG from '../../../images/registr.jpg'
import { Box, Container } from "@mui/system";
import { StyledButton } from "GlobalStyles.styled";


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


export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default: return;
    }
  };

  const handleSubmit = e => {
  e.preventDefault();
  dispatch(authOperations.register({ name, email, password }));
  setName('');
  setEmail('');
  setPassword('');
  };

  return (
    <ThemeProvider theme={theme}>

      <div
        style={{
          backgroundImage: `url(${registrationBG})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right',
          minHeight: '100vh',

        }}>
        <Container>
          <CssBaseline />
            <Box
          sx={{
            paddingTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',

          }}
          >
            <Typography
            fontFamily={'Ephesis'}
            style={{ fontSize: '36px' }}>
            Registration page
            </Typography>
              <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField

                  autoComplete="given-name"
                  name="name"
                  type="text"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                    onChange={handleChange}
                    InputLabelProps={{
                  style: {
                    fontFamily: 'Ephesis',
                    color: '#000',
                  },
                }}

                />
              </Grid>

              <Grid item xs={12}>
                <TextField


                  required
                  fullWidth
                  label="Email Address"
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                    value={email}
                    InputLabelProps={{
                  style: {
                    fontFamily: 'Ephesis',
                    color: '#000',
                  },
                }}

                />
              </Grid>
              <Grid item xs={12}>
                  <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                    value={password}
                    InputLabelProps={{
                  style: {
                    fontFamily: 'Ephesis',
                    color: '#000',
                    border: '10px'
                  },
                }}

                />
              </Grid>
            </Grid>
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              disabled={Boolean(!email ?? !name ?? !password)}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </StyledButton>
            <Grid container justifyContent="flex-start">
              <Grid item>
                  <Link href="/goit-react-hw-08-phonebook/login"
                  color="#000000">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </div>
    </ThemeProvider>

  )
}



