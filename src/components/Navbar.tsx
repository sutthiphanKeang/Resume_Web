import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import SchoolIcon from '@mui/icons-material/School';

export default class Navbar extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h4" color="inherit" component="div">
            <b>SUTTHIPHAN'S RESUME</b>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="medium" color="inherit">
              <HomeIcon />
              <Link href="/Home" color="inherit" underline="hover"><b>Home</b></Link>
            </IconButton>
            <IconButton size="medium" color="inherit">
              <ConstructionIcon/>
              <Link href="#" color="inherit" underline="hover"><b>Skills</b></Link>
            </IconButton>
            <IconButton size="medium" color="inherit">
              <LaptopChromebookIcon/>
              <Link href="#" color="inherit" underline="hover"><b>Experience</b></Link>
            </IconButton>
            <IconButton size="medium" color="inherit">
              <SchoolIcon/>
              <Link href="#" color="inherit" underline="hover"><b>Education</b></Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    
    )
  }
}
