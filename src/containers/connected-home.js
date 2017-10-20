import { connect } from 'react-redux'
import Home from '../components/Home'

import fetchTweets from '../actions'

const mapStateToProps = state => {
  return {
    username: state.app.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoginSubmit: values => {
      dispatch(sendLoginRequest(values))
    }
  }
}

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login)

export default ConnectedLogin
