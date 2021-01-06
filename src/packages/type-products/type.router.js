import { Router } from 'express'
import typeProductController from './type.controller'

const router = Router()

router.post('', typeProductController.createType)
router.get('', typeProductController.findAll)
router.delete('/:typeId', typeProductController.deleteTypeProduct)
router.put('/:typeId', typeProductController.updateType)
router.get('/:typeId', typeProductController.getTypeProductByTypeId)


export default router