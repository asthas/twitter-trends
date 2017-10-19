const express = require('express')
const api = require('./twitter-api')

const app = express()
const port = 8001

app.get('/', (req, res) => {
  const user = req.query.user
  if (user) {
    api.tweets(user)
      .then(tweets => res.json(tweets))
      .catch(err => {
        console.log(err)
        res.status(400).json(err)
      })
  } else {
    res.status(400).json({
      message: 'user param missing'
    })
  }
})

api.init()
  .then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
