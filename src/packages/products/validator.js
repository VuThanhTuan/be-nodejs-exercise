import Joi from 'joi'
import customizeErrorMessage from '../../utils/base-validate';
Joi.objectId = require('joi-objectid')(Joi)

export default {
  validateStore: {
    body: {
      productName: Joi.string().required().label('name').error(customizeErrorMessage()),
      price: Joi.number().required().min(0).label('price').error(customizeErrorMessage()),
      // images: Joi.string().required().error(customizeErrorMessage()),
      avatar: Joi.string().required().error(customizeErrorMessage()),
      categoryId: Joi.required().error(customizeErrorMessage()),
      typeId: Joi.required().error(customizeErrorMessage()),
      description: Joi.string().required().max(1000).min(10).label('description').error(customizeErrorMessage())
    }
  },
  validateUpdate: {
    body: {
      productName: Joi.string().required().label('name').error(customizeErrorMessage()),
      price: Joi.number().required().min(0).label('name').error(customizeErrorMessage()),
      categoryId: Joi.string().required().error(customizeErrorMessage()),
      typeId: Joi.required().error(customizeErrorMessage()),
      description: Joi.string().required().max(1000).min(10).label('name').error(customizeErrorMessage())
    }
  },
  validateQueryParam: {
    query: {
      keyword: Joi.string().label('keyword').error(customizeErrorMessage()),
      page: Joi.number().min(0).label('page').error(customizeErrorMessage()),
      PAGE_SIZE: Joi.number().min(0).label('PAGE_SIZE').error(customizeErrorMessage()),
      typeId: Joi.objectId().allow(null).allow('').label('typeId').error(customizeErrorMessage()),
      categoryId: Joi.objectId().allow(null).allow('').label('categoryId').error(customizeErrorMessage())
    }
  }
}
