import React from 'react'
import '../styles/home.css'

import InfoCard from './InfoCard'

const Home = () => (
  <div>
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter twitter username"
        className="username-form-control"
      />
    </div>
    <div className="info-container">
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </div>
  </div>
)

export default Home
