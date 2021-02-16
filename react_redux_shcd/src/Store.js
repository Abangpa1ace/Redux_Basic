import { createStore } from 'redux';

const reducer = (state, action) => {
  if (!state) {
    return {
      number: 0,
    }
  }
  if (action.type === 'INCREMENT') {
    return {...state, number: state.number + action.size}
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;