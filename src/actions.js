import axios from 'axios'

export const UPDATE_USERNAME = 'UPDATE_USERNAME'

export const GET_TWEETS = 'GET_TWEETS'

export const GET_TWEETS_ERROR = 'GET_TWEETS_ERROR'

export const GET_TWEETS_SUCCESS = 'GET_TWEETS_SUCCESS'

export const updateUsername = username => ({
  type: UPDATE_USERNAME,
  username
})

export const getTweets = () => ({
  type: GET_TWEETS
})

export const getTweetsError = err => ({
  type: GET_TWEETS_ERROR,
  err
})

export const getTweetsSuccess = tweets => ({
  type: GET_TWEETS_SUCCESS,
  tweets
})

export const fetchTweets = username => {
  return dispatch => {
    dispatch(updateUsername(username))
    dispatch(getTweets())
    return axios({
      method: 'get',
      url: 'https://tweets-api.astha.me/',
      params: {
        user: username
      }
    })
      .then(response => dispatch(getTweetsSuccess(response.data)))
      .catch(err => dispatch(getTweetsError(err.message)))
  }
}
