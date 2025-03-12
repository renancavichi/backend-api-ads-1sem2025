export default function createUserController(req, res) {
    return res.json({
        message: "Usário criado com sucesso!",
        user: {
            name: "João",
            email: "joao@gmail.com",
            avatar: "http://github.com/joao.png"
        }
    })
}