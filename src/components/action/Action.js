import { TableContainer, TextareaAutosize, TextField } from '@mui/material'
import Paper from '@mui/material/Paper';
import React from 'react'
import { useEventsContext } from '../../context/EventsContext';
import './Action.css'

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
    <div>
        
        {newNumber === undefined ?
          (rows.map((row) => (
          
          <TableContainer 
            onClick={()=>handleNumber(row.title === 'Mark As Resolved' ? 0:1)}
            component={Paper}  
            key={row.action} className="options-container">  
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
            <label>Resolution Detail*</label>    
            <TextField
              id="outlined-name"
              label="Resolution Detail*"
              value={comment}
              onChange={handleChange}
            />
        </div>}
    </div>
  )
}

export default Action

         
// {rows.map((row) => (
//   newNumber === undefined ?
//   (<TableContainer 
//     onClick={()=>handleNumber(row.title === 'Mark As Resolved' ? 0:1)}
//     component={Paper}  
//     key={row.action} className="options-container">  
//         <h5>{row.title }</h5>
//         <p>
//             {row.action}
//         </p>        
//   </TableContainer>) 
//   :
//   (<TableContainer 
//     component={Paper}  
//     className="action-container">  
//     <h5>{rows[newNumber].title}</h5>
//     <p>
//         {rows[newNumber].action}
//     </p>        
// </TableContainer>)
// ))}