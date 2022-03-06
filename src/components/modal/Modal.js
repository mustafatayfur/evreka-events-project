
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Stack, Tab, Tabs } from "@mui/material";
import "./Modal.css";
import Options from "../options/Options";
import Action from "../action/Action";


const steps = ["TAKE ACTION", "SELECT ACTION"];

export default function Modals() {
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  // const [skipped, setSkipped] = React.useState(new Set());

  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // setSkipped((prevSkipped) => {
  //   const newSkipped = new Set(prevSkipped.values());
  //   newSkipped.add(activeStep);
  //   return newSkipped;
  // });
  //}

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <div>
      <Stack direction='row' spacing={2}>
        <Button variant='contained' color='primary'>
          NO ACTION NEEDED
        </Button>
        <Button
          onClick={()=>handleOpen()}
          variant='contained'
          color='success'
          className='take-action'>
          TAKE ACTION
        </Button>
      </Stack>
      <Modal
        keepMounted
        open={open}
        onClose={()=>handleClose()}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'>

        <Box sx={{ width: "50%" }} className='box-modal'>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              // if (isStepSkipped(index)) {
              //   stepProps.completed = false;
              // }
              return (
                <Step key={index} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                {/** <Button onClick={()=>handleReset()}>Reset</Button>*/} 
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                {activeStep + 1 === 1 ? <Options/> : <Action/>}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  variant='contained'
                  color='secondary'
                  disabled={activeStep === 0}
                  onClick={()=>handleBack()}
                  sx={{ mr: 1 }}>
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

                <Button
                  onClick={()=>handleNext()}
                  variant='contained'
                  color='success'>
                  {activeStep === steps.length - 1 ? "Take an action" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Modal>
    </div>
  );
}
