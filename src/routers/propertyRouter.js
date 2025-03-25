import express from 'express'
import getPropertyController from '../controllers/property/getPropertyController.js'
import createPropertyController from '../controllers/property/createPropertyController.js'
import updatePropertyController from '../controllers/property/updatePropertyController.js'
import deletePropertyController from '../controllers/property/deletePropertyController.js'
import changeTypePropertyController from '../controllers/property/changeTypePropertyController.js'

const router = express.Router()

router.get('/list', getPropertyController)
router.get('/:id', ()=>{}) // get de uma unica propriedade por id
router.post('/', createPropertyController)
router.put('/:id', updatePropertyController)
router.delete('/:id', deletePropertyController)
router.patch('/type', changeTypePropertyController)

export default router