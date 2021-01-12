import cateProductController from './controller'
import  Router from 'express'

const router = Router()

router.get('', cateProductController.getAllCategory)
router.post('', cateProductController.createCategory)
router.delete('/:categoryId', cateProductController.deleteCategory)
router.put('/:categoryId', cateProductController.updateCategory)

export default router