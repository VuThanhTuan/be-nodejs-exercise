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
      if (req.fileValidationError) {
        return res.status(500).send({
          code: 500,
          name: req.fileValidationError,
        })
      }
      if (err) {
        return res.status(500).send({
          error: 'FILE UPLOAD ERROR',
          message: `Something wrong ocurred when trying to upload the file`,
        });
      }
      next();
    });
}
const uploadSingleImage = upload.single("file");
const uploadMultiImage = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'multi-files', maxCount: 4 }]);

router.post('', uploadSingleImage, validator.product.validateStore, productController.createProduct)
router.get('', validator.product.validateQueryParam, productController.findAllProductSearch)
router.put('/:productId', uploadMultiImage, validator.product.validateUpdate, productController.updateProduct)
router.delete('/:productId', productController.deleteProduct)
router.get('/findBy/:categoryId', productController.findAllProductByCategory)
router.get('/:productId', productController.findProductById)

export default router