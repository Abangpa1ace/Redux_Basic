import { DATA } from '../data';

const initialCart = {
  list: DATA,
  amount: 0,
  total: 0,
}

const cartReducer = (state = initialCart, action) => {
  switch(action.type) {
    case 'FETCHCART':
      return {...state, list: action.cartList}
    case 'INCREASE':
      const incCart = state.list.map(item => item.id === action.id ? {...item, amount: item.amount + 1} : item);
      return {...state, list: incCart};
    
    case 'DECREASE':
      const decCart = state.list.map(item => item.id === action.id ? {...item, amount: item.amount - 1} : item);
      return {...state, list: decCart};
    
    case 'REMOVE':
      const filteredCart = state.list.filter(item => item.id !== action.id)
      return {...state, list: filteredCart}
    
    case 'CLEAR':
      return {...state, list: []}
    
    case 'CALCULATE':
      let { total, amount } = state.list.reduce(
        (acc, cur) => {
          const { amount, price } = cur;
          acc.amount += amount;
          acc.total += (amount * price);
          return acc;
        }, { amount: 0, total: 0 }
      )
      total = parseFloat(total.toFixed(2))
      return {...state, total, amount}
    
    default:
      return state;
  }
}

export default cartReducer;