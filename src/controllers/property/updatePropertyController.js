export default function updatePropertyController(req, res) {
    return res.json({
        message: "Imóvel atualizado com sucesso!",
        property: {
            id: 1,
            tipo: "Venda",
            endereco: "Rua Corenel Aristides, 27",
            quartos: 3,
            propriedade: "Casa"
        }
    })
}