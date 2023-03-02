const express = require('express')

const app = express()

app.listen('3000')

app.use(express.json())

let author = "Matheus Alexandre"

app.route('/').put( (req, res) => {
  author = req.body
  res.send(author)
} )
