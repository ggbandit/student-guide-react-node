const controller = require('../controllers/touristSelectTripController')

module.exports = app => {
    app.get('/touristSelectTrips', controller.findAll)
    app.get('/touristSelectTrip/:id', controller.findById)
    app.post('/touristSelectTrips', controller.create)
    app.put('/touristSelectTrip/:id', controller.update)
    app.delete('/touristSelectTrip/:id', controller.destroy)
}