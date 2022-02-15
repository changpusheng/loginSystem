const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const port = 3000
const router = require('./routes')
require('./config/mongoose')

app.engine('handlebars', engine({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(router)


app.listen(port, () => {
  console.log(`This sever is running on localhost:${port}`)
})