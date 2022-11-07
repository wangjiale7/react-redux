import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  counterDecrementedAction,
  counterIncrementedAction,
} from '../../store/actions'
import './index.css'

export class ComA extends Component {
  state = {
    inputValue: 0,
  }
  incremented = () => {
    this.props.incremented(this.state.inputValue)
  }
  decremented = () => {
    this.props.decremented(this.state.inputValue)
  }
  handleChange = (e) => {
    this.setState({
      inputValue: Number(e.target.value),
    })
  }
  render() {
    return (
      <>
        <input
          type="number"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <h2>ComA组件</h2>
        <button onClick={this.incremented}>+</button>
        <button onClick={this.decremented}>-</button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incremented: (num) => {
      setTimeout(() => {
        dispatch(counterDecrementedAction(num))
      }, 1000)
    },
    decremented: (num) => {
      dispatch(counterIncrementedAction(num))
    },
  }
}
export default connect(null, mapDispatchToProps)(ComA)
