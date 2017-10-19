const axios = require('axios')

const CONSUMER_KEY = 'cDf3C90DPWKuFftSjgVtkQjbp'
const CONSUMER_SECRET = 'N1xSesuIC5MefjvHXwOd2hICIWzGvb3ArdV15pr0VYGI1fg6oB'

const ENCODED_KEY_AND_SECRET = new Buffer(
  encodeURIComponent(CONSUMER_KEY) +
  ':' +
  encodeURIComponent(CONSUMER_SECRET)
).toString('base64')

let client = null

const getBearerToken = () => {
  return axios.request({
    method: 'POST',
    url: 'https://api.twitter.com/oauth2/token',
    headers: {
      'Authorization': 'Basic ' + ENCODED_KEY_AND_SECRET,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    data: 'grant_type=client_credentials'
  })
  .then(res => res.data.access_token)
  .catch(err => {
    console.log(err.response.data);
    throw err;
  })
}

const api = {
  init: () => {
    return getBearerToken()
      .then(bearer_token => {
        client = axios.create({
          baseURL: 'https://api.twitter.com/1.1/',
          headers: {
            'Authorization': 'Bearer ' + bearer_token
          }
        })
      })
  },

  tweets: (screen_name) => client.request({
      method: 'GET',
      url: '/statuses/user_timeline.json',
      params: { screen_name, include_rts: 0, count: 200 },
  }).then(res => res.data)
  .catch(err => {
    console.log(err.response.data)
    throw err
  }),
}

module.exports = api
