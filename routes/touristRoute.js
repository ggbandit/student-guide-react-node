const controller = require('../controllers/touristController')

module.exports = app => {
    app.get('/tourists', controller.index)
    app.get('/tourist/:id', controller.find)
    app.post('/tourists', controller.create)
    app.put('/tourist/:id', controller.update)
    app.delete('/tourist/:id', controller.destroy)
}
