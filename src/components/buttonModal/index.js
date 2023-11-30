import React from 'react'
import './style.css'

const ButtonModal = ({setActive}) => {
    return (
        <button className='Button-modal'onClick={() => setActive(true)}>Перейти</button>
                  
    )
  }
export default ButtonModal