import React from 'react'
import '../styles/home.css'

import InfoCard from './InfoCard'

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
        <div>
          <h1>{mostLoved && mostLoved.id}</h1>
        </div>
      </InfoCard>
      <InfoCard message="Most retweeted tweet" icon="sync">
        <div>
          <h1>{mostRetweeted && mostRetweeted.id}</h1>
        </div>
      </InfoCard>
    </div>
  </div>
)

export default Home
