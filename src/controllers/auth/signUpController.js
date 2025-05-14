import { create, userValidator } from "../../models/userModel.js"
import bcrypt from 'bcrypt'

export default async function signUpController(req, res, next) {
    try{
        const user = req.body
        const {success, error, data: userValidated} = userValidator(user, {id: true})
        if(!success){
            return res.status(400).json({
                message: 'Erro ao cadastrar usuário, verifique os dados!',
                errors: error.flatten().fieldErrors
            })
        }

        userValidated.pass = bcrypt.hashSync(userValidated.pass, 10)

        const result = await create(userValidated)
        return res.json({
            message: "Usuário criado com sucesso!",
            user: result
        })
    }catch(error){
        if(error?.code === 'P2002' && error?.meta?.target === 'email'){
            return res.status(400).json({
                message: 'Erro ao cadastrar usuário',
                errors: {
                    email: ['Um usuário já está cadastrado com esse email!']
                }
            })
        }

        next(error)
    }
}