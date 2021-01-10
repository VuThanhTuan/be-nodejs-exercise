import errorConstants from '../../constants/error'
import productModel from './product.model'

class ProductService {
  // create a product
  async create(req) {
    try {
      console.log(req)
      const newProduct = await new productModel(req).save()
      return newProduct
    } catch (error) {
      throw error
    }
  }
  // update a product
  async update(req, res) {
    try {
      const product = await productModel.findById(req)
      if (!product) {
        throw {
          code: 404,
          name: errorConstants.notFoundError.ProductNotFound
        }
      }
      const updateProduct = await productModel.updateOne({ _id: req }, res)
      return updateProduct
    } catch (error) {
      throw error
    }
  }
  //find all product exist in database
  async FindAll(page) {
    try {
      const PAGE_SIZE = 10;
      const skip = (page - 1) * PAGE_SIZE;
      const products = productModel.find({}).skip(skip).limit(PAGE_SIZE)
      return products
    } catch (error) {
      throw error
    }
  }
  //find products with categoryId  
  async FindMany(categoryId) {
    try {
      const PAGE_SIZE = 10;
      const skip = (page - 1) * PAGE_SIZE;
      const products = await productModel.find({categoryId: categoryId}).skip(skip).limit(PAGE_SIZE)
      if (!products) {
        throw {
          code: 404,
          name: errorConstants.notFoundError.ProductNotFound
        }
      }
      return products
    } catch (error) {
      throw error
    }
  }
  // Delete a product by Id
  async delete(req) {
    try {
      const product = await productModel.findByIdAndRemove(req)
      if (!product) {
        throw {
          code: 404,
          name: errorConstants.notFoundError.ProductNotFound
        }
      }
      return true
    } catch (error) {
      throw error
    }
  }
  // Delete many by categoryId
  async deleteManyByCategoryId(req) {
    try {
      await productModel.deleteMany({ categoryId: req })
      return true
    } catch (error) {
      throw error
    }
  }
  // Delete All product
  async deleteAllProduct() {
    try {
      await productModel.remove({})
      return true
    } catch (error) {
      throw error
    }
  }
}

export default ProductService