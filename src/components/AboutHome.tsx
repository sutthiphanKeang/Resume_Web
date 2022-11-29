import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";
import "./custom-css.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#6746c3',
      main: '#311b92',
      dark: '#000063',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff5f52',
      main: '#c62828',
      dark: '#8e0000',
      contrastText: '#fff',
    },
  },
});

export default class AboutHome extends Component {
  render() {
    return (
      <Card sx={{ margin: 1.5 }}>
        <ThemeProvider theme={theme}>
        <CardContent>
          <Typography variant="h4" component="div" className="roboto-font">
            ABOUT ME
          </Typography>
          <Box sx={{ p: 1 }}>
            <Typography sx={{ mb: 1.5 }} variant="h6" color="text.secondary" className="roboto-font">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am currently in my third year of a bachelor's degree program. My approach to work is that I admit from the outset that I am not skilled. As a result, each activity necessitates a significant amount of work. However, I never ceased growing as a person. as well as making today better than yesterday.
            </Typography>
          </Box>

          <Typography variant="h4" component="div" className="roboto-font">
            PERSONAL INFOMATION
          </Typography>
          <Box sx={{ p: 1 }}>
            <Typography color="text.secondary" className="roboto-font">
              <div className="row mt">
                <div className="col s12 m6 l7 xl7">
                  <h6>
                    <b>Address:</b> No. 5/5, 9 ,Sub-district Ton Pao ,District
                    San Kamphaeng
                  </h6>
                  <h6>
                    <b>City:</b> Chaing Mai, Thailand
                  </h6>
                  <h6>
                    <b>Email:</b> Sutthiphan_pranan@cmu.ac.th
                  </h6>
                </div>
                <div className="col s12 m6 l5 xl5">
                  <h6>
                    <b>Phone No:</b> (+66) 96-894-1040
                  </h6>
                  <h6>
                    <b>Native Language:</b> Thai
                  </h6>
                  <h6>
                    <b>Foreign Language:</b> English (Basic Level)
                  </h6>
                </div>
              </div>
            </Typography>
          </Box>

          <Stack direction="row" spacing={4}>
            <Button variant="contained" color="secondary">
              <InstagramIcon />
              <Typography>&nbsp;</Typography>
              <Link
                href="https://www.instagram.com/s.sutthiphan_keang/"
                target="_blank"
                color="inherit"
                underline="hover"
              >
                {" "}
                instagram
              </Link>
            </Button>
            <Button variant="contained" color="secondary">
              <FacebookIcon />
              <Typography>&nbsp;</Typography>
              <Link
                href="https://www.facebook.com/keang.hero.1/"
                target="_blank"
                color="inherit"
                underline="hover"
              >
                Facebook
              </Link>
            </Button>
            <Button variant="contained" color="secondary">
              <LinkedInIcon />
              <Typography>&nbsp;</Typography>
              <Link
                href="https://www.linkedin.com/in/sutthiphan-prananpaeng-88633b232"
                target="_blank"
                color="inherit"
                underline="hover"
              >
                LinkedIn
              </Link>
            </Button>
            <Button variant="contained" color="secondary">
              <GitHubIcon />
              <Typography>&nbsp;</Typography>
              <Link
                href="https://github.com/sutthiphanKeang"
                target="_blank"
                color="inherit"
                underline="hover"
              >
                GitHub
              </Link>
            </Button>
          </Stack>
        </CardContent>
        </ThemeProvider>
      </Card>
    );
  }
}
