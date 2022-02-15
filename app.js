const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const port = 3000
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/loginUserAccounts')
const db = mongoose.connection
const User = require('./models/loginData')


app.engine('handlebars', engine({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

db.on('error', () => {
  console.log('mongoose error!')
})

db.once('open', () => {
  console.log('mongoose connected!')
})


app.get('/', (req, res) => {
  res.render('home')
})

app.post('/', (req, res) => {
  const { userAccount, userPassword } = req.body
  User.findOne({ $and: [{ email: userAccount }, { password: userPassword }] }).lean().then(item => {
    if (!item) {
      let alertMsg = "帳號或密碼錯誤"
      res.render('home', { alertMsg, userAccount })
    } else {
      res.render('show', { item })
    }
  }).catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`This sever is running on localhost:${port}`)
})