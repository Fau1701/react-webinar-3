import React, {useState} from "react";
import PropTypes from "prop-types";
import {plural} from "../../utils";
import './style.css';

function Item(props) {

  const callbacks = {
    onClick: () => {
      props.onSelect(props.item.code);
      // if (!props.item.selected) {
      //   setCount(count + 1);
      // }
    },
    // onDelete: (e) => {
    //   e.stopPropagation();
    //   props.onDelete(props.item.code);

    // },
  }

  return (
    <div className={'Item' + (props.item.selected ? ' Item_selected' : '')}
         onClick={callbacks.onClick}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title} 
        {/* {count ? ` | Выделяли ${count} ${plural(count, {
        one: 'раз',
        few: 'раза',
        many: 'раз'
      })}` : ''} */}
      </div>
      <div className='Item-price'>{props.item.price} &#8381;</div>
      <div className='Item-actions'>
        <button onClick={() => props.setItemToCart(props.item.title)}>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired,
  // onDelete: PropTypes.func,
  onSelect: PropTypes.func
};

Item.defaultProps = {
  // onDelete: () => {
  // },
  onSelect: () => {
  },
}

export default React.memo(Item);
