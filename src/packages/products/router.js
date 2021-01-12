import { Router } from 'express'
import productController from './controller'
import upload from '../../utils/multer'
import validator from '../validator'

const router = Router()
const uploadMultiImage = upload.array("multi-files", 4);

router.post('', validator.product.validateStore, uploadMultiImage, productController.createProduct)
router.get('', productController.findAllProduct)
router.put('/:productId', validator.product.validateUpdate, productController.updateProduct)
router.delete('/:productId', productController.deleteProduct)
router.get(':/categoryId', productController.findAllProductByCategory)

export default router