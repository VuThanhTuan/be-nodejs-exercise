import cateProductController from './controller'
import  Router from 'express'
import validator from '../validator'

const router = Router()

router.get('', cateProductController.getAllCategory)
router.post('', validator.category.validateStore, cateProductController.createCategory)
router.delete('/:categoryId', cateProductController.deleteCategory)
router.put('/:categoryId', validator.category.validateUpdate, cateProductController.updateCategory)

export default router