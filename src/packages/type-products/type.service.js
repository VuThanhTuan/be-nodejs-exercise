import { response } from 'express'
import typeModel from './type.model'
import errorConstants from '../../constants/error'


class TypeProductService {
  //Create new Type product
  async create(req) {
    try {
      const newType = await new typeModel(req).save()
      return newType
    } catch (error) {
      throw error
    }
  }
  //Find All Type Product
  async findAll() {
    try {
      const types = await typeModel.find()
      if (!types) {
        throw {
          code: 404,
          name: errorConstants.notFoundError.TypeNotFound
        }
      }
      return types
    } catch (error) {
      throw error
    }
  }
  //Find Type product by typeId
  async findTypeByTypeId(req, res) {
    try {
      const type = await typeModel.findById(req.typeId)
      if (!type) {
        throw {
          code: 404,
          name: errorConstants.notFoundError.TypeNotFound
        }
      }
      return type
    } catch (error) {
      throw error
    }
  }
  //Update Type Product
  async update(id, data) {
    try {
      const type = await typeModel.findById(id)
      if (!type) {
        throw {
          code: 404,
          name: errorConstants.notFoundError.TypeNotFound
        }
      }
      const updateType = await typeModel.updateOne({ _id: id }, data)
      return updateType
    } catch (error) {
      throw error
    }
  }
  //Delete Type Product
  async delete(req, res) {
    try {
      const typeById = await typeModel.findById(req)
      if (!typeById) {
        throw {
          code: 404,
          name: errorConstants.notFoundError.TypeNotFound
        }
      }
      await typeModel.findByIdAndRemove(req)
      return true
    } catch (error) {
      throw error
    }
  }
}

export default TypeProductService