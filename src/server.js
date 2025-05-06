//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import propertyRouter from './routers/propertyRouter.js'
import cors from 'cors'
import { logger } from './middlewares/logger.js'
import { errorHandler } from './middlewares/errorsHandler.js'
import { notFoundController } from './controllers/notFoundController.js'
import { welcomeController } from './controllers/welcomeController.js'

const app = express()
const port = 3000

app.use(logger)
app.use(cors())
app.use(express.json())

app.get('/', welcomeController)
app.use('/user', userRouter)
app.use('/property', propertyRouter)

app.use('*', notFoundController)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})