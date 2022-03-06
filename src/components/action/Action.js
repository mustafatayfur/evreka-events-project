import { TableContainer } from '@mui/material'
import Paper from '@mui/material/Paper';
import React from 'react'
import { useEventsContext } from '../../context/EventsContext';

const Action = () => {
    const {newNumber, rows} = useEventsContext()
  return (
    <div>
    <TableContainer 
        component={Paper}  
        className="action-container">  
        <h5>{rows[newNumber].title}</h5>
        <p>
            {rows[newNumber].action}
        </p>        
  </TableContainer>
    </div>
  )
}

export default Action