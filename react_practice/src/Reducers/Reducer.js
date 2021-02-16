import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './logged';

const AllReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
})

export default AllReducers;