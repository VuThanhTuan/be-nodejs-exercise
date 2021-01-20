import errorConstants from '../../constants/error'
import lodash, { isBuffer } from 'lodash'
import repo from './repository'

const ALLOWED_ATTRIBUTES = ['productName', 'price', 'description', 'images', 'categoryId', 'avatar']

class ProductService {
  // create a product
  async create(req) {
    const data = lodash.pick(req, ALLOWED_ATTRIBUTES)
    try {
      const product = await repo.create(data)
      if (product) {
        return product
      }
    } catch (error) {
      throw new Error(errorConstants.errorResponse.create)
    }
  }
  // update a product
  async update(req, res) {
    const data = lodash.pick(req, ALLOWED_ATTRIBUTES)
    try {
      const product = await repo.update(req.params.productId, data)
      if (product) {
        return product
      }
    } catch (error) {
      throw new Error(errorConstants.errorResponse.update)
    }
  }
  //find all product exist in database
  async FindAll(page) {
    const data = await repo.getAll(page)
    return data
  }
  //find products with categoryId  
  async FindMany(req) {
    const data = await repo.getByCategory(req.params.categoryId)
    return data
  }
  // Delete a product by Id
  async delete(req) {
    const product = await repo.destroy(req.params.productId)
    if (product) {
      return 'Delete Success!'
    }
    throw new Error(errorConstants.errorResponse.destroy)
  }
  // Delete many by categoryId
  async deleteManyByCategoryId(req) {
    const product = await repo.destroyByCategory(req.params.categoryId)
    if (product) {
      return true
    }
    throw new Error(errorConstants.errorResponse.destroy)
  }
}

export default ProductService