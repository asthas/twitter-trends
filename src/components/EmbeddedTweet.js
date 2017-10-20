import React, { PureComponent } from 'react'

class EmbeddedTweet extends PureComponent {
  emptyDiv = () => {
    while (this.el.hasChildNodes()) {
      this.el.removeChild(this.el.lastChild)
    }
  }

  renderTweet = () => {
    const { tweetId } = this.props
    const { twttr } = window
    if (tweetId) {
      this.emptyDiv()
      twttr.ready(() => twttr.widgets.createTweet(tweetId, this.el))
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
