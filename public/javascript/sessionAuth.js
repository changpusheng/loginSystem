function auth(req, res, next) {
  if (req.session.user) {
    console.log('驗證成功')
    next();
  } else {
    console.log('驗證失敗')
    return res.redirect('/')
  }
}

module.exports = auth