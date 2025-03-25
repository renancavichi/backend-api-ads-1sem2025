import { update } from "../../models/propertyModel.js"

export default async function updatePropertyController(req, res) {
    const {id} = req.params
    const property = req.body

    const result = await update(+id, property)

    return res.json({
        message: "Imóvel atualizado com sucesso!",
        property: result
    })
}