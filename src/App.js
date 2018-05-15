import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { ip } from './store/reducer'
import Info from './Info'

const store = createStore( ip, applyMiddleware(thunk, logger) )

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Info />
      </Provider>
    )
  }
}

export default App
