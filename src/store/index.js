import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counterSlice'
import loginReducer from './modules/loginSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: loginReducer,
  },
})
