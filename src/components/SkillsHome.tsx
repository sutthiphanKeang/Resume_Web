import React, { Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import "./custom-css.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default class SkillsHome extends Component {
  render() {
    return (
      <Card sx={{ margin: 1.5 }}>
        <ThemeProvider theme={theme}>
          <CardContent>
            <Typography variant="h4" component="div" className="roboto-font">
              PROFESSIONAL SKIILS
            </Typography>
            <Box sx={{ p: 1 }}>
              <Typography className="roboto-font">
                <div className="row mt-top">
                  <div className="col s6">
                    <Typography
                      variant="h6"
                      component="div"
                      className="roboto-font"
                    >
                      <b>Python</b>
                    </Typography>

                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ p: 1 }}>
                        <Typography
                          variant="subtitle1"
                          className="roboto-font"
                          color="text.secondary"
                        >
                          - Teaching Assistant 204111 (Homework in Fundamentals
                          of Programming)
                          <br />- EV3 Project 204113 (Write a program to control
                          the EV3 robot)
                        </Typography>
                        <Stack direction="row" spacing={4} mt={2}>
                          <Button variant="contained" color="secondary">
                            <GitHubIcon />
                            <Typography>&nbsp;</Typography>
                            <Link
                              href="https://github.com/sutthiphanKeang/204111-Fundamentals-of-Programming"
                              target="_blank"
                              color="inherit"
                              underline="hover"
                            >
                              {" "}
                              Fundamentals of Programming
                            </Link>
                          </Button>
                        </Stack>
                      </Box>
                    </Box>
                    <p>
                    </p>
                      <Typography
                        variant="h6"
                        component="div"
                        className="roboto-font"
                      >
                        <b>HTML & CSS</b>
                      </Typography>
                    
                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ p: 1 }}>
                        <Typography
                          variant="subtitle1"
                          className="roboto-font"
                          color="text.secondary"
                        >
                          - Write a practice program (HTML & CSS from 204333 Web
                          App Arc) <br />- Mini Resume Project 204333 (Write in
                          HTML & CSS)
                        </Typography>
                        <Stack direction="row" spacing={4} mt={2}>
                          <Button variant="contained" color="secondary">
                            <GitHubIcon />
                            <Typography>&nbsp;</Typography>
                            <Link
                              href="https://github.com/sutthiphanKeang/Mini-Project-204333"
                              target="_blank"
                              color="inherit"
                              underline="hover"
                            >
                              {" "}
                              Mini Resume Project
                            </Link>
                          </Button>
                        </Stack>
                      </Box>
                    </Box>
                    <p>
                    </p>
                      <Typography
                        variant="h6"
                        component="div"
                        className="roboto-font"
                      >
                        <b>Dart (Flutter)</b>
                      </Typography>
                    
                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ p: 1 }}>
                        <Typography
                          variant="subtitle1"
                          className="roboto-font"
                          color="text.secondary"
                        >
                          - Lotus's Retails Innovation Hackathon. <br /><br />
                        </Typography>
                        <Stack direction="row" spacing={4} mt={2}>
                          <Button variant="contained" color="secondary">
                            <GitHubIcon />
                            <Typography>&nbsp;</Typography>
                            <Link
                              href="https://github.com/sutthiphanKeang/Lotus-hackathon"
                              target="_blank"
                              color="inherit"
                              underline="hover"
                            >
                              {" "}
                              Lotus's Cart Appication
                            </Link>
                          </Button>
                        </Stack>
                      </Box>
                    </Box>
                  </div>
                  <div className="col s6">
                    <Typography
                      variant="h6"
                      component="div"
                      className="roboto-font"
                    >
                      <b>Java & C++</b>
                    </Typography>

                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ p: 1 }}>
                        <Typography
                          variant="subtitle1"
                          className="roboto-font"
                          color="text.secondary"
                        >
                          - Write a practice program (Java from 204211 OOP ,C++
                          from 204251 DS) <br />- Game Project 204211 (Write
                          game in java)
                        </Typography>
                        <Stack direction="row" spacing={4} mt={2}>
                          <Button variant="contained" color="secondary">
                            <GitHubIcon />
                            <Typography>&nbsp;</Typography>
                            <Link
                              href="https://github.com/sutthiphanKeang/204211-Object-Oriented-Programming"
                              target="_blank"
                              color="inherit"
                              underline="hover"
                            >
                              {" "}
                              OOP
                            </Link>
                          </Button>
                          <Button variant="contained" color="secondary">
                            <GitHubIcon />
                            <Typography>&nbsp;</Typography>
                            <Link
                              href="https://github.com/sutthiphanKeang/204251-data-structures"
                              target="_blank"
                              color="inherit"
                              underline="hover"
                            >
                              {" "}
                              Data structure
                            </Link>
                          </Button>
                          <Button variant="contained" color="secondary">
                            <GitHubIcon />
                            <Typography>&nbsp;</Typography>
                            <Link
                              href="https://github.com/nightkuzan/OOP_project"
                              target="_blank"
                              color="inherit"
                              underline="hover"
                            >
                              Game Project
                            </Link>
                          </Button>
                        </Stack>
                      </Box>
                    </Box>
                    <p>
                      
                    </p>
                    <Typography
                      variant="h6"
                      component="div"
                      className="roboto-font"
                    >
                      <b>Java Script (Vue.JS)</b>
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ p: 1 }}>
                        <Typography
                          variant="subtitle1"
                          className="roboto-font"
                          color="text.secondary"
                        >
                          - Web App Project 204333 (Write in Vuetify and
                          Combined with 204441 Concurrent) <br /><br />
                        </Typography>

                        <Stack direction="row" spacing={4} mt={2}>
                          <Button variant="contained" color="secondary">
                            <GitHubIcon />
                            <Typography>&nbsp;</Typography>
                            <Link
                              href="https://github.com/sutthiphanKeang/classroom-resevation-deployment"
                              target="_blank"
                              color="inherit"
                              underline="hover"
                            >
                              {" "}
                              classroom-reservation Project
                            </Link>
                          </Button>
                          
                        </Stack>
                      </Box>
                    </Box>

                    <p>
                      
                    </p>
                    <Typography
                      variant="h6"
                      component="div"
                      className="roboto-font"
                    >
                      <b>Type Script (MUI)</b>
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ p: 1 }}>
                        <Typography
                          variant="subtitle1"
                          className="roboto-font"
                          color="text.secondary"
                        >
                          - Web App Project 204361 Software Engineering and 204321 Database Systems. <br />- Resume
                          Project (Write in React)
                        </Typography>

                        <Stack direction="row" spacing={4} mt={2}>
                          <Button variant="contained" color="secondary">
                            <GitHubIcon />
                            <Typography>&nbsp;</Typography>
                            <Link
                              href="https://github.com/sutthiphanKeang/ProjectSeAndDB"
                              target="_blank"
                              color="inherit"
                              underline="hover"
                            >
                              {" "}
                              Car-Reservation Project
                            </Link>
                          </Button>
                          <Button variant="contained" color="secondary">
                            <GitHubIcon />
                            <Typography>&nbsp;</Typography>
                            <Link
                              href="https://github.com/sutthiphanKeang/Resume_Web"
                              target="_blank"
                              color="inherit"
                              underline="hover"
                            >
                              Resume Project
                            </Link>
                          </Button>
                        </Stack>
                      </Box>
                    </Box>

                  </div>
                </div>
              </Typography>
            </Box>
          </CardContent>
        </ThemeProvider>
      </Card>
    );
  }
}
