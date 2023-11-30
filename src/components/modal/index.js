import React from 'react'
import Cart from '../cart'
import './style.css'

const Modal = ({active, total, setActive, removeFromCart, resultArr}) => {
    return (

      <div className={active? 'modal active' : 'modal'}>
          <div className={active? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation}>
          {resultArr.length? (
               <Cart resultArr={resultArr} total={total} setActive={setActive} removeFromCart={removeFromCart}/>     
          ) : (
            <div onClick={() => setActive(false)}>
              <p style={{marginTop:'2rem', marginBottom: '5rem', marginLeft:'1rem'}}>Корзина пуста</p>
              <button style={{marginBottom: '2rem', marginLeft:'1rem'}} onClick={() => setActive(false)}>Закрыть</button>
            </div>)}                   
          </div> 
        </div>
     )
  }
  
  export default Modal;

 