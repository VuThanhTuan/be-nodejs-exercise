import { Router } from 'express'
import productController from './controller'
import upload from '../../utils/multer'

const router = Router()
const uploadMultiImage = upload.array("multi-files", 4);

router.post('', uploadMultiImage,productController.createProduct)
router.get('', productController.findAllProduct)
router.put('/:productId', productController.updateProduct)
router.delete('/:productId', productController.deleteProduct)
router.get(':/categoryId', productController.findAllProductByCategory)

export default router