import Router from 'express'
import imageController from '././images.controller'
import upload from '../../utils/multer'

const fs = require('fs')

const router = Router()
const uploadImage = upload.single('images')
const uploadMultiImage = upload.array("multi-files", 4);

router.post('/', uploadImage, imageController.createOne)
router.post('/multi',uploadMultiImage, imageController.createMultiplePhoto)
router.get('', imageController.findImage)

export default router