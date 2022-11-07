import { counterDecrementedAction, counterIncrementedAction } from '../actions'

let initState = { value: 0 }
const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case counterDecrementedAction().type:
      return { value: state.value + action.num }
    case counterIncrementedAction().type:
      return { value: state.value - action.num }
    default:
      return state
  }
}
export default counterReducer
