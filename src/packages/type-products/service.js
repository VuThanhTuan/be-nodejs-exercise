import errorConstants from '../../constants/error'
import lodash from 'lodash'
import repo from './repository'

const ALLOWED_ATTRIBUTES = ['name']

class TypeProductService {
  //Create new Type product
  async create(req) {
    const data = lodash.pick(req.body, ALLOWED_ATTRIBUTES)
    const newType = await repo.create(data)
    if (newType) {
      return newType
    }
    throw new Error(errorConstants.errorResponse.create)
  }
  //Find All Type Product
  async findAll() {
    const data = await repo.getAll()
    return data
  }
  //Update Type Product
  async update(req) {
    const data = lodash.pick(req.body, ALLOWED_ATTRIBUTES)
    const typeProduct = await repo.update(req.params.typeId, data)
    if (typeProduct) {
      return typeProduct
    }
    throw new Error(errorConstants.errorResponse.update)
  }
  //Delete Type Product
  async delete(req, res) {
    const typeProduct = await repo.destroy(req.params.typeId)
    if(typeProduct) {
      return 'Delete success!'
    }
    throw new Error(errorConstants.errorResponse.destroy)
  }
}

export default TypeProductService