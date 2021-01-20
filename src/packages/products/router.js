import { Router } from 'express'
import productController from './controller'
import upload from '../../utils/multer'
import validator from '../validator'

const router = Router()
function makeMulterUploadMiddleware(multerUploadFunction) {
  return (req, res, next) =>
      multerUploadFunction(req, res, err => {
          // handle Multer error
          if (err && err.name && err.name === 'MulterError') {
              return res.status(500).send({
                  error: err.name,
                  message: `File upload error: ${err.message}`,
              });
          }
          // handle other errors
          if (err) {
              return res.status(500).send({
                  error: 'FILE UPLOAD ERROR',
                  message: `Something wrong ocurred when trying to upload the file`,
              });
          }

          next();
      });
}
const uploadSingleImage = makeMulterUploadMiddleware(upload.single("file"));
const uploadMultiImage = upload.array("multi-files", 4);

router.post('', uploadSingleImage, validator.product.validateStore, productController.createProduct)
router.get('', productController.findAllProduct)
router.put('/:productId', uploadSingleImage,validator.product.validateUpdate, productController.updateProduct)
// router.put('/:productId', uploadMultiImage,validator.product.validateUpdate, productController.updateProduct)
router.delete('/:productId', productController.deleteProduct)
router.get(':/categoryId', productController.findAllProductByCategory)
// router.put(':/id', productController.)

export default router