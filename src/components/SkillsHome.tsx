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
            <Typography variant="h5" component="div" className="roboto-font">
              PROFESSIONAL SKIILS
            </Typography>
            <Box sx={{ p: 1 }}>
              <Typography className="roboto-font">
                <div className="row mt-top">
                  <div className="col s6">
                    <p>
                      <b>Python</b>
                    </p>
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress variant="determinate" value={80} />
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
                              href="https://github.com/sutthiphanKeang/204111"
                              target="_blank"
                              color="inherit"
                              underline="hover"
                            >
                              {" "}
                              Practice in Fundamentals of Programming
                            </Link>
                          </Button>
                        </Stack>
                      </Box>
                    </Box>
                    <p>
                      <b>HTML & CSS</b>
                    </p>
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress variant="determinate" value={65} />
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
                              href="https://www.instagram.com/s.sutthiphan_keang/"
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
                  </div>
                  <div className="col s6">
                    <p>
                      <b>Java & C++</b>
                    </p>
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress variant="determinate" value={60} />
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
                              href="https://www.instagram.com/s.sutthiphan_keang/"
                              target="_blank"
                              color="inherit"
                              underline="hover"
                            >
                              {" "}
                              Practice in OOP and Data structure
                            </Link>
                          </Button>
                          <Button variant="contained" color="secondary">
                            <GitHubIcon />
                            <Typography>&nbsp;</Typography>
                            <Link
                              href="https://www.facebook.com/keang.hero.1/"
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
                      <b>Java Script (Vuetify & React)</b>
                    </p>
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress variant="determinate" value={65} />
                      <Box sx={{ p: 1 }}>
                        <Typography
                          variant="subtitle1"
                          className="roboto-font"
                          color="text.secondary"
                        >
                          - Web App Project 204333 (Write in Vuetify and
                          Combined with 204441 Concurrent) <br />- Resume
                          Project (Write in React)
                        </Typography>

                        <Stack direction="row" spacing={4} mt={2}>
                          <Button variant="contained" color="secondary">
                            <GitHubIcon />
                            <Typography>&nbsp;</Typography>
                            <Link
                              href="https://www.instagram.com/s.sutthiphan_keang/"
                              target="_blank"
                              color="inherit"
                              underline="hover"
                            >
                              {" "}
                              classroom-reservation Web Project
                            </Link>
                          </Button>
                          <Button variant="contained" color="secondary">
                            <GitHubIcon />
                            <Typography>&nbsp;</Typography>
                            <Link
                              href="https://www.facebook.com/keang.hero.1/"
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
