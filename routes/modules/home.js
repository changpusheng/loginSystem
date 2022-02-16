const express = require('express')
const router = express.Router()
const User = require('../../models/loginData')
const sessionAuth = require('../../public/javascript/sessionAuth')

router.get('/', (req, res) => {
  console.log(req.session)
  console.log(req.sessionID)
  console.log(req.session.user)
  if (req.session.user) {
    return res.redirect('/welcome')
  }
  res.render('home')
})

router.get('/welcome', sessionAuth, (req, res) => {
  const userName = req.session.user
  res.render('show', { item: userName })
})

router.post('/login', (req, res) => {
  const { userAccount, userPassword } = req.body
  User.findOne({ $and: [{ email: userAccount }, { password: userPassword }] }).lean().then(item => {
    if (!item) {
      const alertMsg = "帳號或密碼錯誤"
      return res.render('home', { alertMsg, userAccount })
    } else {
      req.session.user = item.firstName
      return res.redirect('/welcome')
    }
  }).catch(error => console.log(error))
})

router.get('/logout', sessionAuth, (req, res) => {
  req.session.destroy(() => {
    console.log('session destroyed')
  })
  res.render('home')
})

module.exports = router