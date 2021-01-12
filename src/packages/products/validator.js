import Joi from 'joi'
import config from '../../config'
import customizeErrorMessage from '../../utils/base-validate';


export default {
  validateStore: {
    body: {
      productName: Joi.string().required().label('productName').error(customizeErrorMessage()),
      productCode: Joi.string().required().max(10).min(3).label('productCode').error(customizeErrorMessage()),
      price: Joi.number().required().min(0).label('price').error(customizeErrorMessage()),
      images: Joi.string().required().error(customizeErrorMessage()),
      categoryId: Joi.string().required().error(customizeErrorMessage()),
      description: Joi.string().required().max(255).min(10).label('description').error(customizeErrorMessage())
    }
  },
  validateUpdate: {
    body: {
      productName: Joi.string().required().label('productName').error(customizeErrorMessage()),
      productCode: Joi.string().required().max(10).min(3).label('productCode').error(customizeErrorMessage()),
      price: Joi.number().required().min(0).label('price').error(customizeErrorMessage()),
      images: Joi.string().required().error(customizeErrorMessage()),
      categoryId: Joi.string().required().error(customizeErrorMessage()),
      description: Joi.string().required().max(255).min(10).label('description').error(customizeErrorMessage())
    }
  }
}
