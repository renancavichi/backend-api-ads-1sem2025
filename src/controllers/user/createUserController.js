import { create, userValidator } from "../../models/userModel.js"

export default async function createUserController(req, res, next) {
    try{
        const user = req.body
        const {success, error, data: userValidated} = userValidator(user, {id: true})
        if(!success){
            return res.status(400).json({
                message: 'Erro ao cadastrar usuário, verifique os dados!',
                errors: error.flatten().fieldErrors
            })
        }
        const result = await create(userValidated)
        return res.json({
            message: "Usário criado com sucesso!",
            user: result
        })
    }catch(error){
        if(error?.code === 'P2002' && error?.meta?.target === 'email'){
            return res.status(400).json({
                message: 'Erro ao cadastrar usuário, verifique os dados!',
                errors: {email: ['Email já cadastrado!']}
            })
        }
        next(error)
    }
}