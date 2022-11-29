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
import cp2 from "../picture/me/cp2.jpg";
import cp3 from "../picture/me/cp3.png";
import cp1 from "../picture/me/cp1.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Integration based learning for Web App',
    imgPath:
      cp1 ,
    description: `It is a competition in the course 204333 Web Application Architecture 
    by collaborating with the course 204441 Concurrent 
    , and I was in charge of coding the front-end using Vue.JS. 
    There is a one-semester working period, and after finishing the course, 
    there will be a presentation to the committee. who is a subject teacher and a CS teacher, 
    and my team came in 1st runner up.`,
  },
  {
    label: "Lotus's Retails Innovation Hackathon",
    imgPath:
      cp2 ,
    description:
      `Lotus' hackathon is a collaboration between two faculties 
      and one college, including the Faculty of Science. 
      CAMT and the Faculty of Engineering In the retails lnnovation hackathon competition, 
      a problem is presented and 26 hours are allotted to develop an application 
      to solve that problem. My team came in 1st runner up.`,
  },
  {
    label: 'Best Education Award',
    imgPath:
      cp3,
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
    <Typography variant="h4" component="div" className="roboto-font">
    COMPETITIONS AND AWARDS
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
              {Math.abs(activeStep - index) <= 12 ? (
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