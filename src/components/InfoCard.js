import React, { PureComponent } from 'react'

import '../styles/info-card.css'

class InfoCard extends PureComponent {
  render() {
    return (
      <div className="info-card">
        <div className="content">{this.props.children}</div>
        <div className="message">{this.props.message}</div>
        <div className="icon">
          <i className="material-icons">{this.props.icon}</i>
        </div>
      </div>
    )
  }
}

export default InfoCard
