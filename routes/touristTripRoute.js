const controller = require('../controllers/touristTripController')

module.exports = app => {
    app.get('/touristTrips', controller.findAll)
    app.get('/touristTrip/:id', controller.findById)
    app.post('/touristTrips', controller.create)
    app.put('/touristTrip/:id', controller.update)
    app.delete('/touristTrip/:id', controller.destroy)
}