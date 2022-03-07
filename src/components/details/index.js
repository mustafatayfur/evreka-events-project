import * as React from "react";
import { useEventsContext } from "../../context/EventsContext";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./style.js";
import Modals from "../modal";
import Detail from "../detail/index";
import ImgMedia from "../imgMedia";
import Map from "../maps";
import { CardContainer, Wrapper } from "./style.js";

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

export default function Details() {
  const [value, setValue] = React.useState(0);
  const {newEvent} = useEventsContext()
  console.log(newEvent)
  console.log(newEvent.media[0].type)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <Wrapper>
      <h2>EVENT DETAILS</h2>
      <CardContainer className='details'>
        <Modals/>
        <Box sx={{ width: "100%", marginTop: "5px" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'>
              <Tab label='DETAILS' {...a11yProps(0)} />
              <Tab label='LOCATION' {...a11yProps(1)} />
              <Tab label='MEDIA' {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
          {newEvent.details[0].value === "-" ? "There is no detail!": <Detail newEvent={newEvent} />}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {newEvent.location.latitude === 0 
              ? "There is no map information!":
              <Map newEvent={newEvent}/>
            }
          </TabPanel>
          <TabPanel value={value} index={2}>
            {newEvent.media[0].type === "" ? "No Media Content" : 'image' ? 
            <ImgMedia  newEvent={newEvent}/> : "audio"
          }
            
          </TabPanel>
        </Box>
      </CardContainer>
    </Wrapper>
  );
}
