import { useSelector, useDispatch } from 'react-redux'
import { fetchLogin } from '../store/modules/loginSlice'

export default function Login() {
  const login = useSelector((state) => {
    return state.user
  })

  const dispatch = useDispatch()
  return (
    <>
      <div>
        <h1>userName: {login.userName}</h1>
        <h1>token: {login.token}</h1>
        <form>
          <label htmlFor="name">
            名字:
            <input type="text" id="name" />
          </label>
          {/* <input type="submit" value="Submit" /> */}
          <button
            type="button"
            onClick={() => {
              const input = document.querySelector('#name')
              dispatch(fetchLogin(input.value))
              // dispatch(fetchLogin())
            }}
          >
            登陆
          </button>
        </form>
      </div>
    </>
  )
}
