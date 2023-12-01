import React from 'react'
import ButtonModal from '../buttonModal'
import { plural } from '../../utils'
import './style.css'

const CartNav = ({setActive, total, amount}) => {
  console.log('cart-nav');
  return (
    <nav className='Cart-nav'>
        <p>В корзине:&nbsp; </p>
        <p className='Cart-nav_message'><span>{amount ? ` ${amount} ${plural(amount, {
        one: 'товар',
        few: 'товара',
        many: 'товаров'
      })}` : 'пусто'} </span><span>{total?`/ ${total} ₽`:''}</span></p>
        <ButtonModal setActive={setActive}/>
    </nav>
  )
}

export default CartNav