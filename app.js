const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const routes = require('./routes')

routes.studentGuideRoute(app)
routes.touristRoute(app)
routes.tripRoute(app)
routes.AuthenRoute(app)
routes.touristTripRoute(app)

module.exports = app