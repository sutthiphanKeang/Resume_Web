import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

export default class Skills extends Component {
  render() {
    return (
      <Card sx={{ margin: 2 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          PROFESSIONAL SKIILS
        </Typography>
        <Typography>
          <div className='row mt-top'>
            <div className='col s6'>
              <p><b>Python</b></p>
              <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={80} />
              </Box>
              <p><b>HTML</b></p>
              <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={65} />
              </Box>
              <p><b>Java Script</b></p>
              <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={70} />
              </Box>
            </div>
            <div className='col s6'>
              <p><b>Java</b></p>
              <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={60} />
              </Box>
              <p><b>CSS</b></p>
              <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={50} />
              </Box>
              <p><b>C++</b></p>
              <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={65} />
              </Box>
            </div>
          </div>
        </Typography>
      </CardContent>
      </Card>
    );
  }
}

