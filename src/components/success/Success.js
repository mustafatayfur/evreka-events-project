import React from 'react'
import { GiConfirmed } from "react-icons/gi"
import './Success.css'

const Success = () => {
  return (
    <div >
        <div className='success-container'>
            <GiConfirmed className='confirm-icon'/>
            <h3>ACTION HAS BEEN TAKEN!</h3>
            <p>You can see the action details from details tab.</p>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Success