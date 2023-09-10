
import {
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Tooltip,
  Avatar
} from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { setPath } from "redux/auth/auth-slice";
import { useNavigate } from "react-router-dom";
import { AppNavBar } from "./NavBar.styled";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { StyledButton } from "GlobalStyles.styled";
import * as authOperations from '../../redux/auth/auth-operations'

const isLoggedInPages = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Contacts',
    link: '/contacts'
  },
];

const isLoggedOutPages = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Login',
    link: '/login',
  },
  {
    name: 'Registration',
    link: '/register',
  },
];

const settings = [
  {
    name: 'Logout',
    link: '/'
  }
]

export default function NavBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pages = isLoggedIn ? isLoggedInPages : isLoggedOutPages;
  const [openNav, setOpenNav] = useState(null);
  const [openUser, setOpenUser] = useState(null);

  const handleOpenNavMenu = e => {
    setOpenNav(e.currentTarget);
  };

  const handleCloseNavMenu = e => {
    setOpenNav(null);

    if (e.currentTarget.dataset.name === undefined) {
      return;
    };
    isLoggedIn && dispatch(setPath(e.currentTarget.dataset.link));
    navigate(e.currentTarget.dataset.link);
  };

  const handleOpenUserMenu = e => {
    setOpenUser(e.currentTarget)
  };
  const handleCloseUserMenu = e => {
    setOpenUser(null);
    e.currentTarget.dataset.name === 'Logout' &&
      isLoggedIn &&
      dispatch(authOperations.logOut());
  };

  function getRandomAvatarUrl() {
  const randomId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/200/200/?image=${randomId}`;
  }
  const randomAvatarUrl = getRandomAvatarUrl();

  return (
    <AppNavBar>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={openNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(openNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  data-name={page.name}
                  data-link={page.link}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <PhoneIphoneIcon
            sx={{
              color: "black",
              display: {
                xs: 'flex',
                md: 'none'
              },
              mr: 1
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            PhoneBook
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <StyledButton
                data-link={page.link}
                data-name={page.name}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ mr: 3, color: 'white', display: 'block' }}>
                   {page.name}
              </StyledButton>
            ))}
          </Box>
          {isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Log out">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={userName} src={randomAvatarUrl} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={openUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(openUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem
                    key={setting.name}
                    onClick={handleCloseUserMenu}
                    data-link={setting.link}
                    data-name={setting.name}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppNavBar>


  );
}
