import Joi from 'joi'
import customizeErrorMessage from '../../utils/base-validate';

export default {
  validateStore: {
    body: {
      name: Joi.string().required().max(5).label('name').error(customizeErrorMessage())
    }
  },
  validateUpdate: {
    body: {
      name: Joi.string().required().label('name').error(customizeErrorMessage()),
    }
  }
}