const controller = require('../controllers/tripController')

module.exports = app => {
    app.get('/trips', controller.index)
    app.get('/trip/:id', controller.find)
    app.post('/trips', controller.create)
    app.put('/trip/:id', controller.update)
    app.delete('/trip/:id', controller.destroy)
}