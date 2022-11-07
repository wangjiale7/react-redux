import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../store'

export class comB extends Component {
  componentDidMount() {
    // console.log(store.getState)

    store.subscribe(() => {
      console.log(store.getState())
    })
  }
  render() {
    return (
      <div>
        <h2>ComB组件</h2>
        <div>counterReducer ： {this.props.counterReducer.value}</div>

        <div>userReducer: {JSON.stringify(this.props.userReducer)}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(comB)
