import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Options.css'

function createData(action, title) {
  return { action, title};
}

const rows = [
  createData('Mark this event as resolved and enter the details of the resolution.', 'Mark As Resolved'),
  createData('Change the asset with another one.', 'Change Asset'),
];

export default function Options() {
  return (
    <div>
    {rows.map((row) => (
      <TableContainer 
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
