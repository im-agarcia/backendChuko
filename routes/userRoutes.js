const { register } = require('../controllers/usersControllers')
const usersController = require('../controllers/usersControllers')

module.exports = (app)=>{
    app.post('/api/users/create', usersController.register)
}