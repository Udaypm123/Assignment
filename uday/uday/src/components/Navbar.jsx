import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><br></br><br></br>
      <AppBar>
        <Toolbar>
        <Typography variant="h6">Product Management App</Typography>&nbsp;&nbsp;
          <Typography sx={{flexGrow:3}}></Typography>&nbsp;&nbsp;
          
          <Link to='/'>
         <Button variant="contained" color="secondary">Home</Button>&nbsp;&nbsp;
          </Link>
          <Link to='/p'>
          <Button align="left" variant="contained" color="secondary">Product</Button>&nbsp;&nbsp;
          </Link>
          
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
