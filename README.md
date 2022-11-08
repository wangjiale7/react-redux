## reduxjs/tookit 和 react-redux 代替 redux 使用

1. configureStore 配置 reducer

```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counterSlice'
import loginReducer from './modules/loginSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: loginReducer,
  },
})
```

2. 创建 reducer

```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 自动生成 action type  counter/increment
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    sub: (state, Action) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, sub } =
  counterSlice.actions

//异步action
export const subAsync = (payload) => {
  return async (dispatch, getState) => {
    setTimeout(() => {
      dispatch(sub())
    }, 1000)
  }
}
export default counterSlice.reducer
```

3. 组件导入使用 ,引入 react-redux 里的 useSelector,useDispatch

```js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, subAsync } from '../store/modules/counterSlice'

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
```
