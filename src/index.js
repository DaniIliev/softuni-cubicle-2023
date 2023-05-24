const express = require('express')
const setupViewEngine = require('./config/index')
const routes = require('./routes')

const app = express()
const port = 3000 
setupViewEngine(app)

app.use(express.static('src/public'))
app.use(express.urlencoded({extended: false}))
app.use(routes)


app.listen(port, ()=> console.log(`Server is listen on port ${port}...`))