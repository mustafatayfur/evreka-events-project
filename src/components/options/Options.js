import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Options.css'
import { useEventsContext } from '../../context/EventsContext';


export default function Options() {
  const {setNewNumber, rows} = useEventsContext()
  const handleNumber = ((number) => {
    setNewNumber(number)
    
  });
  
  return (
    <div>
    {rows.map((row) => (
      <TableContainer 
        onClick={()=>handleNumber(row.title === 'Mark As Resolved' ? 0:1)}
        component={Paper}  
        key={row.action} className="options-container">  
            <h5>{row.title}</h5>
            <p>
                {row.action}
            </p>        
      </TableContainer>
      ))}
    </div>
  );
}
