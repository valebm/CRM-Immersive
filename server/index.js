require('dotenv').config()
var cors = require('cors')

const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const DB_QUERY_STRING = process.env.DB
  || 'mongodb://localhost:27017/CRM'

const companyRoutes = require('./routes/companies')
const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.set('port', process.env.PORT || 8081)

mongoose.connect(DB_QUERY_STRING)

app.get('/', (req, res) => {
  res.send('TODO API HOME PAGE 💩')
})

app.use('/companies', companyRoutes)

// app.get('/about', (req, res) => {
//   res.send('ABOUT 💩')
// })

app.listen(app.get('port'), err => {
  if (err) return console.log(`something bad happened 💩 ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})



