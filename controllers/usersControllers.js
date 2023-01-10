const User = require('../models/user')

module.exports = {

    register(req, res){
        const user = req.body
        User.create(user, (err,data)=>{
            if(err){
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error en la movida, para crear al usuario',
                    error: err
                })
            }

            return res.status(201).json({
                success: true,
                message: 'Vamohh que se registró!',
                data: data // el id del nuevo usuario que se registro
            })
        })
    }
}