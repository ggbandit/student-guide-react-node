const connection = require('../config/connection')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(connection.DATABASE, connection.USERNAME, connection.PASSWORD, {
    host: connection.HOST,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    },
    logging: false,
    operatorsAliases: false
})

sequelize.sync({ force: false })

let op = Sequelize.Op
let model = {}

model.Sequelize = Sequelize
model.sequelize = sequelize
model.op = op

model.studentGuides = require('./studentGuideModel')(sequelize, Sequelize)
model.tourists = require('./touristModel')(sequelize, Sequelize)
model.trips = require('./tripModel')(sequelize, Sequelize)

module.exports = model