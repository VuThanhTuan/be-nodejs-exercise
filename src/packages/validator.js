import validate  from 'express-validation'
import type from './type-products/validator'


function parse(object) {
  const data = {}
  for (const key of Object.keys(object)) {
    data[key] = validate(object[key])
  }
  return data
}

export default {
  typeProduct: parse(type)
}