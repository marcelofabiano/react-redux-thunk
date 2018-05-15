import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadData } from './store/actions'

class Info  extends Component {
  componentDidMount() {
    this.props.loadData()
    console.log(this.props)
  }
  render() {
    if (this.props.isFetching)
      return <span>Loading...</span>
    if (this.props.error)
      return <span>Error!</span>
    return <span>Info:</span>
  }
}

const mapStateToProps = (state) => ({ isFetching: state.isFetching, data: state.data })
const mapDispatchToProps = (dispatch) => ({ loadData: () => dispatch(loadData()) })

export default connect(mapStateToProps, mapDispatchToProps)(Info)
