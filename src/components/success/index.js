import React from 'react'
import { GiConfirmed } from "react-icons/gi"
import { Wrapper } from './style'

const Success = () => {
  return (
    <Wrapper >
        <div className='success-container'>
            <GiConfirmed className='confirm-icon'/>
            <h3>ACTION HAS BEEN TAKEN!</h3>
            <p>You can see the action details from details tab.</p>
        </div>
        <div>

        </div>
    </Wrapper>
  )
}

export default Success