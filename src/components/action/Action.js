import { TableContainer, TextareaAutosize } from '@mui/material'
import Paper from '@mui/material/Paper';
import React from 'react'
import { useEventsContext } from '../../context/EventsContext';
import './Action.css'

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
        <div>
            <label>Resolution Detail*</label>    
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: "99%", height:100 }}
            />
        </div>
    </div>
  )
}

export default Action