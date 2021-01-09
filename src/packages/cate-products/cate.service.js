import cateModel from './cate.model'
import errorConstants from '../../constants/error'

class CateProductService {
  //get All category product
  async findAll() {
    try {
      const cates = await cateModel.find()
      if(!cates) {
        throw {
          code: 404,
          name: errorConstants.notFoundError.CateNotFound
        }
      }
      return cates
    } catch (error) {
      throw error
    }
  }
  //get category by type product
  async findByTypeId(req,res) {
    try {
      const cate = await cateModel.findById(req)
      if(!cate) {
        throw {
          code: 404,
          name: errorConstants.notFoundError.CateNotFound
        }
      }
      return cate
    } catch (error) {
      throw error
    }
  }
  // create new category by a type product
  async createTypeProduct(req, res) {
    try {
      const newCategory = await new cateModel(req).save()
      return newCategory
    } catch (error) {
      throw error
    }
  }
  //delete a category
  async deleteCategoryById(req, res) {
    try {
      const cateById = await cateModel.findById(req)
      if (!cateById) {
        throw {
          code: 404,
          name: errorConstants.notFoundError.CateNotFound
        }
      }
      await cateModel.findByIdAndRemove(req)
      return true
    } catch (error) {
      throw error
    }
  }
  //delete many category by TypeId when deleted type by typeId
  async deleteCategoryByTypeId(req, res) {
    try {
      await cateModel.deleteMany({typeId: req})
      return true
    } catch (error) {
      throw error
    }
  }
  //update a category
  async updateCategory(req, res) {
    try {
      const category = await cateModel.findById(req)
      if(!category) {
        throw {
          code: 404,
          name: errors.notFoundError.CateNotFound
        }
      }
      const updateCategory = await cateModel.updateOne({_id: req}, res)
      return updateCategory
    } catch (error) {
      throw error
    }
  }
  //delete all category
}

export default CateProductService