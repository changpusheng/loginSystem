function auth(req, res, next) {
  if (req.session.user) {
    console.log('authenticated')
    next();
  } else {
    console.log('not authenticated')
    return res.redirect('/')
  }
}

module.exports = auth