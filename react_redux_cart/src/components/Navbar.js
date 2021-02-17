import React from 'react';
import { GiShoppingBag } from 'react-icons/gi'
import { useSelector } from 'react-redux';


const Navbar = () => {
  const amount = useSelector(state => state.cart.amount);

  return (
    <nav id="navbar">
      <div className="nav-content">
        <h1>Context To Redux</h1>
        <span className="bag-icon">
          <GiShoppingBag />
          <div className="bag-counter">
            {amount}
          </div>
        </span>
      </div>
    </nav>
  )
}

export default Navbar;