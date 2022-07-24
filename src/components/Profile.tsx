import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import keang from "../picture/me/keang.jpg";
import "./custom-css.css";

export default class Profile extends Component {
  render() {
    return (
      <Card sx={{ margin: 1.5 }}>
        <CardActionArea>
          <CardMedia component="img" width ="5000" height="550" image={keang} />
          <CardContent>
            <Typography gutterBottom variant="h4" className="roboto-font">
              <b>Sutthiphan Prananpaeng</b>
            </Typography>
            <Typography
              className="roboto-font"
              variant="subtitle1"
              color="text.secondary"
              gutterBottom
            >
              Student at Department of Computer Science,
              <br />
              Faculty of Science, Chaing Mai University
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
