const express = require('express')

const app = express()

app.listen('3000')

//middleware
app.use()

app.route('/').post( (req, res) =>  console.log(req.body))