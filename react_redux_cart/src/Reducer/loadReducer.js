const initialLoad = {
  isLoading: false,
}

const loadReducer = (state = initialLoad, action) => {
  switch(action.type) {
    case 'LOADING':
      return {...state, isLoading: true}
    case 'COMPLETE':
      return {...state, isLoading: false}
    default:
      return state
  }
}

export default loadReducer;