import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./custom-css.css";
import ac2 from "../picture/me/ac2.jpg";
import ac3 from "../picture/me/ac3.png";
import ac1 from "../picture/me/ac1.jpeg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Teaching Assistant 204111',
    imgPath:
      ac1 ,
    description: `Assistant teachers are teaching assistants of teachers in courses 204111 and 204113 
    of the Department of Computer Science. Chiang Mai University. 
    The work will be divided into 2 parts, which is to help teach homework to first year students and edit the teaching clips of each session. 
    I have been doing this job since the 2nd year until the 3rd year.`,
  },
  {
    label: 'Department of Activities Committee',
    imgPath:
      ac2 ,
    description:
      `Organizing activities of various computer science departments The work that I do is to organize 
      activities for 2nd and 1st year students of the department. There are many works that I have done. 
      like the first meeting A mini concert in collaboration with the music club of the Faculty of Science.`,
  },
  {
    label: 'Best Education Award',
    imgPath:
      ac3,
    description:
    `Annual good student award You can get it only if your grade point average for both semesters is 3.5 
    or higher and you don't have an F grade and this certificate belongs to the academic year 2021.`,
  },
];
function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Card sx={{ margin: 1.5 }}>
    <CardContent>
    <Typography variant="h5" component="div" className="roboto-font">
       EXPRERIENCE
    </Typography>
      <Box sx={{ maxWidth: 1500, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography variant="h5" className="roboto-font">{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 4 ? (
                <div className='row mt-top'>
                  <div className='col s6'>
                    <Box
                      component="img"
                      sx={{
                        height: 350,
                        display: 'block',
                        maxWidth: 520,
                        overflow: 'hidden',
                        width: '100%',
                        m: 2
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    >
                    </Box>
                  </div>
                  <div className='col s6'>
                    <Box sx={{ height: 300, maxWidth: 520, width: '100%', p: 2 }}>
                      <Typography variant="h6" gutterBottom color="text.secondary" className="roboto-font">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{step.description}</Typography>
                    </Box>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </CardContent>
    </Card>
  );
}

export default SwipeableTextMobileStepper;