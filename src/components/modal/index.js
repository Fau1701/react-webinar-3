import React from 'react'
import Cart from '../cart'
import './style.css'

const Modal = ({active, total, setActive, removeFromCart, resultArr}) => {
  console.log('modal');
    return (

      <div className={active? 'Modal active' : 'Modal'}>
          <div className={active? 'Modal__content active' : 'Modal__content'} onClick={e => e.stopPropagation}>
          {resultArr.length? (
               <Cart resultArr={resultArr} total={total} setActive={setActive} removeFromCart={removeFromCart}/>     
          ) : (
            <div onClick={() => setActive(false)}>
              <p className='Modal-message_empty'>Корзина пуста</p>
              <button className='Modal-close' onClick={() => setActive(false)}>Закрыть</button>
            </div>)}                   
          </div> 
        </div>
     )
  }
  
  export default React.memo(Modal);

 