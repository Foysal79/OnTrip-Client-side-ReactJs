import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {  NavLink } from 'react-router-dom';

const pages = [
  { name: 'Home', link: '/' },
  { name: 'Community', link: '/community' },
  { name: 'Blogs', link: '/blogs' },
  { name: 'About Us', link: '/about' },
  { name: 'Contact Us', link: '/contact' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
// TODO :-> user set pls
    const user = false;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log(anchorElNav);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar    sx={{backgroundColor : "#023047", py: 1, }} position='absolute' >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <TravelExploreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              
              color: 'white',
              textDecoration: 'none',
            }}
          >
            On<span style={{color: '#FFB703'}} >Trip</span>
          </Typography>

          
          <Box sx={{   flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:"white"}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* responsive */}
              {pages.map((page) => (
                <MenuItem component={NavLink} to={page.link}  key={page} onClick={handleCloseNavMenu} sx={{color: "black", textDecoration: "none"}} >
                  <Typography   textAlign="center"  >
                    
                    {page.name}
                   
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          
          {/* responsive session */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
           <TravelExploreIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 900,
              
              color: 'white',
              textDecoration: 'none',
            }}
          >
            OnTrip
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
              component={NavLink}
              to={page.link}
              
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2,  display: 'block' , color: 'white', textDecoration: 'none' }}
              >
                 {page.name} 
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {
                user ?  <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip> 
              : 
            <Button href='/signin' sx={{color: 'white', textDecoration: 'none'}} variant="outlined">  Log In <LoginRoundedIcon />  </Button>
            }
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;