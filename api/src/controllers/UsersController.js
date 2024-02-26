const AppError = require("../utils/AppError")

const sqliteConnection = require("../database/sqlite")

class UsersController {
    async create(req, res){
        const {name, email, password} = req.body

        const database = await sqliteConnection()
        const checkUserExist = await database.get('SELECT *FROM users WHERE email = (?)', [email])

        if(checkUserExist){
            throw new AppError("Este e-mail já está em uso")
        }
        
        await database.run("INSERT INTO users (name, email, password)VALUES (?, ?, ?)", [ name, email, password ]);

        return res.status(201).json()
    }
}
// Um controller por boa prática pode ter no máximo 5 funções/métodos
module.exports = UsersController;