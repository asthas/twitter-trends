import React from 'react'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from './Home'
import Auth from './Auth'

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
    </div>
  </Router>
)

export default Routes
