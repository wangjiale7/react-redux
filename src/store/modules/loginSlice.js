import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userName: null,
  token: null,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      let { payload } = action
      state.userName = payload.userName
      state.token = payload.token
    },
    logout: (state, payload) => {
      state.userName = null
      state.token = null
    },
  },
})

export const { login, logout } = loginSlice.actions

// 异步action
export const fetchLogin = (payload) => {
  return async (dispatch, getState) => {
    const res = {
      userName: payload,
      token: Math.floor(Math.random() * 10000) + 'token',
    }
    setTimeout(() => {
      dispatch(login(res))
    }, 500)
  }
}

export default loginSlice.reducer
