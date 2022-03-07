import React from 'react'

const Detail = ({newEvent}) => {
  return (
    <div>
        <h4>{newEvent.details[7].title}</h4>
        <p>{newEvent.details[7].value}</p>
        <h4>{newEvent.details[6].title}</h4>
        <p>{newEvent.details[6].value}</p>
    </div>
  )
}

export default Detail