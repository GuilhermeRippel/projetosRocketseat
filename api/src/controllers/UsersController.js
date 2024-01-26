const AppError = require("../utils/AppError")

class UsersController{
    // No máximo 5 funções, não sendo obrigatório todas
    //Index = GET para listar vários registros
    //Show = GET para exibir um registro específico
    // Create = POST para criar um registro
    // Update = PUT para atualizar um registro
    // Delete = DELETE para remover um registro

    create(request, response){
        const {name, email, password} = request.body

        if(!name){
            throw new AppError("O nome é obrigatório!");
        }

        response.json({ name, email, password })
    }
};

module.exports = UsersController;