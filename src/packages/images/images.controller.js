import ImageService from './images.service'
import checkError from '../../utils/checkError'

const imageService = new ImageService()
//get images
async function findImage(req, res) {
  try {
    const image = await imageService.findImage()
    return res.status(200).send({message: 'get success' , data: image})
  } catch (error) {
    checkError(error,res)
  }
}
//upload a photo
async function createOne(req, res) {
  try {
    const image = "G:/TTSNCC/BE/be-nodejs-exercise/src/uploads/" + req.file.filename;
    if (!image) {
      return res.status(400).send({
        message: 'You must select a file to upload'
      })
    }
    const data = {
      images: req.file.filename
    }
    const imageUpload = await imageService.create(data)
    return res.status(200).json(imageUpload)
  } catch (error) {
    checkError(error, res)
  }
}
//upload multiple photo
async function createMultiplePhoto(req, res) {
  try {
    // console.log(req)
    const multipleFile = req.files
    if (multipleFile.length <= 0) {
      return res.send({ message: 'You must select at least one file!' })
    }
  } catch (error) {
    console.log(error)
    // checkError(error,res)
  }
}

export default {
  createOne,
  createMultiplePhoto,
  findImage
}