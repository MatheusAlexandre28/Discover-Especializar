const express = require('express')

const app = express()

app.listen('3000')

app.route('/').post( (req, res) => req.body )