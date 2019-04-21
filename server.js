const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))


app.use('/admin', adminRoutes)
app.use(shopRoutes)


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'))
})

app.listen(4000, () => {
  console.log('localhost/4000');
})