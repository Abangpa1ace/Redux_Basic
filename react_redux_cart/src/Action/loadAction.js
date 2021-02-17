export const loadStart = () => {
  return {
    type: 'LOADING',
  }
}

export const loadEnd = () => {
  return {
    type: 'COMPLETE',
  }
}