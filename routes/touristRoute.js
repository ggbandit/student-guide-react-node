const controller = require('../controllers/touristController')

module.exports = app => {
    app.get('/tourists', controller.findAll)
    app.get('/tourist/:id', controller.findById)
    app.post('/tourists', controller.create)
    app.put('/tourist/:id', controller.update)
    app.delete('/tourist/:id', controller.destroy)
}
