import { remove, propertyValidator } from "../../models/propertyModel.js"

export default async function deletePropertyController(req, res, next) {
    try{
        const {id} = req.params
        const user = {
            id: +id
        }
        const {success, error, data} = propertyValidator(user, {type: true, adress: true, rooms: true, property: true})
        if(!success){
            return res.status(400).json({
                message: 'Erro ao deletar propriedade, verifique os dados!',
                errors: error.flatten().fieldErrors
            })
        }
        const result = await remove(data.id)
        return res.json({
            message: `Imóvel ID ${id} excluido com sucesso!`,
            property: result
        })
    } catch(error){
        if(error?.code === 'P2025' && error?.meta?.cause.includes('Record to delete does not exist')){
            return res.status(404).json({
                message: 'Propriedade não encontrada!',
            })
        }
        next(error)
    }
}