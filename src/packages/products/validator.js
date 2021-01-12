import Joi from 'joi'
import customizeErrorMessage from '../../utils/base-validate';


export default {
  validateStore: {
    body: {
      productName: Joi.string().required().label('name').error(customizeErrorMessage()),
      productCode: Joi.string().required().max(10).min(3).label('name').error(customizeErrorMessage()),
      price: Joi.number().required().min(0).label('name').error(customizeErrorMessage()),
      images: Joi.string().required().error(customizeErrorMessage()),
      categoryId: Joi.string().required().error(customizeErrorMessage()),
      description: Joi.string().required().max(255).min(10).label('name').error(customizeErrorMessage())
    }
  },
  validateUpdate: {
    body: {
      productName: Joi.string().required().label('name').error(customizeErrorMessage()),
      productCode: Joi.string().required().max(10).min(3).label('name').error(customizeErrorMessage()),
      price: Joi.number().required().min(0).label('name').error(customizeErrorMessage()),
      images: Joi.string().required().error(customizeErrorMessage()),
      categoryId: Joi.string().required().error(customizeErrorMessage()),
      description: Joi.string().required().max(255).min(10).label('name').error(customizeErrorMessage())
    }
  }
}
