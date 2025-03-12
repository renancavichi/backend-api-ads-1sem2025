import express from 'express'
import getPropertyController from '../controllers/property/getPropertyController.js'
import createPropertyController from '../controllers/property/createPropertyController.js'
import updatePropertyController from '../controllers/property/updatePropertyController.js'
import deletePropertyController from '../controllers/property/deletePropertyController.js'
import changeTypePropertyController from '../controllers/property/changeTypePropertyController.js'

const router = express.Router()

router.get('/', getPropertyController)
router.post('/', createPropertyController)
router.put('/', updatePropertyController)
router.delete('/:id', deletePropertyController)
router.patch('/type', changeTypePropertyController)

export default router