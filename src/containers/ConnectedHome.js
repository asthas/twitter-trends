import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Home from '../components/Home'
import { fetchTweets } from '../actions'
import { most } from '../utils'

const mapStateToProps = state => {
  return {
    username: state.app.username,
    tweetCount: state.app.tweets.length,
    mostLoved: most(state.app.tweets, 'favorite_count'),
    mostRetweeted: most(state.app.tweets, 'retweet_count')
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onUsernameChange: fetchTweets
    },
    dispatch
  )

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)

export default ConnectedHome
