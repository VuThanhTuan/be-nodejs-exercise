import { Router } from 'express'
import typeProductController from './controller'
import validator from '../validator'

const router = Router()

router.post('', validator.typeProduct.validateStore, typeProductController.createType)
router.get('', typeProductController.findAll)
router.delete('/:typeId', typeProductController.deleteTypeProduct)
router.put('/:typeId', typeProductController.updateType)


export default router