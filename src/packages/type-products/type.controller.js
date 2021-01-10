import TypeProductService from './type.service'
import checkError from '../../utils/checkError'
import CategoryService from '../cate-products/cate.service'

const categoryService = new CategoryService()
const typeProductService = new TypeProductService()

//Get all type product
async function findAll(req, res) {
  try {
    const types = await typeProductService.findAll()
    return res.status(200).json({ status: 200, message: 'get types product success', data: types })
  } catch (error) {
    checkError(error, res)
  }
}
//Get type product by typeId
async function getTypeProductByTypeId(req, res) {
  try {
    const type = await typeProductService.findTypeByTypeId(req.params)
    return res.status(200).json({ status: 200, message: 'get type product success', data: type })
  } catch (error) {
    checkError(error, res)
  }
}
//Create new type product
async function createType(req, res) {
  try {
    // Validate request from client
    if (!req.body.name) {
      return res.status(400).send({
        message: "Type name can not be empty"
      });
    }

    const types = await typeProductService.findAll()
    let checkDuplicate = false
    types.forEach(type => {
      //Check duplicate name
      if (type.name.toUpperCase() == req.body.name.toUpperCase()) {
        checkDuplicate = true
      }
    });
    //case name is duplicate
    if (checkDuplicate) {
      return res.status(406).send({
        message: "type already exist"
      })
    }
    //case name is not exist
    else {
      const data = {
        name: req.body.name
      }
      const newType = await typeProductService.create(data)
      return res.status(201).json(newType)
    }
  } catch (error) {
    return error
  }
}
//update a type by id
async function updateType(req, res) {
  try {
    // Validate request from client
    if (!req.body.name) {
      return res.status(400).send({
        message: "Type name can not be empty"
      });
    }
    const types = await typeProductService.findAll()
    let check = false
    types.forEach(type => {
      //Check duplicate name
      if (type.name.toUpperCase() == req.body.name.toUpperCase()) {
        check = true
      }
    });
    //case name is duplicate
    if (check) {
      return res.status(401).send({
        message: "type already exist"
      })
    }
    //case name is not exist then update
    else {
      const { typeId } = req.params
      const data = {
        name: req.body.name
      }
      const updateType = await typeProductService.update(typeId, data)
      return res.status(200).json(updateType)
    }
  } catch (error) {
    return error
  }
}
//delete a type by id
async function deleteTypeProduct(req, res) {
  try {
    const typeId = req.params.typeId
    await typeProductService.delete(typeId)
    await categoryService.deleteCategoryByTypeId(typeId)
    return res.status(200).json(true)
  } catch (error) {
    checkError(error, res)
  }
}

export default {
  createType,
  findAll,
  getTypeProductByTypeId,
  deleteTypeProduct,
  updateType
}