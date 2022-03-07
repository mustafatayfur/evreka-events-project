import { TableContainer } from '@mui/material'
import Paper from '@mui/material/Paper';
import React from 'react'
import { useEventsContext } from '../../context/EventsContext';
import { Wrapper } from './Actionnnn.js';

const Action = ({getComment}) => {
    const {newNumber, setNewNumber, comment, setComment, rows} = useEventsContext()

    const handleNumber = ((number) => {
      setNewNumber(number)
    }); 
    const handleChange = (event) => {
    setComment(event.target.value);
    };
    console.log(getComment)

  return (
    <Wrapper>
        
        {newNumber === undefined ?
          (rows.map((row) => (
          
          <TableContainer 
            onClick={()=>handleNumber(row.title === 'Mark As Resolved' ? 0:1)}
            component={Paper}  
            key={row.action} className="action-container">  
                <h5>{row.title}</h5>
                <p>
                    {row.action}
                </p>        
          </TableContainer>) 
          ))
          :
          (<TableContainer 
            component={Paper}  
            className="action-container">  
            <h5>{rows[newNumber].title}</h5>
            <p>
                {rows[newNumber].action}
            </p>        
          </TableContainer>)
          }
        
        { !getComment ? 
            <div>
            </div> : 
            <div>
            <label htmlFor="message">
              <h4>Resolution Detail*</h4>
            <textarea
              className='textarea'
              name="message"
              id="message"
              value={comment}
              onChange={handleChange}
            ></textarea>
            <small>Your contact message for us</small>
          </label>
            </div>}
    </Wrapper>
  )
}

export default Action

