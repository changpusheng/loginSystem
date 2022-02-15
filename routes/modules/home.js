const express = require('express')
const router = express.Router()
const User = require('../../models/loginData')

router.get('/', (req, res) => {
  res.render('home')
})

router.post('/', (req, res) => {
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

module.exports = router