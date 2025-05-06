export const errorHandler = (error, req, res, next) => {
    console.error(error)
    if(error?.type === 'entity.parse.failed' && error.message.includes('JSON')){
        return res.status(500).json({
            message: "JSON Inválido, verifique a formatação dos dados!"
        })
    }

    return res.status(500).json({
        message: "Erro inesperado, tente novamente mais tarde."
    })
}