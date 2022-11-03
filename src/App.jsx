import React from 'react'
import ComA from './pages/ComA'
import ComB from './pages/ComB'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ComA></ComA>
        <ComB></ComB>
      </div>
    )
  }
}

export default App
