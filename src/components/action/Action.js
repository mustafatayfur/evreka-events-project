import { TableContainer, TextareaAutosize, TextField } from '@mui/material'
import Paper from '@mui/material/Paper';
import React from 'react'
import { useEventsContext } from '../../context/EventsContext';
import './Action.css'

const Action = () => {
    const {newNumber, comment, setComment, rows} = useEventsContext()
    
  const handleChange = (event) => {
    setComment(event.target.value);
  };

    // function maxLengthCheck(object) {
    //     if (object.value.length > object.maxLength)
    //     object.value = object.value.slice(0, object.maxLength)
    //   }

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
            
            <TextField
        id="outlined-name"
        label="Resolution Detail*"
        value={comment}
        onChange={handleChange}
      />
        </div>
    </div>
  )
}

export default Action