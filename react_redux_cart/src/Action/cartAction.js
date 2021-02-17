export const fetchList = (list) => {
  return {
    type: 'FETCHCART',
    cartList: list,
  }
}

export const calculate = () => {
  return {
    type: 'CALCULATE',
  }
}

export const increaseItem = (id) => {
  return {
    type: 'INCREASE',
    id,
  }
}

export const decreaseItem = (id) => {
  return {
    type: 'DECREASE',
    id,
  }
}

export const removeItem = (id) => {
  return {
    type: 'REMOVE',
    id,
  }
}

export const clearCart = () => {
  return {
    type: 'CLEAR',
  }
}