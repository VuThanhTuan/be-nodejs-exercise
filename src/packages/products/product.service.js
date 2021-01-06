import error from '../../constants/error'
import productModel from './product.model'

class ProductService {
  async create(req) {
    try {
      console.log(req)
      const newProduct = await new productModel(req).save()
      return newProduct
    } catch (error) {
      throw error
    }
  }

  async FindAll() {
    try {
      const products = productModel.find()
      if (!products) {
        throw {
          code: 404,
          name: 'Not Found Product'
        }
      }
      return products
    } catch (error) {
      throw error
    }
  }

  async FindMany(query) {
    try {
      const products = await productModel.find(query)
      if (!products) {
        throw {
          code: 404,
          name: 'Not Found Product'
        }
      }
      return products
    } catch (error) {
      throw error
    }
  }
}

export default ProductService