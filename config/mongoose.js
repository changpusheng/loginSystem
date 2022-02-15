const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/loginUserAccounts')
const db = mongoose.connection


db.on('error', () => {
  console.log('mongoose error!')
})

db.once('open', () => {
  console.log('mongoose connected!')
})

module.exports = db