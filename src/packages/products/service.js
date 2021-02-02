import errorConstants from '../../constants/error'
import lodash, { isBuffer } from 'lodash'
import repo from './repository'

const ALLOWED_ATTRIBUTES = ['productName', 'price', 'description', 'images', 'categoryId', 'typeId', 'avatar']

class ProductService {
  // create a product
  async create(req) {
    const data = lodash.pick(req, ALLOWED_ATTRIBUTES)
    const product = await repo.create(data)
    if (product) {
      return product
    }
    throw new Error(errorConstants.errorResponse.create)
  }
  // update a product
  async update(req, res) {
    const product = await repo.update(req.params.productId, req.body)
    if (product) {
      if (req.images) {
        const listIndexNewImages = JSON.parse(req.body.listIndex);
        const listDeleteImageIndex = JSON.parse(req.body.listDeleteImageIndex);
        const oldProduct = await repo.getByProductId(req.params.productId)

        if (oldProduct) {
          const oldListImage = oldProduct.images;
          const newProduct = await repo.updateImage(req.params.productId, oldListImage, req.images, listIndexNewImages, listDeleteImageIndex)

          if (newProduct) {
            return newProduct;
          }

          throw new Error(errorConstants.errorResponse.updateImage)
        }
        throw new Error(errorConstants.errorResponse.getDetailProduct)
      }
      return product;
    }
    throw new Error(errorConstants.errorResponse.update)
  }
  //find all product exist in database
  async FindAll(page, PAGE_SIZE) {
    const allData = await repo.getAll();
    const data = await repo.getProduct(page, PAGE_SIZE)
    const count = await allData.length;
    return {
      totalItem: count,
      data: data
    }
  }
  //find All product search
  async FindAllProductSearch(typeId, categoryId, keywords, page, PAGE_SIZE) {
    const allData = await repo.getAll(typeId, categoryId, keywords, page, PAGE_SIZE);
    const data = await repo.getProductSearch(typeId, categoryId, keywords, page, PAGE_SIZE)
    const count = await allData.length;
    return {
      totalItem: count,
      data: data
    }
  }
  //find products with categoryId  
  async FindMany(req) {
    const data = await repo.getByCategory(req.params.categoryId)
    return data
  }
  // find by productId (get detail product)
  async FindOne(req) {
    const data = await repo.getByProductId(req.params.productId)
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