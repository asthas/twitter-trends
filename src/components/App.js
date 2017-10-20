import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import configureStore from '../store'
import Home from './Home'

class App extends PureComponent {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    )
  }
}

export default App
