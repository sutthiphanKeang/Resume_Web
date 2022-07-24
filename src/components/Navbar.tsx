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
import HomeIcon from '@mui/icons-material/Home';

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

export default class Navbar extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={theme}>
          <AppBar position="static" color="primary">
            <Toolbar variant="dense">
              <Link to="/Home">
                <Typography
                  variant="h4"
                  sx={{ color: "white" }}
                  component="div"
                >
                  <b>SUTTHIPHAN'S RÉSUMÉ</b>
                </Typography>
              </Link>

              <Box sx={{ flexGrow: 1 }} />
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
}
