export const counterIncrementedAction = (num) => {
  return { type: 'counter/incremented', num }
}

export const counterDecrementedAction = (num) => {
  return { type: 'counter/decremented', num }
}
