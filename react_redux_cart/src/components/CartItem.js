import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../Action/cartAction';

const CartItem = ({ id, img, title, price, amount, removeFn }) => {
  const dispatch = useDispatch();
  
  return (
    <article className="item">
      <div className="item-left">
        <img src={img} alt={title} />
        <div className="item-context">
          <p className="item-title">{title}</p>
          <p className="item-price">${price}</p>
          <button className="remove-btn" onClick={() => removeFn(id)}>remove</button>
        </div>
      </div>
      <div className="item-right">
        <button className='amount-btn' onClick={() => dispatch(increaseItem(id))}>▲</button>
        <p className="item-amount">{amount}</p>
        <button className='amount-btn' onClick={() => dispatch(decreaseItem(id))}>▼</button>
      </div>
    </article>
  )
};

export default CartItem;