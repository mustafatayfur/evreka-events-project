
import Paper from '@mui/material/Paper';
import React from 'react'
import { useEventsContext } from '../../context/EventsContext';
import { CommentArea, ContainerTable, Label, Title } from './style.js';

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
          
          <ContainerTable 
            onClick={()=>handleNumber(row.title === 'Mark As Resolved' ? 0:1)}
            component={Paper}  
            key={row.action} className="action-container">  
                <h5>{row.title}</h5>
                <p>
                    {row.action}
                </p>        
          </ContainerTable>) 
          ))
          :
          (<ContainerTable 
            component={Paper}  
            className="action-container">  
            <h5>{rows[newNumber].title}</h5>
            <p>
                {rows[newNumber].action}
            </p>        
          </ContainerTable>)
          }
        
        { !getComment ? 
            <div>
            </div> : 
            <div>
            <Label htmlFor="message" >
              <Title>Resolution Detail*</Title>
            <CommentArea
              className='textarea'
              name="message"
              id="message"
              value={comment}
              onChange={handleChange}
            ></CommentArea>
          </Label>
            </div>}
    </div>
  )
}

export default Action

