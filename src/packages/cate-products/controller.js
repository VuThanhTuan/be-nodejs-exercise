import CateProductService from './service'
import ProductService from '../products/service'
import handle from '../../utils/handle'
import to from '../../utils/to'

const cateProductService = new CateProductService()
const productService = new ProductService()

//get All category product
async function getAllCategory(req, res) {
  const [error, data] = await to(cateProductService.findAll())
  handle(res, data, error)
}
//create new category
async function createCategory(req, res) {
  const [error, data] = await to(cateProductService.create(req))
  handle(res, data, error)
}
//update a category 
async function updateCategory(req, res) {
  const [error, data] = await to(cateProductService.update(req))
  handle(res, data, error)
}
//delete category by categoryId
async function deleteCategory(req, res) {
  const [error, data] = await to(cateProductService.delete(req))
  await to(productService.deleteManyByCategoryId(req))
  handle(res, data, error)
}
export default {
  getAllCategory,
  createCategory,
  deleteCategory,
  updateCategory
}
