import ProductService from './service'
import handle from '../../utils/handle'
import to from '../../utils/to'

const productService = new ProductService()
// create a product
async function createProduct(req, res) {
  const dataProduct = {
    productName: req.body.productName,
    price: req.body.price,
    description: req.body.description,
    categoryId: req.body.categoryId,
    typeId: req.body.typeId,
    avatar: req.body.avatar,
    images: req.body.images
  }
  const [error, data] = await to(productService.create(dataProduct));
  handle(res, data, error)
}
// update a product 
async function updateProduct(req, res) {
  const [error, data] = await to(productService.update(req));
  handle(res, data, error)
}
// get all product
async function findAllProduct(req, res) {
  const page = parseInt(req.query.page);
  const PAGE_SIZE = parseInt(req.query.PAGE_SIZE)
  const [error, data] = await to(productService.FindAll(page, PAGE_SIZE))
  handle(res, data, error)
}
// get product search
async function findAllProductSearch(req, res) {
  const page = parseInt(req.query.page);
  const PAGE_SIZE = parseInt(req.query.PAGE_SIZE);
  const typeId = req.query.typeId;
  const categoryId = req.query.categoryId;
  const keywords = req.query.keywords;
  const [error, data] = await to(productService.FindAllProductSearch(typeId, categoryId, keywords, page, PAGE_SIZE))
  handle(res, data, error)
}
// get detail product by productId
async function findProductById(req, res) {
  const [error, data] = await to(productService.FindOne(req))
  handle(res, data, error)
}
// get all product by categoryId 
async function findAllProductByCategory(req, res) {
  const [error, data] = await to(productService.FindMany(req))
  handle(res, data, error)
}
// delete product by productId
async function deleteProduct(req, res) {
  const [error, data] = await to(productService.delete(req))
  handle(res, data, error)
}
export default {
  findAllProduct,
  findAllProductSearch,
  updateProduct,
  createProduct,
  deleteProduct,
  findAllProductByCategory,
  findProductById
}