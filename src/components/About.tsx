import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default class About extends Component {
  render() {
    return (
      <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          ABOUT ME
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        I am currently in my third year of a bachelor's degree program. 
        My advantage is that I am a conscientious and responsible individual. 
        However, the disadvantage is that it is extremely indolent. 
        I also enjoy sleeping a lot, therefore if I'm given a task, 
        I'll work hard to complete it as fast as feasible.
        </Typography>
        <Typography variant="h5" component="div">
          PERSONAL INFOMATION
        </Typography>
        <Typography>
          <div className='row mt'>
            <div className='col s12 m6 l7 xl7'>
              <p>
                <b>Address:</b> House No. 5/5 ,Village No. 9 ,Sub-district Ton Pao ,District San Kamphaeng
              </p>
              <p>
                <b>City:</b> Chaing Mai, Thailand
              </p>
              <p>
                <b>Email:</b> kang.kang11909@gmail.com
              </p>
              
            </div>
            <div className='col s12 m6 l5 xl5'>
              <p>
                <b>Phone No:</b> (+66) 96-894-1040
              </p>
              <p>
                <b>Native Language:</b> Thai
              </p>
              <p>
                <b>Foreign Language:</b> English
              </p>
              
            </div>
          </div>
        </Typography>
        <Stack direction="row" spacing={3}>
          <Button variant="contained">
            <InstagramIcon/> 
            <Typography>&nbsp;</Typography>
            <Link href='https://www.instagram.com/s.sutthiphan_keang/' target="_blank" color="inherit" underline="hover" > instagram</Link> 
          </Button>
          <Button variant="contained">
            <FacebookIcon/>
            <Typography>&nbsp;</Typography>
            <Link href='https://www.facebook.com/keang.hero.1/' target="_blank" color="inherit" underline="hover">Facebook</Link> 
          </Button>
          <Button variant="contained">
            <LinkedInIcon/>
            <Typography>&nbsp;</Typography>
            <Link href='https://www.linkedin.com/in/sutthiphan-prananpaeng-88633b232' target="_blank" color="inherit" underline="hover">LinkedIn</Link>
          </Button>
        </Stack>
      </CardContent>
      </Card>
    );
  }
}
