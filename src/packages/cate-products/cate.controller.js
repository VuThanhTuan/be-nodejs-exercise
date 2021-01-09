import CateProductService from './cate.service'
import checkError from '../../utils/checkError'
import ProductService from '../products/product.service'

const cateProductService = new CateProductService()
const productService = new ProductService()

//get All category product
async function getAllCategory(req, res) {
  try {
    const categories = await cateProductService.findAll()
    return res.status(200).json({ status: 200, message: 'get categories products success', data: categories })
  } catch (error) {
    checkError(error, res)
  }
}
//create new category
async function createCategory(req, res) {
  try {
    const category = req.body
    //check empty field
    if (!category.name) {
      return res.status(400).send({
        message: 'Category name can not be empty'
      })
    }
    const categories = await cateProductService.findAll()
    let checkDuplicate = false
    categories.forEach(cate => {
      //check duplicate name
      if (cate.name.toUpperCase() == category.name.toUpperCase()) {
        checkDuplicate = true
      }
    });
    //case name is duplicate
    if (checkDuplicate) {
      return res.status(406).send({
        message: 'category name already exists'
      })
    }
    //case name is not exist
    else {
      const data = {
        typeId: category.typeId,
        name: category.name
      }
      console.log(data)
      const newCategory = await cateProductService.createTypeProduct(data)
      return res.status(201).json(newCategory)
    }
  } catch (error) {
    checkError(error, res)
  }
}
//update a category 
async function updateCategory(req, res) {
  try {
    const category = req.body
    //check empty field
    if (!category.name) {
      return res.status(400).send({
        message: 'Category name can not be empty'
      })
    }
    const categories = await cateProductService.findAll()
    let checkDuplicate = false
    categories.forEach(cate => {
      //check duplicate name
      if (cate.name.toUpperCase() == category.name.toUpperCase()) {
        checkDuplicate = true
      }
    });
    //case name is duplicate
    if (checkDuplicate) {
      return res.status(406).send({
        message: 'category name already exists'
      })
    }
    //case name is not exist
    else {
      const data = {
        name: category.name
      }
      console.log(data)
      const categoryUpdate = await cateProductService.updateCategory(req.params.categoryId, data)
      return res.status(200).json(categoryUpdate)
    }
  } catch (error) {
    checkError(error, res)
  }
}
//delete category by categoryId
async function deleteCategory(req,res) {
  try {
    const categoryId = req.params.categoryId
    await cateProductService.deleteCategoryById(categoryId)
    await productService.deleteManyByCategoryId(categoryId)
    return res.status(200).json(true)
  } catch (error) {
    checkError(error, res)
  }
}
export default {
  getAllCategory,
  createCategory,
  deleteCategory,
  updateCategory
}
