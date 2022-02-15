const userDefaultData = require('../../public/javascript/userList')
const User = require('../loginData')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongoose connected!')
  for (let i = 0; i < userDefaultData.length; i++) {
    User.create({
      firstName: `${userDefaultData[i].firstName}`,
      email: `${userDefaultData[i].email}`,
      password: `${userDefaultData[i].password}`
    })
  }
  console.log('done!')
})