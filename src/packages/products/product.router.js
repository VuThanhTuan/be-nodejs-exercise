import { Router } from 'express'
import productController from './product.controller'
import upload from '../../utils/multer'

const router = Router()
const uploadImage = upload.single('images')
const uploadMultiImage = upload.array("multi-files", 4);

router.post('', uploadMultiImage,productController.createProduct)
router.get('', productController.findAllProduct)

export default router