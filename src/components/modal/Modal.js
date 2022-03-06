
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { CircularProgress, Stack, Tab, Tabs } from "@mui/material";
import "./Modal.css";
import Options from "../options/Options";
import Action from "../action/Action";
import { useEventsContext } from "../../context/EventsContext";
import Success from "../success/Success";



const steps = ["TAKE ACTION", "SELECT ACTION"];

export default function Modals() {
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false)
  const {newNumber, comment, setComment, newEvent} = useEventsContext()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      newEvent.actions[1].comment = comment
      console.log(newEvent.actions[1].comment)     
    }
    setIsLoading(true)
    setTimeout(() => { setIsLoading(false) }, 1000);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

        <Box sx={{ width: "50%", maxWidth: 480 }} className='box-modal'>
          
          {activeStep === steps.length ? (
            <React.Fragment >
              {isLoading ? <CircularProgress color="success" className="fragment"/> : <Success/>}
            </React.Fragment>
          ) : (
            <React.Fragment>
            <Stepper activeStep={activeStep} className="stepper">
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              
              return (
                <Step key={index} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
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
