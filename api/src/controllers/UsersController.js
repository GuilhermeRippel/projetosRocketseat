const AppError = require("../utils/AppError")

class UsersController {
    create(req, res){
        const {name, email, password} = req.body

        if(!name){
            throw new AppError("Nome obrigatório")
        }

        res.status(201).json({name, email, password}) 
    }
}
// Um controller por boa prática pode ter no máximo 5 funções/métodos
module.exports = UsersController;