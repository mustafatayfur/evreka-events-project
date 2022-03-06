/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import './Modal.css'
import Options from "../options/Options";
import NextModal from "../nextModal/NextModal"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Modals() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Stack direction='row' spacing={2}>
        <Button variant='contained' color='primary'>
          NO ACTION NEEDED
        </Button>
        <Button
          onClick={handleOpen}
          variant='contained'
          color='success'
          className='take-action'>
          TAKE ACTION
        </Button>
      </Stack>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'>
        <Box sx={{ width: "45%" }} className='box-modal'>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              >
              <Tab label='SELECT ACTION' {...a11yProps(0)} />
              <Tab label='TAKE ACTION'{...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
                <Options/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <Tabs onChange={handleChange} value={value}>
            <Button 
               
              variant='contained'
              color='success'
              {...a11yProps(1)} 
              >NEXT
            </Button>
          </Tabs>
        </Box>
      </Modal>
    </div>
  );
}
