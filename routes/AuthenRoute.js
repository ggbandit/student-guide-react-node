const Controller = require('../controllers/AuthenController');

module.exports = app => {
    app.post('/studentGuide/login', Controller.studentGuideAuthentication);
    app.post('/studentGuide/register', Controller.studentGuideRegister);
    app.post('/tourist/login', Controller.touristAuthentication);
    app.post('/tourist/register', Controller.touristRegister);
}