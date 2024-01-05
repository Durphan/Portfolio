
import HomeLogo from "../assets/logo.svg"
import React, { useState } from 'react';
import Menu from '@mui/material/Menu'
import { Box, IconButton, MenuItem, Toolbar } from '@mui/material'
import { Link } from './link';

export const ResponsiveNavbar = () => {
   const [anchorElNav, setAnchorElNav] = useState(null)

   const handleOpenMenu = (event) =>{
    setAnchorElNav(event.currentTarget)
   }

   const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return(

    <Toolbar sx={{justifyContent:"space-between", maxWidth:"1600px", display: { xs: 'flex', md: 'none' }}}>
        <img src={HomeLogo}></img>
    <Box sx={{flexGrow: 1} } >
    <IconButton
      size="large"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenMenu}
      color="secondary"
      sx={{float:"right"}}
      
      >
     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
    </IconButton>
    <Menu   sx={{display:{ xs: 'block', md: 'none' }}}
            anchorEl={anchorElNav}
            keepMounted 
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }} 
            open={Boolean(anchorElNav)} 
            onClose={handleCloseNavMenu} 
            >
                <MenuItem><Link link={"/"} labelLink={"Inicio"}/></MenuItem>
                <MenuItem><Link link={"/"} labelLink={"Servicios"}/></MenuItem>
                <MenuItem><Link link={"/"} labelLink={"Contactanos"}/></MenuItem>
    </Menu>
    </Box>
    </Toolbar>
  )
}