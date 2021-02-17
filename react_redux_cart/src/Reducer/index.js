import { combineReducers } from 'redux';
import loadReducer from './loadReducer';
import cartReducer from './cartReducer';

const RootReducer = combineReducers({
  loading: loadReducer,
  cart: cartReducer,
})

export default RootReducer;