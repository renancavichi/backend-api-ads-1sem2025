export default function getUserController(req, res) {
    const {id} = req.params

    return res.json({
        id: parseInt(id),
        name: "Renan Cavichi",
        email: "renancavichi@gmail.com",
        avatar: "http://github.com/renancavichi.png"
    })
}