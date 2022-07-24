import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import BoyIcon from "@mui/icons-material/Boy";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import "./custom-css.css";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(102,153,255) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(102, 153, 255) 0%,rgb(51,102,255) 50%,rgb(102, 153, 255) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(102, 153, 255) 0%, rgb(102, 153, 255) 50%, rgb(102, 153, 255) 100%)",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <BoyIcon />,
    2: <DirectionsWalkIcon />,
    3: <DirectionsRunIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  {
  label: "Junior High School At Sankamphaeng School",
  gpx: "GPX 3.5x",
  end: "Graduate 255x",
  },
  {
  label: "Senior High School At Sankamphaeng School",
  gpx: "GPX 3.86",
  end: "Graduate 256x",
  },
  {
  label: "Bachelor of Computer Science At Chiang Mai University",
  gpx: "GPX 3.50",
  end: "Graduate 2567",
  }
];


export default function CustomizedSteppers() {
  return (
    <Card sx={{ margin: 1.5 }}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{ mb: 1.5 }}
          component="div"
          className="roboto-font"
        >
          EDUCATION
        </Typography>
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={3}
            connector={<ColorlibConnector />}
          >
            {steps.map((step) => (
              <Step key={step.label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  <Typography variant="subtitle1" className="roboto-font">
                    {step.label} <br/>
                    {step.gpx} <br/>
                    {step.end}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
      </CardContent>
    </Card>
  );
}
