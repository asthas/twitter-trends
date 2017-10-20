import React from 'react'
import '../styles/home.css'

import InfoCard from './InfoCard'
import EmbeddedTweet from './EmbeddedTweet'

const Home = ({
  username,
  onUsernameChange,
  tweetCount,
  mostLoved,
  mostRetweeted
}) => (
  <div>
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter twitter username"
        className="username-form-control"
        onInput={e => onUsernameChange(e.target.value)}
        value={username}
      />
    </div>
    <div className="info-container">
      <InfoCard message="Total numbers of tweets" icon="trending_up">
        <div>
          <h1>{tweetCount ? tweetCount : ''}</h1>
        </div>
      </InfoCard>
      <InfoCard message="Most loved tweet" icon="favorite">
        <EmbeddedTweet tweetId={mostLoved && mostLoved.id} />
      </InfoCard>
      <InfoCard message="Most retweeted tweet" icon="sync">
        <EmbeddedTweet tweetId={mostRetweeted && mostRetweeted.id} />
      </InfoCard>
    </div>
  </div>
)

export default Home
