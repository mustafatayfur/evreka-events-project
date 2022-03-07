import * as React from 'react';
import { useEventsContext } from '../../context/EventsContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from "moment";
import './Row.css'

export default function Row({event}) {
  const {setNewEvent, setVisible, visible} = useEventsContext()
  const newEvent = () => {
    setNewEvent(event)
  }
  
  return (
    <div className='table-row'>
    <TableContainer  
      component={Paper} 
      sx={{m:1}} 
      className={visible ? "table-container-visible" :"table-container"}>
    <Table
        sx={{ minWidth: 250}}  aria-label="simple table"
        onClick={() => {
          // setVisible(true);
          newEvent();
        }}
        >
      <TableHead >
        <TableRow >
          <TableCell sx={{fontWeight: 600}}>Date</TableCell>
          <TableCell sx={{fontWeight: 600}}>Type</TableCell>
          <TableCell sx={{fontWeight: 600}}>Bin ID</TableCell>
          <TableCell sx={{fontWeight: 600}}>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {moment(event.details[0].value).format("DD.MM.YYYY hh:mm")}
            </TableCell>
            <TableCell >{event.type}</TableCell>
            <TableCell >{event.id}</TableCell>
            <TableCell >{event.actions[1].title}</TableCell>
          </TableRow>
      </TableBody>
     </Table>
    </TableContainer>
    </div>
  );
}
