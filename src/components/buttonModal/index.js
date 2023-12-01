import React from 'react'
import './style.css'

const ButtonModal = ({setActive}) => {
  console.log('button-modal');
    return (
        <button className='Button-modal'onClick={() => setActive(true)}>Перейти</button>
                  
    )
  }
export default React.memo(ButtonModal)