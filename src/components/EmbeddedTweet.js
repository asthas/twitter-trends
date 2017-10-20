import React, { PureComponent } from 'react'

class EmbeddedTweet extends PureComponent {
  renderTweet = () => {
    const { tweetId } = this.props
    if (tweetId) {
      console.log('Rendering tweet')
      window.twttr.widgets.createTweet(
        '914755038697934800' || this.props.tweetId,
        this.el,
        {
          theme: 'dark'
        }
      )
    }
  }

  componentDidMount() {
    this.renderTweet()
  }

  componentDidUpdate() {
    this.renderTweet()
  }

  render() {
    return <div ref={el => (this.el = el)} />
  }
}

export default EmbeddedTweet
