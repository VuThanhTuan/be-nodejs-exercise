import Joi from 'joi'
import customizeErrorMessage from '../../utils/base-validate';

export default {
  validateStore: {
    body: {
      name: Joi.string().max(5).required().label('name').error(customizeErrorMessage())
    }
  },
  validateUpdate: {
    body: {
      name: Joi.string().max(5).required().label('name').error(customizeErrorMessage()),
    }
  }
}