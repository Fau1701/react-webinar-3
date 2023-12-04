import React from 'react'
import './style.css'

const Cart = ({cart, setActive, removeFromCart, total}) => {
  console.log('cart');
  return (
    <div className='Cart'>
        <div className='Cart-header'>
          <header className='Card-header_header'><h1>Корзина</h1></header>
          <button className='Card-header_button' onClick={() => setActive(false)}>Закрыть</button>
        </div>
        <ul className='Cart-lines'>
            {cart.map((item, index) => (
                    <li key={index + 1} className='Cart-line'>
                        <div className='Cart-code'>{item.code}</div>
                        <div className='Cart-title'>{item.title}</div>
                        <div className='Cart-price'>{item.price} &#8381;</div>
                        <div className='Cart-amount'>{item.amount} шт</div> 
                        <button onClick={() => removeFromCart(item.code)}>Удалить</button>
                    </li>))
            }
          </ul>
          <div className='Cart-sum'>
               <div>Итого <span className='Cart-sum__number'>{total} &#8381;</span></div>    
          </div>
         
    </div>
  )
}

export default React.memo(Cart)