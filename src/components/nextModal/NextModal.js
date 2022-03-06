import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

function NextModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button onClick={handleOpen} variant='contained'
        color='success'>NEXT</Button>
      </React.Fragment>
    );
  }
  export default NextModal