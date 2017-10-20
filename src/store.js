import thunkMiddleware from 'redux-thunk' 
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ) 
)

export default configureStore

