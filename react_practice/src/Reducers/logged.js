const initialLogged = {
  isLogged: false,
}

const loggedReducer = (state = initialLogged, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {...state, isLogged: !state.isLogged};
    default:
      return state;
  }
}

export default loggedReducer;