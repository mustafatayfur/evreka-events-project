import * as React from "react";
import { useEventsContext } from "../../context/EventsContext";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import moment from "moment";
import "./Details.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Modals from "../modal/Modal";
import Detail from "../detail/Detail";

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
    <div className="details-container">
      <h2>EVENT DETAILS</h2>
      <Card className='details'>
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
              (<MapContainer center={[`${newEvent.location.latitude}`, `${newEvent.location.longitude}`]} zoom={12}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[`${newEvent.location.latitude}`, `${newEvent.location.longitude}`]} >
              <Popup>
                The location is here <br />
              </Popup>
            </Marker>
          </MapContainer>)
            }
          </TabPanel>
          <TabPanel value={value} index={2}>
            {newEvent.media[0].type === "" ? "No Media Content" : 'image' ? 
            <img src={`${newEvent.media[0].url}`} alt="media" /> : "audio"
          }
            
          </TabPanel>
        </Box>
      </Card>
    </div>
  );
}
