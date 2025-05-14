import express from 'express'
import getUserController from '../controllers/user/getUserController.js'

const router = express.Router()

router.get('/:id', getUserController)
//...continua

export default router