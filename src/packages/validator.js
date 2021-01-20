import validate  from 'express-validation'
import typeProduct from './type-products/validator'
import product from './products/validator'
import category from './cate-products/validator'


function parse(object) {
  const data = {}
  for (const key of Object.keys(object)) {
    data[key] = validate(object[key])
  }
  return data
}

export default {
  typeProduct: parse(typeProduct),
  product: parse(product),
  category: parse(category)
}