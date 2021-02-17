import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearCart, removeItem } from '../Action/cartAction';

const CartContainer = () => {
  const cartList = useSelector(state => state.cart.list);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  if (cartList.length === 0) {
    return (
      <div id="container">
        <h1>Your Bag</h1>
        <h3 className="empty-msg">is currently empty..!</h3>
      </div>
    )
  }

  const removeFn = (id) => {
    dispatch(removeItem(id));
  }

  return (
    <div id="container">
      <h1>Your Bag</h1>
      <div className="cart">
        {cartList.map((item) => {
          return <CartItem key={item.id} {...item} removeFn={removeFn} />
        })}
      </div>
      <div className="total-container">
        <p>Total</p>
        <p>$<span class="total-calculator">{total}</span></p>
      </div>
      <button className="clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  )
}

export default CartContainer;