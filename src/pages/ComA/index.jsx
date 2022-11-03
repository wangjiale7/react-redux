import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  counterDecrementedAction,
  counterIncrementedAction,
} from '../../store/actions'
import './index.css'

export class ComA extends Component {
  incremented = () => {
    this.props.incremented()
  }
  decremented = () => {
    this.props.decremented()
  }
  render() {
    return (
      <>
        <h2>ComA组件</h2>
        <button onClick={this.incremented}>+</button>
        <button onClick={this.decremented}>-</button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incremented: () => {
      dispatch(counterDecrementedAction())
    },
    decremented: () => {
      dispatch(counterIncrementedAction())
    },
  }
}
export default connect(null, mapDispatchToProps)(ComA)
