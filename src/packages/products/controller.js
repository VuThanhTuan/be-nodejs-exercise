import ProductService from './service'
import handle from '../../utils/handle'
import to from '../../utils/to'

const productService = new ProductService()
// create a product
async function createProduct(req, res) {
  // console.log(req)
  const dataProduct = {
    productName: req.body.productName,
    price: req.body.price,
    description: req.body.description,
    categoryId: req.body.categoryId,
    avatar: req.body.avatar
  }
  console.log(dataProduct)
  const [error, data] = await to(productService.create(dataProduct));
  handle(res, data, error)
}
// update a product 
async function updateProduct(req, res) {
  const dataProduct = {
    productName: req.body.productName,
    price: req.body.price,
    description: req.body.description,
    categoryId: req.body.categoryId,
    avatar: req.body.images,
    images: req.images
  }
  const [error, data] = await to(productService.update(dataProduct));
  handle(res, data, error)
}
// get all product
async function findAllProduct(req, res) {
  const page = parseInt(req.query.page);
  const [error, data] = await to(productService.FindAll(page))
  handle(res, data, error)
}
// get all product by categoryId 
async function findAllProductByCategory(req, res) {
  const [error, data] = await to(productService.FindMany())
  handle(res, data, error)
}
// delete product by productId
async function deleteProduct(req, res) {
  const [error, data] = await to(productService.delete(req))
  handle(res, data, error)
}
export default {
  findAllProduct,
  updateProduct,
  createProduct,
  deleteProduct,
  findAllProductByCategory
}