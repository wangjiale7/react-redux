import React from 'react'
import { Counter } from './views/counter'

import Login from './views/login'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Counter></Counter>
        <Login></Login>
      </div>
    )
  }
}

export default App
