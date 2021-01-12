import Joi from 'joi'
import config from '../../config'
import customizeErrorMessage from '../../utils/base-validate';


export default {
  validateStore: {
    body: {
      name: Joi.string().required().label('name').error(customizeErrorMessage()),
      typeId: Joi.string().required().error(customizeErrorMessage())
    }
  },
  validateUpdate: {
    body: {
      name: Joi.string().required().label('name').error(customizeErrorMessage()),
      typeId: Joi.string().required().error(customizeErrorMessage()),
    }
  }
}
