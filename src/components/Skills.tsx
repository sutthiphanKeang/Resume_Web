import React, { Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import "./custom-css.css";

export default class Skills extends Component {
  render() {
    return (
      <Card sx={{ margin: 1.5 }}>
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
                      <Typography variant="subtitle1" className="roboto-font" color="text.secondary">
                        - Teaching Assistant 204111 (Homework in
                        Fundamentals of Programming)
                        <br />- EV3 Project 204113 (Write a program to control
                        the EV3 robot)
                      </Typography>
                    </Box>
                  </Box>
                  <p>
                    <b>HTML & CSS</b>
                  </p>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress variant="determinate" value={65} />
                    <Box sx={{ p: 1 }}>
                      <Typography variant="subtitle1" className="roboto-font" color="text.secondary">
                        - Write a practice program (HTML & CSS from 204333 Web
                        App Arc) <br />- Mini Resume Project 204333 (Write in
                        HTML & CSS)
                      </Typography>
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
                      <Typography variant="subtitle1" className="roboto-font" color="text.secondary">
                        - Write a practice program (Java from 204211 OOP ,C++
                        from 204251 DS) <br />- Game Project 204211 (Write game
                        in java)
                      </Typography>
                    </Box>
                  </Box>
                  <p>
                    <b>Java Script (Vuetify & React)</b>
                  </p>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress variant="determinate" value={65} />
                    <Box sx={{ p: 1 }}>
                      <Typography variant="subtitle1" className="roboto-font" color="text.secondary">
                        - Web App Project 204333 (Write in Vuetify and Combined
                        with 204441 Concurrent) <br />- Resume Project (Write in
                        React)
                      </Typography>
                    </Box>
                  </Box>
                </div>
              </div>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }
}
