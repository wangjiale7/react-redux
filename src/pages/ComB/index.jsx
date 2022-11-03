import React, { Component } from 'react'
import { connect } from 'react-redux'

export class comB extends Component {
  componentDidMount() {}
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
