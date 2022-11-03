import { counterDecrementedAction, counterIncrementedAction } from '../actions'

let initState = { value: 0 }
const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case counterDecrementedAction().type:
      return { value: state.value + 1 }
    case counterIncrementedAction().type:
      return { value: state.value - 1 }
    default:
      return state
  }
}
export default counterReducer
