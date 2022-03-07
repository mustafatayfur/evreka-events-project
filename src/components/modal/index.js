
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { CircularProgress, Stack } from "@mui/material";
import "./style.js";
import Action from "../action/index";
import { useEventsContext } from "../../context/EventsContext";
import Success from "../success/Success";
import { IoClose } from 'react-icons/io5'
import { Wrapper } from "./style.js";



const steps = ["TAKE ACTION", "SELECT ACTION"];

export default function Modals() {
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false)
  const [getComment, setGetComment] = React.useState(false)
  const {setNewNumber,newNumber, comment, newEvent, setNewEvent, events} = useEventsContext()
 
  const handleOpen =(() => {
    setOpen(true)
    setActiveStep(0)
    setGetComment(false)
    setNewNumber()
  })
  const handleClose = () => setOpen(false);

  const handleNext = () => {
    
    if (newNumber !== undefined ) {
      
      if(activeStep !== steps.length - 1){
        setGetComment(true)
        
      }else if(activeStep === steps.length - 1) {
        newEvent.actions[1].comment = comment
        newEvent.actions[1].title = "-"
        console.log(newEvent.actions[1].title)
        console.log(newEvent)
        setNewEvent((events) => ({
          ...events,
          newEvent
        }))
        console.log(newEvent.actions[1].title)
        
      }
      setIsLoading(true)
      setTimeout(() => { setIsLoading(false) }, 1500); 
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      
      
    }else{
      alert("Any option is selected. Please select an option!")
    }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setNewNumber()
    setGetComment(false)
  };
//   function refreshPage(){ 
//     window.location.reload(); 
// }

  return (
    <Wrapper>
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
      {open && <Modal
        keepMounted
        open={open}
        onClose={()=>handleClose()}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'>

        <Box sx={{ width: "50%", maxWidth: 480 }} className='box-modal'>
          <IoClose className="close-icon" onClick={ handleClose }/>
          {activeStep === steps.length && open ? (
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
                <Action getComment={getComment}/>
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
      </Modal>}
    </Wrapper>
  );
}