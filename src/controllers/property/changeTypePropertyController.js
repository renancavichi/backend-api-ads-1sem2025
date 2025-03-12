export default function changeTypePropertyController(req, res) {
    return res.json({
        message: "Imóvel id 2 atualizado com sucesso!",
        property: {
            id: 1,
            tipo: "Aluguel"
        }
    })
}