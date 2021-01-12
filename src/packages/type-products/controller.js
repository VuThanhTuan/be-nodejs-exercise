import TypeProductService from './service'
import CategoryService from '../cate-products/service'
import handle from '../../utils/handle'
import to from '../../utils/to'

const categoryService = new CategoryService()
const typeProductService = new TypeProductService()

//Get all type product
async function findAll(req, res) {
    const [error, data] = await to(typeProductService.findAll())
    handle(res, data, error)
}
//Create new type product
async function createType(req, res) {
  const [error, data] = await to(typeProductService.create(req))
  handle(res, data, error)
}
//update a type by id
async function updateType(req, res) {
  const [error, data] = await to(typeProductService.update(req))
  handle(res, data, error)
}
//delete a type by id
async function deleteTypeProduct(req, res) {
 const [error, data] = await to(typeProductService.delete(req))
 await to(categoryService.deleteCategoryByTypeId(req))
 handle(res, data, error)
}

export default {
  createType,
  findAll,
  deleteTypeProduct,
  updateType
}