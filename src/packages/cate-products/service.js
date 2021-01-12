import errorConstants from '../../constants/error'
import lodash from 'lodash'
import repository from '../type-products/repository'

const ALLOWED_ATTRIBUTES = ['name', 'typeId']

class CateProductService {
  //get All category product
  async findAll() {
    const data = await repository.getAll()
    return data
  }
  //get category by type product
  async findByTypeId(req, res) {
    const data = await repository.getByTypeId(req.params.typeId)
    return data
  }
  // create new category by a type product
  async create(req, res) {
    const data = lodash.pick(req.body, ALLOWED_ATTRIBUTES)
    const category = await repository.create(data)
    if (category) {
      return category
    }
    throw new Error(errorConstants.errorResponse.create)
  }
  //delete a category
  async delete(req, res) {
    const category = await repository.destroy(req.params.categoryId)
    if (category) {
      return 'Delete success!'
    }
    throw new Error(errorConstants.errorResponse.destroy)
  }
  //delete many category by TypeId when deleted type by typeId
  async deleteCategoryByTypeId(req, res) {
    const category = await repository.destroyByTypeId(req.params.typeId)
    if (category) {
      return true
    }
    throw new Error(errorConstants.errorResponse.destroy)
  }
  //update a category
  async update(req, res) {
    const data = lodash.pick(req.body, ALLOWED_ATTRIBUTES)
    const category = await repository.update(req.params.categoryId, data)
    if (category) {
      return category
    }
    throw new Error(errorConstants.errorResponse.update)
  }
}

export default CateProductService