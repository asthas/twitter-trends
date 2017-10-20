import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import configureStore from '../store'
import ConnectedHome from '../containers/ConnectedHome'

class App extends PureComponent {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          <ConnectedHome />
        </div>
      </Provider>
    )
  }
}

export default App
