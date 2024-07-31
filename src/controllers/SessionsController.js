const knex = require("../database/knex");
<<<<<<< HEAD
const {compare} = require("bcryptjs");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");
const {sign} = require("jsonwebtoken"); 


class SessionsController{
    async create(req,res){
        const {email, password} = req.body
        const user = await knex("users").where({email}).first();
        
        if(!user){
            throw new AppError("Email e/ou senha inválida", 401);
        }
        
        const passwordMath = await compare(password, user.password)

        if(!passwordMath){
            throw new AppError("Email e/ou senha inválida", 401);
        }

        const { secret, expiresIn} = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        } )

        return res.json({user, token})
    }
}

module.exports = SessionsController
=======
const AppError = require("../utils/AppError");
const {compare} = require("bcryptjs");
const authConfig = require("../configs/auth");
const {sign} = require("jsonwebtoken");

class SessionsController{
    async create(req,res){
        const {email, password} = req.body;
        const user = await knex("users").where({email}).first();

        if(!user){
            throw new AppError("Email e/ou senha incorreta", 401);
        }
        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched){
            throw new AppError("E-mail e/ou senha incorreta", 401);
        }

        const { secret,expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })
        return res.json({user});

    }

}

module.exports = SessionsController;
>>>>>>> 650ded0185161994fe0fa012591eb4c38d4323a5
