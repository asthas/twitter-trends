import {
  UPDATE_USERNAME,
  GET_TWEETS,
  GET_TWEETS_ERROR,
  GET_TWEETS_SUCCESS
} from './actions'
import { combineReducers } from 'redux'

const app = (
  state = {
    isFetching: false,
    username: '',
    tweets: [],
    err: null
  },
  action
) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.username
      }
    case GET_TWEETS:
      return {
        ...state,
        isFetching: true
      }
    case GET_TWEETS_ERROR:
      return {
        ...state,
        isFetching: false,
        err: action.err
      }
    case GET_TWEETS_SUCCESS:
      return {
        ...state,
        err: null,
        isFetching: false,
        tweets: action.tweets
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  app
})

export default reducers
