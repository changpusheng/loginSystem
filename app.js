const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const port = 3000
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/loginUserAccounts')
const db = mongoose.connection
const User = require('./models/loginData')

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

db.on('error', () => {
  console.log('mongoose error!')
})

db.once('open', () => {
  console.log('mongoose connected!')
})


app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`This sever is running on localhost:${port}`)
})