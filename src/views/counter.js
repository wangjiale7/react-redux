import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  subAsync,
} from '../store/modules/counterSlice'

export function Counter() {
  const count = useSelector((state) => {
    return state.counter.value
  })
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(subAsync())
          }}
        >
          subAsync
        </button>
      </div>
    </div>
  )
}
