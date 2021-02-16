const initialCounter = {
  count: 0,
}

const counterReducer = (state = initialCounter, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + action.payload}
    case 'DECREMENT':
      return {...state, count: state.count - action.payload}
    default:
      return state;
  }
}

export default counterReducer;