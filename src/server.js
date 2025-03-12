//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import propertyRouter from './routers/propertyRouter.js'

const app = express()
const port = 3000

// Middleware
app.use(express.json()) // faz o parse do json e transforma em objeto no req.body

app.use('/user', userRouter)
app.use('/property', propertyRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})