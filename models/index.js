const connection = require('../config/connection');
const Sequelize = require('sequelize');

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

sequelize.sync({ force: false });

let op = Sequelize.Op;
let model = {};

model.Sequelize = Sequelize;
model.sequelize = sequelize;
model.op = op;

model.studentGuides = require('./studentGuideModel')(sequelize, Sequelize);
model.tourists = require('./touristModel')(sequelize, Sequelize);
model.trips = require('./tripModel')(sequelize, Sequelize);
model.touristSelectTrip = require('./touristSelectTripModel')(sequelize, Sequelize);

model.studentGuides.hasMany(model.trips,{foreignKey: 'studentGuideId', sourceKey: 'id'});
model.trips.belongsTo(model.studentGuides,{foreignKey: 'studentGuideId', targetKey: 'id'});

model.tourists.hasMany(model.trips,{foreignKey: 'touristId', sourceKey: 'id'});
model.trips.belongsTo(model.tourists,{foreignKey: 'touristId', targetKey: 'id'});

model.tourists.belongsToMany(model.trips, { through: model.touristSelectTrip, foreignKey: 'touristId', otherKey: 'tripId'});
model.trips.belongsToMany(model.tourists, { through: model.touristSelectTrip, foreignKey: 'tripId', otherKey: 'touristId'});

module.exports = model;