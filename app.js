const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')

require('./config/mongoose')

const routes = require('./routes')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))


app.use(routes)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})