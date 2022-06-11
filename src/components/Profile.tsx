import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default class Profile extends Component {
  render() {
    return (
      <Card sx={{ margin: 2}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image="/picture/me/keang.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" >
              <b>
                Sutthiphan Prananpaeng
              </b>
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Student at Department of Computer Science,<br/>Faculty of Science,
              Chaing Mai University
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
