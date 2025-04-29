import { create, propertyValidator } from "../../models/propertyModel.js"

export default async function createPropertyController(req, res) {
    const property = req.body

    const {success, error, data: propertyValidated} = propertyValidator(property, {id: true})

    if(!success){
        return res.status(400).json({
            message: 'Erro ao cadastrar propriedade, verifique os dados!',
            errors: error.flatten().fieldErrors
        })
    }

    const result = await create(propertyValidated)

    return res.json({
        message: "Imóvel criado com sucesso!",
        property: result
    })
}