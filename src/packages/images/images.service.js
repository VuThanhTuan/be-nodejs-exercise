import imageModels from './images.model'

class imageService {
  //upload a photo
  async create(req, res) {
    try {
      const imageUpload = await new imageModels(req).save()
      return imageUpload  
    } catch (error) {
      throw error
    }
  }
  //upload many photo
  async createMany(req,res) {

  }
  //get photo
  async findImage(req,res) {
    try {
      const image = await imageModels.find()
      return image
    } catch (error) {
      throw error
    }
  }
}

export default imageService