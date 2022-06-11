import React, { Component } from 'react'
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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Hotel Del Luna',
    imgPath:
      'https://thestandard.co/wp-content/uploads/2019/07/COVER-WEB-26.jpg',
    description: `Jang Man-Wol (IU) is the CEO of Hotel del Luna. The hotel is situated in downtown in Seoul and has a very old appearance. She made a big error many years ago and, because of this, she has been stuck at Hotel del Luna. She is beautiful, but she is fickle, suspicious and greedy.`,
  },
  {
    label: 'My Mister',
    imgPath:
      'https://i0.wp.com/www.korseries.com/wp-content/uploads/2018/12/My-Mister-Poster.jpg?resize=750%2C519',
    description:
      "My Mister tells the story of an impoverished and debt-laden young woman (IU) struggling to stay afloat as she nurses her deaf, sick grandmother and working a temporary job. She develops an unlikely bond with one of her equally miserable supervisors (Lee Sun-kyun), which is subjected to scrutiny and manipulation by their colleagues, friends, and dysfunctional families. Enduring the weight of their respective lives, they come together, forming new relationships, keeping parts of themselves secret — but ultimately healing one another's past scars.",
  },
  {
    label: 'Moon Lovers: Scarlet Heart Ryeo',
    imgPath:
      'https://f.ptcdn.info/140/054/000/oxrapjaczH5Or39GCWL-o.jpg',
    description: `During a total solar eclipse, a 25-year-old 21st-century woman, Go Ha-jin (Lee Ji-eun), is transported back in time, to the Goryeo Dynasty.
    She wakes up in the year of 941, in the body of Hae Soo, among the many princes of the ruling Wang family, during the reign of King Taejo. 
    She initially falls in love with the gentle and warm-hearted 8th Prince Wang Wook (Kang Ha-neul), but later develops a relationship with Wang So (Lee Joon-gi), the fearsome 4th Prince, who hides his face behind a mask and is given the derogatory label of "wolf-dog".
    As the story develops, Hae Soo finds herself unwittingly caught up in the palace politics and the rivalry among the princes, as they fight for the throne.`,
  },
  {
    label: 'The Producers ',
    imgPath:
      'http://f.ptcdn.info/702/040/000/o3mit28tvefvUNmoeU2-o.jpg',
    description:
      "The Producers is a 1967 American satirical black comedy film written and directed by Mel Brooks in his directorial debut and starring Zero Mostel, Gene Wilder, Dick Shawn, and Kenneth Mars. The film is about a theater producer and his accountant who, as part of a scam, have to stage the worst stage musical they can create. They eventually find one centering around Adolf Hitler and the Nazis. Because of this theme, The Producers was controversial from the start[8][9] and received mixed reviews. It became a cult film[10] and found a more positive critical reception later.  The Producers was Brooks's directorial debut.[11] For the film, he won an Academy Award for Best Original Screenplay. In 1996, the film was selected for preservation in the National Film Registry[12] and placed eleventh on the AFI's 100 Years...100 Laughs list. It was later adapted by Brooks and Thomas Meehan as a stage musical, which itself was adapted into a film.",
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
    <Card sx={{ margin: 2 }}>
    <CardContent>
    <Typography variant="h5" component="div">
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
          <Typography>{images[activeStep].label}</Typography>
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
                        maxWidth: 525,
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
                      <h6>{step.description}</h6>
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