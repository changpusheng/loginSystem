const mongoose = require('mongoose')
const userDefaultData = require('../../public/javascript/userList')
const User = require('../loginData')
mongoose.connect('mongodb://localhost/loginUserAccounts')
const db = mongoose.connection
db.on('error', () => {
  console.log('mongoose error!')
})
db.once('open', () => {
  console.log('mongoose connected!')
   for (let i = 0; i < userDefaultData.length ; i++ ){
  User.create({
    firstName: `${userDefaultData[i].firstName}`,
    email: `${userDefaultData[i].email}`,
    password: `${userDefaultData[i].password}`
  })
   }
  console.log('done!')
})