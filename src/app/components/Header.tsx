// components/ResponsiveAppBar.tsx
'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['About Us', 'What we do', 'Project'];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static" 
      sx={{ background: "white",
            color: "#0E204E",
            boxShadow:0,
            py:3,
             }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            
            sx={{
              mr: 19,
              pt:5,
              display: { xs: 'flex', md: 'flex',lg:'flex' },
              fontFamily: 'Playfair Display',
              fontWeight: 700,
              letterSpacing: '.0rem',
              color: '0E204E',
              textDecoration: 'none',
            }}
          >
            Pineapple<br />Island
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: "none",lg:'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{fontFamily: 'Playfair Display',}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: {xs:"right",md:"right" , lg:'center'} , fontFamily: 'Playfair Display',mt:5 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#0E204E', display: 'block', mx: 2,textTransform:"none",fontSize:"20px" ,}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{ display: { xs: 'none', md: 'none',lg:"flex" } ,background: "#0E204E", color: "white", borderRadius: "0px" ,mt:5,fontFamily: 'manrope',}}
          >
            Get in Touch
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
    
    
  );
}