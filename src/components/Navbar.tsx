import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import ConstructionIcon from "@mui/icons-material/Construction";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import SchoolIcon from "@mui/icons-material/School";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";


const pages = ["Home", "About Me", "Skills", "Experience", "Competitions", "Education"];
type Link = {
  label: string;
  link: string;
};
const a: Link[] = [
  { label: "Home", link: "/Home" },
  { label: "About Me", link: "/About" },
  { label: "Skills", link: "/Skills" },
  { label: "Experience", link: "/Experience" },
  { label: "Competitions", link: "/Competition" },
  { label: "Education", link: "/Education" },
];

const theme = createTheme({
  palette: {
    primary: {
      light: "#6746c3",
      main: "#311b92",
      dark: "#000063",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff5f52",
      main: "#c62828",
      dark: "#8e0000",
      contrastText: "#fff",
    },
  },
});

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar variant="dense">
            <Link to="/Home">
              <Typography variant="h4" sx={{ color: "white" }} component="div">
                <b>SUTTHIPHAN'S RÉSUMÉ</b>
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                edge="start"
                sx={{
                  display: { xs: "block", md: "none" },
                  marginLeft: "auto",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {a.map(({ label, link }) => (
                  <Link to={link}>
                    <MenuItem key={label} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" sx={{
                    
                      fontWeight: "bold",
                      fontSize: "100%"}}>{label}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="medium" color="inherit">
                <HomeIcon />
                <Typography>&nbsp;</Typography>
                <Link to="/Home" color="inherit">
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "100%",
                    }}
                  >
                    Home
                  </Typography>
                </Link>
              </IconButton>
              <IconButton size="medium" color="inherit">
                <AccountBoxIcon />
                <Typography>&nbsp;</Typography>
                <Link to="/About">
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "100%",
                    }}
                  >
                    About Me
                  </Typography>
                </Link>
              </IconButton>
              <IconButton size="medium" color="inherit">
                <ConstructionIcon />
                <Typography>&nbsp;</Typography>
                <Link to="/Skills" color="inherit">
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "100%",
                    }}
                  >
                    Skills
                  </Typography>
                </Link>
              </IconButton>
              <IconButton size="medium" color="inherit">
                <LaptopChromebookIcon />
                <Typography>&nbsp;</Typography>
                <Link to="/Experience" color="inherit">
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "100%",
                    }}
                  >
                    Experience
                  </Typography>
                </Link>
              </IconButton>
              <IconButton size="medium" color="inherit">
                <ContentPasteSearchIcon />
                <Typography>&nbsp;</Typography>
                <Link to="/Competition" color="inherit">
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "100%",
                    }}
                  >
                    Competitions
                  </Typography>
                </Link>
              </IconButton>
              <IconButton size="medium" color="inherit">
                <SchoolIcon />
                <Typography>&nbsp;</Typography>
                <Link to="/Education" color="inherit">
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "100%",
                    }}
                  >
                    Education
                  </Typography>
                </Link>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
export default Navbar;